import { NextResponse } from 'next/server'
import { z } from 'zod'
import { promises as fs } from 'fs'
import path from 'path'

const reservationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  partySize: z.number().int().min(1).max(20),
  date: z.string(),
  time: z.string(),
  notes: z.string().optional(),
})

export async function POST(request: Request): Promise<ReturnType<typeof NextResponse.json>> {
  try {
    const body = await request.json()
    const parsed = reservationSchema.parse({
      ...body,
      partySize: Number(body.partySize),
    })

    const when = new Date(`${parsed.date}T${parsed.time}`)
    if (isNaN(when.getTime()) || when < new Date()) {
      return NextResponse.json({ error: 'Past date/time' }, { status: 400 })
    }

    const record = { id: Date.now().toString(), ...parsed, createdAt: new Date().toISOString() }
    const file = path.join(process.cwd(), 'data', 'reservations.json')
    let list: unknown[] = []
    try {
      const existing = await fs.readFile(file, 'utf-8')
      list = JSON.parse(existing)
      if (!Array.isArray(list)) list = []
    } catch {
      // file may not exist yet
    }
    list.push(record)
    await fs.writeFile(file, JSON.stringify(list, null, 2), 'utf-8')

    console.log('[reservations] confirmation email →', parsed.email, record)

    return NextResponse.json({ ok: true, id: record.id })
  } catch (err) {
    console.error('[reservations] error', err)
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}



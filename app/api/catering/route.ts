import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  eventDate: z.string().optional(),
  headcount: z.string().optional(),
  budget: z.string().optional(),
  notes: z.string().optional(),
  _hp: z.string().optional(),
})

export async function POST(req: Request) {
  const form = await req.formData()
  const payload = Object.fromEntries(form.entries())
  const parsed = schema.safeParse(payload)
  if (!parsed.success || (parsed.data._hp as string | undefined)) {
    return NextResponse.json({ ok: true }, { status: 200 })
  }
  // eslint-disable-next-line no-console
  console.log('catering', parsed.data)
  return NextResponse.json({ ok: true })
}



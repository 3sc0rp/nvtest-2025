import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(5),
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
  console.log('contact', parsed.data)
  return NextResponse.json({ ok: true })
}



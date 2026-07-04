// app/studio/[[...tool]]/page.tsx
'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config' // ৩টি ডাবল ডট (../) ই হবে একদম নিখুঁত পাথ

export default function StudioPage() {
  return <NextStudio config={config} />
}

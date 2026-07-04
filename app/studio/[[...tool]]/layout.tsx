// app/[[...tool]]/layout.tsx
import React from 'react'

export const metadata = {
  title: 'Sanity Studio Dashboard',
  description: 'Manage projects, skills, and messages',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // এখানে কোনো <html> বা <body> ট্যাগ থাকবে না! 
    // কারণ এটি মেইন layout.tsx এর ভেতরে রেন্ডার হবে।
    <div style={{ margin: 0, padding: 0, minHeight: '100vh', background: '#fff' }}>
      {children}
    </div>
  )
}

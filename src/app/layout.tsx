import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vaishnavi Desai — Stories & Strategies',
  description: 'Content strategy · Editorial · Storytelling',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}

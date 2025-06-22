import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Task Management App',
  description: 'A simple task management application built with Next.js',
  keywords: 'task management, next.js, react, todo app',
  authors: [{ name: 'Greeshmanth' }],
  creator: 'Greeshmanth ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

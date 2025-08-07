import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sortly',
  description: 'Sortly is a simple and responsive task organizer for scheduling and managing to-dos'
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  )
}
import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gatil',
  description: 'Aqui você pode achar seu novo amiguinho de quatro patas!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-sreen flex w-full flex-col items-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <footer className="fixed bottom-0 text-xs text-muted-foreground">
            &copy;{' '}
            <Link
              href="https://andre-dev-eight.vercel.app/"
              className="hover:underline hover:underline-offset-2"
            >
              André Barbosa
            </Link>
            . Todos os direitos reservados - {new Date().getFullYear()}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

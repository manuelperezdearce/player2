'use client'
import './globals.css'
import { Stack } from '@mui/material'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Player 2',
  description: 'Gaming E-Commerce ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Stack component={'body'} minHeight={'100vh'} justifyContent={'space-between'}>
        <Stack>
          <Navbar />
          {children}
        </Stack>
        <Footer />
      </Stack>
    </html >
  )
}

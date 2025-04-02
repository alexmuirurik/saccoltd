import type { Metadata } from 'next'
import { Nunito, Nunito_Sans } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import { Toaster } from '@/components/ui/sonner'

const nunito = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
})

const nunitoSans = Nunito_Sans({
    variable: '--font-nunito-sans',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Jikuze Sacco',
    description: 'Welcome to Jikuze Sacco',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body
                className={`${nunito.className} ${nunitoSans.className} antialiased`}
            >
                <NextTopLoader color='teal' />
                {children}
                <Toaster />
            </body>
        </html>
    )
}

export default RootLayout

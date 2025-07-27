import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({
  variable: '--font-Inter',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Aromatic',
  description: 'La mejor perfumeria del pais',
  icons: {
    icon: '/logo/logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body
        className={`${inter.variable}  antialiased flex flex-col md:gap-16 relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

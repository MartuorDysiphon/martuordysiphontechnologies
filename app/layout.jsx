import './globals.css'
import Navigation from '@/pages/Navigation/Navigation'
import Footer from '@/pages/Footer/Footer'

export const metadata = {
  title: 'Martuor Dysiphon | Software Engineering & Secure Systems',
  description: 'Building secure, dependable digital systems for businesses that need technology they can trust. Based in South Africa, serving globally.',
  keywords: 'software engineering, cybersecurity, system architecture, South Africa, web development',
  authors: [{ name: 'Katlego MJ' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Martuor Dysiphon - Secure Digital Systems',
    description: 'Building technology that lasts. Software engineering, cybersecurity, and system architecture.',
    url: 'https://martuordysiphon.site',
    siteName: 'Martuor Dysiphon Technologies',
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
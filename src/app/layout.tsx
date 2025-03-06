import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PrayPic - Connect Through Prayer',
  description: 'Track and share your daily prayers with friends',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} antialiased dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <footer className="dark:bg-gray-900 dark:border-gray-800 border-t">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1 space-y-4">
                <h3 className="font-semibold dark:text-gray-100">PrayPic</h3>
                <p className="text-sm dark:text-gray-400">
                  Connect through prayer, build habits together.
                </p>
              </div>
              <div>
                <h3 className="font-semibold dark:text-gray-100 mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="text-sm dark:text-gray-400 hover:text-primary-green transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-sm dark:text-gray-400 hover:text-primary-green transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold dark:text-gray-100 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="text-sm dark:text-gray-400 hover:text-primary-green transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-sm dark:text-gray-400 hover:text-primary-green transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-semibold dark:text-gray-100 mb-4">Download</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://apps.apple.com"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-green/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs">Download on the</span>
                      <span className="text-sm font-semibold">App Store</span>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com"
                    className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-green/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.685 0 .271.109.513.29.695.181.181.423.29.685.29.271 0 .513-.109.695-.29l10.897-10.898c.181-.181.29-.423.29-.685 0-.271-.109-.513-.29-.695L4.989 1.29C4.808 1.109 4.566 1 4.294 1c-.262 0-.504.109-.685.29-.181.181-.29.423-.29.695 0 .262.109.504.29.685z"/>
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-xs">GET IT ON</span>
                      <span className="text-sm font-semibold">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t dark:border-gray-800">
              <p className="text-center text-sm dark:text-gray-400">
                © {new Date().getFullYear()} PrayPic. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 

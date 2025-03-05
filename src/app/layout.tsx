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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 py-8 md:py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1 space-y-4">
                <h3 className="font-semibold text-gray-900">PrayPic</h3>
                <p className="text-sm text-gray-600">
                  Connect through prayer, build habits together.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/about" className="text-sm text-gray-600 hover:text-primary-green transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-sm text-gray-600 hover:text-primary-green transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/privacy" className="text-sm text-gray-600 hover:text-primary-green transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-sm text-gray-600 hover:text-primary-green transition-colors">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-semibold text-gray-900 mb-4">Download</h3>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="inline-block w-full sm:w-auto bg-gradient-to-r from-primary-green to-green-700 text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-200"
                  >
                    Get the App
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-600">
                © {new Date().getFullYear()} PrayPic. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 
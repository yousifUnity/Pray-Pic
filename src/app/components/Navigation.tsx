'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showDownloadOptions, setShowDownloadOptions] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = 'auto'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDownloadOptions = () => {
    setShowDownloadOptions(!showDownloadOptions)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'dark:bg-gray-900/90 dark:backdrop-blur-md dark:border-b dark:border-gray-800 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <div className="relative w-8 h-8 overflow-hidden rounded-full bg-gradient-to-br from-primary-green to-primary-gold flex items-center justify-center">
              <Image
                src="/app-logo.png"
                alt="PrayPic"
                width={32}
                height={32}
                className="w-7 h-7 object-contain"
              />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary-green via-primary-gold to-primary-green bg-clip-text text-transparent">PrayPic</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-green dark:hover:text-primary-gold transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-green dark:hover:text-primary-gold transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/privacy"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-green dark:hover:text-primary-gold transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-green dark:hover:text-primary-gold transition-colors"
            >
              Terms
            </Link>
          </div>

          {/* Desktop Download Button */}
          <div className="hidden md:flex items-center space-x-4 relative">
            <button
              onClick={toggleDownloadOptions}
              className="bg-gradient-to-r from-primary-green to-primary-gold text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-gold/20 flex items-center gap-2"
            >
              Download App
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 ${showDownloadOptions ? 'rotate-180' : ''}`}>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Download Options Dropdown */}
            {showDownloadOptions && (
              <div className="absolute top-full right-0 mt-2 bg-gray-900 border border-gray-800 rounded-xl shadow-xl p-2 w-64 z-50 animate-fade-in">
                <div className="p-2 space-y-3">
                  <a
                    href="https://apps.apple.com"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="bg-black rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">Download on the</span>
                      <span className="text-sm font-semibold text-white">App Store</span>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <div className="bg-black rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M5 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S5 21.33 5 20.5zM16 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5zM7.5 3C7.5 1.57 8.57.5 10 .5h4c1.43 0 2.5 1.07 2.5 2.5v18c0 1.43-1.07 2.5-2.5 2.5h-4c-1.43 0-2.5-1.07-2.5-2.5v-18z"/>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-400">GET IT ON</span>
                      <span className="text-sm font-semibold text-white">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-green dark:focus:ring-primary-gold z-50"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Fixed Position */}
      <div 
        className={`fixed inset-0 dark:bg-gray-900/95 backdrop-blur-lg transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } md:hidden overflow-hidden`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
          <div className="w-16 h-1 bg-gray-700 rounded-full mb-8"></div>
          
          <Link
            href="/"
            className="text-xl font-medium dark:text-gray-100 hover:text-primary-green dark:hover:text-primary-gold transition-colors w-full text-center py-3 border-b dark:border-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-xl font-medium dark:text-gray-100 hover:text-primary-green dark:hover:text-primary-gold transition-colors w-full text-center py-3 border-b dark:border-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xl font-medium dark:text-gray-100 hover:text-primary-green dark:hover:text-primary-gold transition-colors w-full text-center py-3 border-b dark:border-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-xl font-medium dark:text-gray-100 hover:text-primary-green dark:hover:text-primary-gold transition-colors w-full text-center py-3 border-b dark:border-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-xl font-medium dark:text-gray-100 hover:text-primary-green dark:hover:text-primary-gold transition-colors w-full text-center py-3 border-b dark:border-gray-800"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Terms
          </Link>
          
          <div className="mt-8 w-full px-6 space-y-3">
            <p className="text-center text-gray-400 mb-2">Download our app</p>
            <a
              href="https://apps.apple.com"
              className="bg-black text-white py-3 rounded-xl text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-green/20 w-full flex items-center justify-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-xs">Download on the</span>
                <span className="text-sm font-semibold">App Store</span>
              </div>
            </a>
            <a
              href="https://play.google.com"
              className="bg-black text-white py-3 rounded-xl text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary-green/20 w-full flex items-center justify-center gap-3"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
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
    </nav>
  )
} 

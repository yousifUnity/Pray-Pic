'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <Image
              src="/app-logo.png"
              alt="PrayPic"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-semibold text-xl">PrayPic</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about"
              className="text-gray-600 hover:text-primary-green transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact"
              className="text-gray-600 hover:text-primary-green transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/privacy"
              className="text-gray-600 hover:text-primary-green transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms"
              className="text-gray-600 hover:text-primary-green transition-colors"
            >
              Terms
            </Link>
          </div>

          {/* Desktop Download Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="bg-gradient-to-r from-primary-green to-green-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-200"
            >
              Download App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-green z-50"
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
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } md:hidden overflow-hidden`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 p-4">
          <div className="w-16 h-1 bg-gray-200 rounded-full mb-8"></div>
          
          <Link
            href="/"
            className="text-xl font-medium text-gray-800 hover:text-primary-green transition-colors w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-xl font-medium text-gray-800 hover:text-primary-green transition-colors w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xl font-medium text-gray-800 hover:text-primary-green transition-colors w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-xl font-medium text-gray-800 hover:text-primary-green transition-colors w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-xl font-medium text-gray-800 hover:text-primary-green transition-colors w-full text-center py-3 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Terms
          </Link>
          
          <div className="mt-8 w-full px-6">
            <Link
              href="#"
              className="bg-gradient-to-r from-primary-green to-green-700 text-white py-3 rounded-xl text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-200 w-full flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 

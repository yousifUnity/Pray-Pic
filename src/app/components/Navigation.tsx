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
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
          <Link
            href="/about"
            className="text-2xl font-medium text-gray-800 hover:text-primary-green transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-2xl font-medium text-gray-800 hover:text-primary-green transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="text-2xl font-medium text-gray-800 hover:text-primary-green transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-2xl font-medium text-gray-800 hover:text-primary-green transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Terms
          </Link>
          <Link
            href="#"
            className="bg-gradient-to-r from-primary-green to-green-700 text-white px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download App
          </Link>
        </div>
      </div>
    </nav>
  )
} 
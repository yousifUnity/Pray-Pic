'use client'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),rgba(234,179,8,0.05))] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),rgba(234,179,8,0.05))]"></div>
        <div className="container mx-auto px-4 py-16 md:py-32 text-center relative">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="inline-block text-primary-green animate-slide-in-left">Pray</span>{' '}
              <span className="inline-block text-gray-800 dark:text-gray-100 animate-slide-in-right">Together.</span>{' '}
              <span className="inline-block text-primary-gold animate-fade-in" style={{ animationDelay: '0.5s' }}>Stay Accountable.</span>
            </h1>

            {/* Coming Soon 2025 banner */}
            <div className="mb-8 relative">
              <div className="inline-block relative">
                <span className="bg-gradient-to-r from-primary-green/10 to-primary-gold/10 dark:from-primary-green/20 dark:to-primary-gold/20 px-6 py-2 rounded-full text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200 backdrop-blur-sm">
                  Coming Soon 2025
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-green rounded-full animate-ping"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary-green rounded-full"></span>
                </span>
              </div>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto animate-fade-in">
              Capture your daily prayers, track your progress, and strengthen your connection with the <span className="text-primary-green font-medium">Ummah</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link
                href="#download"
                className="w-full sm:w-auto bg-gradient-to-r from-primary-green to-green-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-green-200 dark:hover:shadow-green-900"
              >
                Download Now
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto text-gray-600 dark:text-gray-300 hover:text-primary-green dark:hover:text-primary-gold transition-colors text-lg group flex items-center justify-center"
              >
                Learn More 
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <svg
            className="w-6 h-6 text-gray-400 dark:text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Rest of your sections remain unchanged */}
      // ... existing code ...
    </div>
  )
}

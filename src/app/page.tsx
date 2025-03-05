'use client'
import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),rgba(234,179,8,0.05))]"></div>
        <div className="container mx-auto px-4 py-16 md:py-32 text-center relative">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="inline-block text-primary-green animate-slide-in-left">Connect</span>{' '}
              <span className="inline-block text-gray-800 animate-slide-in-right">Through Prayer</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto animate-fade-in">
              Track your daily prayers, share moments with friends, and build meaningful spiritual connections.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Link
                href="#download"
                className="w-full sm:w-auto bg-gradient-to-r from-primary-green to-green-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-green-200"
              >
                Download Now
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto text-gray-600 hover:text-primary-green transition-colors text-lg group flex items-center justify-center"
              >
                Learn More 
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <svg
            className="w-6 h-6 text-gray-400"
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

      {/* Features Section */}
      <section className="py-16 md:py-32 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(234,179,8,0.03),transparent)]"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-primary-green to-yellow-600 bg-clip-text text-transparent">
            Elevate Your Prayer Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="group">
              <div className="text-center space-y-4 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-105 active:scale-100 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-yellow-50 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-green transition-colors">Track Daily Prayers</h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                  Never miss a prayer with our intuitive tracking system. Stay consistent and mindful of your daily spiritual practice.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="text-center space-y-4 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-105 active:scale-100 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-yellow-50 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-green transition-colors">Connect with Friends</h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                  Share your spiritual journey with like-minded individuals. Build a supportive community of prayer partners.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="text-center space-y-4 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-105 active:scale-100 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-yellow-50 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-green transition-colors">Build Habits</h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                  Develop consistent prayer habits with reminders and streaks. Transform your spiritual practice into a daily ritual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-32 bg-gradient-to-br from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(34,197,94,0.05),rgba(234,179,8,0.05))]"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-green to-yellow-600 bg-clip-text text-transparent">
            Start Your Journey Today
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            Join thousands of users who have transformed their prayer life with PrayPic.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="w-full sm:w-auto bg-gradient-to-r from-gray-900 to-black text-white px-6 sm:px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-gray-200 inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download on iOS</span>
            </Link>
            <Link
              href="#"
              className="w-full sm:w-auto bg-gradient-to-r from-gray-900 to-black text-white px-6 sm:px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-gray-200 inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span>Get it on Android</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 
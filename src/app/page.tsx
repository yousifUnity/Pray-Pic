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
              <span className="inline-block text-primary-green animate-slide-in-left">Salah</span>{' '}
              <span className="inline-block text-gray-800 dark:text-gray-100 animate-slide-in-right">Companion</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto animate-fade-in">
              Track your daily prayers, share moments of <span className="text-primary-gold font-medium">Khushu</span>, and build meaningful <span className="text-primary-green font-medium">Ummah</span> connections.
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

      {/* Features Section */}
      <section className="py-16 md:py-32 bg-white dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(234,179,8,0.03),transparent)] dark:bg-[radial-gradient(circle_at_0%_0%,rgba(234,179,8,0.05),transparent)]"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-primary-green to-primary-gold bg-clip-text text-transparent">
            Enhance Your Spiritual Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="group">
              <div className="text-center space-y-4 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:scale-105 active:scale-100 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-yellow-50 dark:from-green-900 dark:to-yellow-900 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-green transition-colors">Track Your Five Daily Salah</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  Never miss Fajr, Dhuhr, Asr, Maghrib, or Isha with our intuitive tracking system. Receive timely notifications for each prayer time.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="text-center space-y-4 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:scale-105 active:scale-100 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-yellow-50 dark:from-green-900 dark:to-yellow-900 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-green transition-colors">Connect with the Ummah</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  Share your spiritual journey with fellow Muslims. Support each other with duas and positive reactions to prayer announcements.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="text-center space-y-4 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:scale-105 active:scale-100 relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-yellow-50 dark:from-green-900 dark:to-yellow-900 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12">
                  <svg className="w-8 h-8 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary-green transition-colors">Build Ibadah Habits</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-all duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                  Develop consistent worship habits with reminders and streaks. Transform your spiritual practice into a daily ritual of devotion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-light.svg')] dark:bg-[url('/pattern-dark.svg')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
            Powerful Features for Your <span className="text-primary-green">Spiritual Growth</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-green/10 dark:bg-primary-green/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Prayer Accountability</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Track if you and your friends prayed on time or missed prayers. Receive gentle reminders and encouragement to maintain consistency in your worship.
                </p>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium text-green-700 dark:text-green-300">AS</span>
                      </div>
                      <span className="text-sm font-medium">Ahmed S.</span>
                    </div>
                    <span className="text-xs text-gray-500">Today</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-medium">Prayed Asr</span>
                      <span className="text-xs text-green-600 dark:text-green-400">on time</span>
                    </div>
                    <div className="flex gap-1">
                      <span className="text-sm">🤲</span>
                      <span className="text-sm">❤️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-primary-gold/10 dark:bg-primary-gold/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Prayer Moments</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Share beautiful moments from your prayer experiences. Post pictures of masjids you visit or serene prayer spaces to inspire others.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-1 left-1 text-white text-xs">Masjid</div>
                  </div>
                  <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-1 left-1 text-white text-xs">Sunset</div>
                  </div>
                  <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-1 left-1 text-white text-xs">Quran</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Heart Health</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Monitor your spiritual heart health based on your prayer consistency. View detailed statistics and insights about your worship habits.
                </p>
                <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium">Your Heart Health</h4>
                    <span className="text-sm font-bold text-primary-green">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
                    <div className="bg-gradient-to-r from-primary-green to-primary-gold h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Last 30 days: 127/150 prayers</span>
                    <span>+12% from last month</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">Community Support</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  React to friends' prayer announcements with duas and encouragement. Build a supportive community focused on spiritual growth.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full text-sm shadow-sm flex items-center gap-1">
                    <span>🤲</span> Dua for you
                  </span>
                  <span className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full text-sm shadow-sm flex items-center gap-1">
                    <span>❤️</span> MashaAllah
                  </span>
                  <span className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full text-sm shadow-sm flex items-center gap-1">
                    <span>🔥</span> Streak
                  </span>
                  <span className="px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full text-sm shadow-sm flex items-center gap-1">
                    <span>✨</span> Inspired
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-32 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(34,197,94,0.05),rgba(234,179,8,0.05))] dark:bg-[radial-gradient(circle_at_100%_100%,rgba(34,197,94,0.1),rgba(234,179,8,0.05))]"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-green to-primary-gold bg-clip-text text-transparent">
            Begin Your Spiritual Journey Today
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto">
            Join thousands of Muslims who have transformed their prayer life with PrayPic. <span className="italic">"Indeed, prayer has been decreed upon the believers at specified times."</span> (Quran 4:103)
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://apps.apple.com"
              className="w-full sm:w-auto bg-gradient-to-r from-gray-900 to-black text-white px-6 sm:px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800 inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-6 sm:w-8 h-6 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span>Download on iOS</span>
            </Link>
            <Link
              href="https://play.google.com"
              className="w-full sm:w-auto bg-gradient-to-r from-gray-900 to-black text-white px-6 sm:px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-gray-200 dark:hover:shadow-gray-800 inline-flex items-center justify-center space-x-2"
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

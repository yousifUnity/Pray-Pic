'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About PrayPic</h1>
        <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6">
          <p>
            PrayPic is a revolutionary mobile app designed to encourage and track daily Islamic prayers among friends.
            Our mission is to help Muslims stay connected through prayer and build a consistent prayer habit in today's
            fast-paced world.
          </p>
        </div>
      </div>

      {/* Developer Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Meet the Developer</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src="/yousif_image.jpg"
                    alt="Yousif Mahmood"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Yousif Mahmood</h3>
                <p className="text-gray-600 mb-4">
                  As a Data Engineer with a passion for technology and faith, I created PrayPic with the mission to help
                  people stay connected through prayers. My background in data engineering has helped me create an
                  app that not only connects people but also provides meaningful insights into their prayer journey.
                </p>
                <Link 
                  href="https://linkedin.com/in/yousif-aldhahi" 
                  target="_blank"
                  className="text-primary-green hover:text-green-700 font-medium"
                >
                  Connect on LinkedIn →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Tech Stack & Inspiration</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                PrayPic is built using modern technologies and follows best practices in mobile app development.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <p className="text-sm text-gray-600">React Native</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <p className="text-sm text-gray-600">Node.js & TypeScript</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Database</h4>
                  <p className="text-sm text-gray-600">Supabase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-green-50 to-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
            <div className="grid gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 italic mb-4">
                  "PrayPic made me more consistent in my prayers while staying connected with my friends.
                  The community aspect really helps me stay motivated."
                </p>
                <p className="font-medium">- Ahmed Alreezaly</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 italic mb-4">
                  "The prayer tracking feature is amazing! I can see my progress over time and it encourages
                  me to maintain my daily prayers."
                </p>
                <p className="font-medium">- Ubaida A.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 italic mb-4">
                  "Enbos?"
                </p>
                <p className="font-medium">- Yahea Al Ani</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
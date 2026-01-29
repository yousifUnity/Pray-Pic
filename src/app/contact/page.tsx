'use client'
import React from 'react'

// Pre-filled subject and body for mailto (encoded for URL)
const MAILTO_SUBJECT = 'PrayPic - Contact'
const MAILTO_BODY = 'Hi,\n\n'

export default function Contact() {
  const mailtoUrl = `mailto:support@praypic.com?subject=${encodeURIComponent(MAILTO_SUBJECT)}&body=${encodeURIComponent(MAILTO_BODY)}`

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Contact Us</h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Get in Touch</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Have questions about PrayPic? We're here to help! Click the email link below and your
                email app will open with our address and a pre-filled subject so you can send us a message.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Email</h3>
                <a
                  href={mailtoUrl}
                  className="text-primary-green dark:text-primary-gold hover:underline text-lg"
                >
                  support@praypic.com
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-green dark:hover:text-primary-gold">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-green dark:hover:text-primary-gold">
                    Instagram
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-green dark:hover:text-primary-gold">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

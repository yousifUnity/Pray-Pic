'use client'
import React from 'react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Terms of Service</h1>
          <div className="space-y-8 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing or using PrayPic, you agree to be bound by these Terms of Service. If you
                disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">2. Description of Service</h2>
              <p>
                PrayPic is a mobile application that allows users to track their daily prayers, share
                prayer-related content with friends, and build a supportive community around their
                spiritual journey.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">3. User Accounts</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be 13 years or older to use this Service</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">4. User Content</h2>
              <p className="mb-4">
                Users are responsible for the content they post. Content must not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Contain harmful or malicious code</li>
                <li>Include inappropriate or offensive material</li>
                <li>Harass, abuse, or harm others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">5. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by PrayPic
                and are protected by international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">6. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability,
                for any reason, including without limitation if you breach the Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">7. Limitation of Liability</h2>
              <p>
                In no event shall PrayPic, nor its directors, employees, partners, agents, suppliers,
                or affiliates, be liable for any indirect, incidental, special, consequential, or
                punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. We will provide
                notice of any changes by posting the new Terms on this page.
              </p>
              <p className="mt-4">
                Last Updated: March 5, 2024
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">9. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href="mailto:legal@praypic.com" className="text-primary-green dark:text-primary-gold hover:underline">
                  legal@praypic.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 

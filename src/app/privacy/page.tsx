'use client'
import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Privacy Policy</h1>
          <div className="space-y-8 text-gray-600 dark:text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Introduction</h2>
              <p>
                At PrayPic, we take your privacy seriously. This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and profile information</li>
                  <li>Email address</li>
                  <li>Profile picture</li>
                  <li>Prayer-related photos and content you choose to share</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-800 dark:text-white">Usage Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>App usage statistics</li>
                  <li>Prayer tracking data</li>
                  <li>Device information</li>
                  <li>Log data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your
                personal information. However, please note that no method of transmission over the
                internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to our use of your data</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@praypic.com" className="text-primary-green dark:text-primary-gold hover:underline">
                  privacy@praypic.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="mt-4">
                Last Updated: March 5, 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 

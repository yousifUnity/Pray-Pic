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

                <h3 className="text-xl font-medium text-gray-800 dark:text-white">Premium / In-App Purchase Information</h3>
                <p className="mb-2">If you purchase our "Remove Ads" option (one-time or subscription), we store only your premium status so we can hide ads in the app. We do not collect or store your payment card details; all payments are processed by Apple (on iOS) or Google (on Android).</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Whether you have an active premium (remove ads) status</li>
                  <li>For subscriptions, the end date of your current billing period (so we know when access continues or ends)</li>
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
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Data Sharing Practices</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With Third-Party Service Providers:</strong> We share data with trusted third-party services that help us operate our app, including database hosting, authentication, error tracking, and advertising services. These services are contractually obligated to protect your data and use it only for the purposes we specify.</li>
                <li><strong>With Your Consent:</strong> We may share your information when you explicitly consent to such sharing.</li>
                <li><strong>For Legal Compliance:</strong> We may disclose information if required by law or to protect our rights and the safety of our users.</li>
                <li><strong>With Friends:</strong> Prayer announcements, stories, and profile information you choose to share are visible to users you have accepted as friends within the app.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Third-Party Services</h2>
              <p className="mb-4">
                We use the following third-party services that may collect or process your information:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Supabase:</strong> We use Supabase for database hosting, user authentication, and backend services. 
                  Supabase processes your account information, prayer data, photos, and app usage data. 
                  Supabase's privacy policy: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-green dark:text-primary-gold hover:underline">https://supabase.com/privacy</a>
                </li>
                <li>
                  <strong>Sentry:</strong> We use Sentry for error tracking and performance monitoring. 
                  Sentry may collect device information, error logs, and app performance data to help us improve the app. 
                  Sentry's privacy policy: <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary-green dark:text-primary-gold hover:underline">https://sentry.io/privacy/</a>
                </li>
                <li>
                  <strong>Google Mobile Ads:</strong> We use Google Mobile Ads to display advertisements in the app. 
                  Google may collect device identifiers, location data (if permitted), and usage information for ad personalization. 
                  You can opt out of personalized ads in your device settings. 
                  Google's privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-green dark:text-primary-gold hover:underline">https://policies.google.com/privacy</a>
                </li>
                <li>
                  <strong>RevenueCat:</strong> We use RevenueCat to manage in-app purchases and subscriptions (e.g. "Remove Ads Forever" and "Remove Ads" monthly subscription). 
                  RevenueCat receives your app user ID and purchase/entitlement status from the app stores (Apple, Google) so we can correctly enable or disable ads in the app. 
                  RevenueCat does not receive your payment details; payment is handled entirely by Apple or Google. 
                  RevenueCat's privacy policy: <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-green dark:text-primary-gold hover:underline">https://www.revenuecat.com/privacy</a>
                </li>
                <li>
                  <strong>Apple / Google:</strong> When you make an in-app purchase, payment is processed by Apple (App Store) or Google (Play Store). 
                  We do not receive or store your card or payment details; only the fact that you have an active purchase and (for subscriptions) when the current period ends.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Data Retention Policies</h2>
              <p className="mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Data:</strong> We retain your account information (email, profile data) for as long as your account is active. If you delete your account, we will delete your personal information within 30 days, except where we are required to retain it for legal purposes.</li>
                <li><strong>Prayer Data:</strong> Your prayer tracking data and announcements are retained while your account is active. You can delete individual prayer records at any time.</li>
                <li><strong>Photos and Stories:</strong> Photos and stories you share are retained until you delete them or delete your account. Stories automatically expire after 24 hours.</li>
                <li><strong>Premium Status:</strong> We retain your premium (remove ads) status and subscription end date for as long as your account is active, so we can correctly show or hide ads. If you cancel a subscription or it expires, we update this data accordingly.</li>
                <li><strong>Error Logs:</strong> Error tracking data is retained for up to 90 days to help us identify and fix issues.</li>
                <li><strong>Legal Requirements:</strong> We may retain certain information longer if required by law, such as for tax or legal compliance purposes.</li>
              </ul>
              <p className="mt-4">
                If you wish to delete your account or request deletion of specific data, please contact us at <a href="mailto:support@praypic.com" className="text-primary-green dark:text-primary-gold hover:underline">support@praypic.com</a>.
              </p>
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
                <a href="mailto:support@praypic.com" className="text-primary-green dark:text-primary-gold hover:underline">
                  support@praypic.com
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
                Last Updated: February 4, 2026
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 

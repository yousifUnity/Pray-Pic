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
                By accessing or using PrayPic, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">2. Description of Service</h2>
              <p>
                PrayPic is a mobile application that allows users to track their daily prayers, share prayer-related content with friends, and build a supportive community around their spiritual journey.
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
              <p className="mb-4">Users are responsible for the content they post. Content must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Harass, abuse, or harm others</li>
                <li>Include inappropriate or offensive material</li>
                <li>Contain harmful or malicious code</li>
                <li>Infringe on intellectual property rights</li>
                <li>Violate any laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">5. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by PrayPic and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">6. In-App Purchases and Subscriptions</h2>
              <p className="mb-4">
                PrayPic offers paid options to remove ads ("Premium"). By making a purchase, you agree to the following:
              </p>
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-white">Current offerings and pricing</h3>
              <p className="mb-2">Prices are in USD (or your local currency as shown in the app store). What you get:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Remove Ads Forever — $9.99 (one-time):</strong> Removes all in-app ads (banners and interstitials) permanently. No recurring charge.</li>
                <li><strong>Remove Ads — $0.99/month (subscription):</strong> Removes all in-app ads for as long as your subscription is active. Automatically renews each month until you cancel.</li>
              </ul>
              <p className="mb-4">Current prices are also shown in the app at the time of purchase. We may change pricing for new purchases in the future; see "Price changes" below.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment:</strong> All payments are processed by Apple (App Store) or Google (Play Store). You agree to their respective payment terms and conditions. We do not store your payment card details.</li>
                <li><strong>Subscriptions:</strong> If you choose a subscription, it will automatically renew at the end of each billing period unless you cancel before then. You can manage or cancel subscriptions in your device's App Store or Play Store subscription settings.</li>
                <li><strong>Refunds:</strong> Refund requests for in-app purchases must be submitted to Apple or Google in accordance with their policies. We cannot issue refunds directly.</li>
                <li><strong>Restore purchases:</strong> If you reinstall the app or use a new device, you can restore your premium status by using the "Restore purchases" option in Settings. You must be signed in with the same app store account used to make the purchase.</li>
                <li><strong>Price changes:</strong> We may change the price of in-app purchases or subscriptions in the future. Any change will apply to new purchases; existing subscriptions will continue at the price in effect at the time of your purchase until renewal, subject to the store's terms.</li>
                <li><strong>Access:</strong> Premium status (no ads) is tied to your PrayPic account and your app store account. If your subscription expires or is cancelled, ads will be shown again in the app.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">7. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">8. Limitation of Liability</h2>
              <p>
                In no event shall PrayPic, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">9. Dispute Resolution</h2>
              <div className="space-y-4">
                <p>
                  <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which PrayPic operates, without regard to its conflict of law provisions.
                </p>
                <p>
                  <strong>Dispute Resolution Process:</strong> If you have any concerns or disputes regarding these Terms or the Service, please contact us first at <a href="mailto:support@praypic.com" className="text-primary-green dark:text-primary-gold hover:underline">support@praypic.com</a>. We will attempt to resolve any disputes through good faith negotiations.
                </p>
                <p>
                  <strong>Informal Resolution:</strong> Before filing a claim, you agree to try to resolve the dispute informally by contacting us. We will try to resolve the dispute within 30 days of receiving your notice.
                </p>
                <p>
                  <strong>Binding Arbitration:</strong> If we cannot resolve a dispute informally, you agree that any dispute arising out of or relating to these Terms or the Service will be resolved through binding arbitration in accordance with the rules of a recognized arbitration organization, rather than in court. You waive your right to a jury trial and to participate in a class-action lawsuit or class-wide arbitration.
                </p>
                <p>
                  <strong>Exceptions:</strong> Notwithstanding the above, you may bring claims in small claims court if your claims qualify, and either party may seek injunctive relief in any court of competent jurisdiction to protect intellectual property rights or to prevent irreparable harm.
                </p>
                <p>
                  <strong>Jurisdiction:</strong> For any disputes not subject to arbitration, you agree to submit to the personal and exclusive jurisdiction of the courts located in the jurisdiction where PrayPic operates.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href="mailto:support@praypic.com" className="text-primary-green dark:text-primary-gold hover:underline">
                  support@praypic.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Changes to This Policy</h2>
              <p>
                We may update our Terms of Service from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date.
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

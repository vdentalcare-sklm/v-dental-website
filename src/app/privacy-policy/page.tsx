"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 bg-[#F2FBF7] min-h-screen">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light text-text-primary mb-4">
            Privacy{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#005C96] to-[#5AA647]">
              Policy
            </span>
          </h1>
          <p className="text-text-secondary font-light">
            Last updated: 24 June 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl border border-[#E5E7EB] p-8 md:p-12 space-y-10 text-text-primary"
        >
          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              1. Introduction
            </h2>
            <p className="text-text-secondary font-light leading-relaxed">
              V Dental Hospitals (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) is committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and
              safeguard the information you provide when you use our website at{" "}
              <a
                href="https://vdentalcare.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005C96] underline underline-offset-2"
              >
                vdentalcare.in
              </a>{" "}
              or contact us via WhatsApp to book appointments.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              2. Information We Collect
            </h2>
            <p className="text-text-secondary font-light leading-relaxed">
              When you submit an appointment request through our website, we
              collect the following information:
            </p>

            <ul className="list-disc list-inside space-y-2 text-text-secondary font-light leading-relaxed pl-4">
              <li>
                <span className="font-medium text-text-primary">
                  Full Name
                </span>{" "}
                — to address you correctly
              </li>
              <li>
                <span className="font-medium text-text-primary">
                  Phone Number
                </span>{" "}
                — to send you a WhatsApp booking confirmation and communicate
                about your appointment
              </li>
              <li>
                <span className="font-medium text-text-primary">
                  Email Address
                </span>{" "}
                — optional, provided at your discretion
              </li>
              <li>
                <span className="font-medium text-text-primary">
                  Treatment of Interest
                </span>{" "}
                — to help our team prepare for your consultation
              </li>
            </ul>

            <p className="text-text-secondary font-light leading-relaxed">
              When you interact with us on WhatsApp, your WhatsApp display name
              and phone number are also recorded as part of the booking process.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              3. How We Use Your Information
            </h2>
            <p className="text-text-secondary font-light leading-relaxed">
              We use the information we collect solely for the following
              purposes:
            </p>

            <ul className="list-disc list-inside space-y-2 text-text-secondary font-light leading-relaxed pl-4">
              <li>
                To initiate and manage your appointment booking via WhatsApp
              </li>
              <li>To confirm your appointment date, time, and branch</li>
              <li>
                To contact you regarding your appointment or any changes to it
              </li>
              <li>
                To maintain records of your visits for continuity of care
              </li>
            </ul>

            <p className="text-text-secondary font-light leading-relaxed">
              We do not use your information for marketing, advertising, or any
              purpose beyond your direct dental care with us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              4. WhatsApp Messaging
            </h2>

            <p className="text-text-secondary font-light leading-relaxed">
              Our appointment booking system uses the WhatsApp Business API,
              provided by Meta Platforms, Inc. When you submit your phone number
              on our website, we send you an automated WhatsApp message to guide
              you through selecting your preferred branch, date, and time slot.
              By submitting your phone number, you consent to receiving this
              WhatsApp communication from us.
            </p>

            <p className="text-text-secondary font-light leading-relaxed">
              WhatsApp messages are processed through Meta&apos;s
              infrastructure. Please refer to{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#005C96] underline underline-offset-2"
              >
                WhatsApp&apos;s Privacy Policy
              </a>{" "}
              for information on how Meta handles message data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              5. Data Storage
            </h2>

            <p className="text-text-secondary font-light leading-relaxed">
              Your information is stored securely in an encrypted cloud database
              hosted on secure infrastructure. We implement appropriate
              technical measures to protect your data against unauthorized
              access, alteration, or disclosure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              6. Data Sharing
            </h2>

            <p className="text-text-secondary font-light leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. Your data is only shared with:
            </p>

            <ul className="list-disc list-inside space-y-2 text-text-secondary font-light leading-relaxed pl-4">
              <li>
                <span className="font-medium text-text-primary">
                  Meta Platforms (WhatsApp Business API)
                </span>{" "}
                — solely to deliver appointment messages to your WhatsApp
              </li>
              <li>
                <span className="font-medium text-text-primary">
                  Our clinic staff
                </span>{" "}
                — to manage and prepare for your appointment
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              7. Your Rights
            </h2>

            <p className="text-text-secondary font-light leading-relaxed">
              You have the right to:
            </p>

            <ul className="list-disc list-inside space-y-2 text-text-secondary font-light leading-relaxed pl-4">
              <li>
                Request access to the personal information we hold about you
              </li>
              <li>Request correction of any inaccurate information</li>
              <li>
                Request deletion of your personal data from our records
              </li>
              <li>
                Opt out of WhatsApp communications from us at any time by
                informing our team
              </li>
            </ul>

            <p className="text-text-secondary font-light leading-relaxed">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:info@vdentalcare.in"
                className="text-[#005C96] underline underline-offset-2"
              >
                info@vdentalcare.in
              </a>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              8. Cookies
            </h2>

            <p className="text-text-secondary font-light leading-relaxed">
              Our website does not use tracking cookies or third-party
              analytics. Basic session functionality may use browser storage,
              but no personally identifiable information is stored in this way.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              9. Children&apos;s Privacy
            </h2>

            <p className="text-text-secondary font-light leading-relaxed">
              Our services are not directed at children under the age of 13. We
              do not knowingly collect personal information from children. If
              you believe a child has provided us with personal information,
              please contact us and we will delete it promptly.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              10. Changes to This Policy
            </h2>

            <p className="text-text-secondary font-light leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date. We
              encourage you to review this page periodically.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-medium text-[#005C96]">
              11. Contact Us
            </h2>

            <p className="text-text-secondary font-light leading-relaxed">
              If you have any questions or concerns about this Privacy Policy or
              how we handle your data, please contact us:
            </p>

            <div className="bg-[#005C96]/5 rounded-2xl p-6 space-y-2 border border-[#005C96]/10">
              <p className="font-medium text-text-primary">
                V Dental Hospitals
              </p>

              <p className="text-text-secondary font-light">
                Above Eye Max Opticals, Krishna Park Junction, Srikakulam,
                Andhra Pradesh – 532001
              </p>

              <p className="text-text-secondary font-light">
                Email:{" "}
                <a
                  href="mailto:info@vdentalcare.in"
                  className="text-[#005C96] underline underline-offset-2"
                >
                  info@vdentalcare.in
                </a>
              </p>

              <p className="text-text-secondary font-light">
                Phone: +91 95505 08480
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="font-serif text-4xl text-[#f0ebe0] mb-3">
            Privacy Policy
          </h1>
          <p className="font-sans text-sm text-[#5c6478] mb-16">
            Last updated: March 1, 2026
          </p>

          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              Prova Technologies, Inc. (&ldquo;Prova,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
              protecting the privacy of our customers and their clients. This
              Privacy Policy describes how we collect, use, disclose, and
              safeguard information when you use our vehicle storage operations
              platform (the &ldquo;Service&rdquo;). Please read this policy
              carefully before accessing or using our platform.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            1. Information We Collect
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              <strong className="text-[#f0ebe0]">Personal Information.</strong>{" "}
              When you register for Prova, we collect information you provide
              directly, including your full name, email address, phone number,
              company name, billing address, and payment information. For team
              members added to your account, we collect their name and email
              address.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Facility Data.</strong> We
              collect data about your facility including its name, address,
              physical configuration (bay layouts, climate zones), operational
              settings, and subscription preferences. This information is
              necessary to deliver the core features of the Service.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Vehicle Data.</strong> We
              store comprehensive vehicle records that you input into the
              platform, including make, model, year, VIN, color, condition
              notes, photographs, service history, and climate log data. We also
              store owner association records linking vehicles to their
              registered owners.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Owner Contact Data.</strong>{" "}
              For vehicle owners whose assets you manage, we store the contact
              information you provide, including name, email address, phone
              number, and mailing address. This data is held on your behalf as a
              data processor.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Usage Analytics.</strong> We
              automatically collect certain technical and usage data when you
              interact with the Service, including IP address, browser type,
              operating system, pages visited, features used, session duration,
              and clickstream data. This information helps us improve the
              platform and diagnose technical issues.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">IoT and Sensor Data.</strong>{" "}
              For facilities using connected climate monitoring hardware, we
              collect temperature, humidity, and environmental readings from
              integrated sensors at the frequency configured by the facility
              administrator.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            2. How We Use Your Information
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              <strong className="text-[#f0ebe0]">Service Delivery.</strong> We
              use the information we collect to operate, maintain, and improve
              the Prova platform; to process transactions; to authenticate users
              and control access; and to generate the reports, alerts, and
              records that are core to the Service.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Communication.</strong> We use
              your contact information to send transactional emails (account
              setup, billing receipts, password resets), operational
              notifications (climate alerts, service reminders), and, with your
              consent, product updates and announcements. You may opt out of
              marketing communications at any time.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Platform Improvement.</strong>{" "}
              Aggregated and anonymized usage data helps us understand how
              facilities use Prova, identify areas for improvement, develop new
              features, and optimize platform performance. We do not use
              individual vehicle or owner records for product development
              purposes.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Compliance and Safety.</strong>{" "}
              We may use information to detect, investigate, and prevent fraud,
              abuse, or violations of our Terms of Service; to comply with legal
              obligations; and to protect the rights and safety of Prova, our
              customers, and third parties.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            3. Data Storage and Security
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              All data stored on the Prova platform is encrypted at rest using
              AES-256 encryption and in transit using TLS 1.3. We maintain SOC
              2 Type II compliance, which is audited annually by an independent
              third-party assessor. Audit reports are available to Enterprise
              customers upon request under NDA.
            </p>
            <p>
              The Prova platform is hosted on Amazon Web Services (AWS) in the
              United States, specifically in the us-east-1 (N. Virginia) region.
              We utilize AWS security services including AWS Shield for DDoS
              protection, AWS WAF for application-layer filtering, and AWS KMS
              for encryption key management.
            </p>
            <p>
              We maintain automated daily backups with a 30-day retention
              period. Backups are stored in geographically separate AWS regions
              and are encrypted using the same standards as primary data.
              Recovery time objectives (RTO) and recovery point objectives (RPO)
              are documented in our Enterprise SLA.
            </p>
            <p>
              Access to customer data by Prova personnel is restricted on a
              need-to-know basis, governed by role-based access controls, and
              logged for audit purposes. All Prova employees with data access
              undergo background checks and sign confidentiality agreements.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            4. Data Sharing
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              We do not sell, rent, or trade your personal information or your
              customers&apos; data to any third parties for their marketing or
              commercial purposes — ever. Data you enter into Prova belongs to
              you.
            </p>
            <p>
              We share data with third-party service providers only to the
              extent necessary to deliver the Service. These providers are
              contractually bound to process data only as directed by Prova and
              in accordance with this Privacy Policy. Current sub-processors
              include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-[#f0ebe0]">Stripe</strong> — Payment
                processing and billing
              </li>
              <li>
                <strong className="text-[#f0ebe0]">Amazon Web Services</strong>{" "}
                — Cloud infrastructure and storage
              </li>
              <li>
                <strong className="text-[#f0ebe0]">SendGrid</strong> —
                Transactional email delivery
              </li>
              <li>
                <strong className="text-[#f0ebe0]">Datadog</strong> —
                Application monitoring and error tracking
              </li>
            </ul>
            <p>
              We may disclose information when required by law, court order, or
              governmental authority; when necessary to protect our rights or
              the safety of our users; or in connection with a merger,
              acquisition, or sale of assets (in which case we will notify you
              before your data is transferred and becomes subject to a different
              privacy policy).
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            5. Your Rights
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              As a Prova account holder, you have the following rights with
              respect to your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-[#f0ebe0]">Access.</strong> You may
                request a copy of the personal information we hold about you at
                any time.
              </li>
              <li>
                <strong className="text-[#f0ebe0]">Correction.</strong> You may
                update or correct inaccurate personal information through your
                account settings or by contacting support.
              </li>
              <li>
                <strong className="text-[#f0ebe0]">Deletion.</strong> You may
                request deletion of your account and associated personal data.
                Vehicle and facility operational records will be purged within
                30 days of account closure, subject to any legal retention
                requirements.
              </li>
              <li>
                <strong className="text-[#f0ebe0]">Portability.</strong> You
                may export your facility data, vehicle records, and operational
                history in machine-readable formats (CSV, JSON) at any time from
                the platform settings.
              </li>
              <li>
                <strong className="text-[#f0ebe0]">Opt-out.</strong> You may
                opt out of non-essential marketing communications at any time by
                clicking the unsubscribe link in any email or by updating your
                notification preferences in account settings.
              </li>
            </ul>
            <p>
              California residents have additional rights under the CCPA,
              including the right to know what personal information is collected
              and how it is used. To exercise any of these rights, contact us at
              privacy@getprova.com.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            6. Cookies and Tracking
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              <strong className="text-[#f0ebe0]">Essential Cookies.</strong> We
              use session cookies that are strictly necessary to authenticate
              users and maintain sessions on the Prova platform. These cookies
              cannot be disabled without disabling the Service.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Analytics.</strong> With your
              consent, we use analytics tools to understand usage patterns and
              improve the platform. Analytics data is anonymized and aggregated.
              You may opt out of analytics tracking via the cookie preference
              center accessible from the platform settings.
            </p>
            <p>
              We do not use third-party advertising cookies or sell tracking
              data. We do not participate in cross-site tracking networks.
            </p>
          </div>

          {/* Section 7 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            7. Changes to This Policy
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, technology, legal requirements, or other
              factors. When we make material changes, we will notify you by
              email (sent to the address associated with your account) and by
              posting a prominent notice on the platform at least 30 days before
              the changes take effect.
            </p>
            <p>
              Your continued use of the Service after the effective date of a
              revised Privacy Policy constitutes your acceptance of the updated
              policy. If you do not agree with the changes, you may close your
              account before the effective date.
            </p>
          </div>

          {/* Section 8 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            8. Contact Us
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              If you have questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 space-y-2">
              <p>
                <strong className="text-[#f0ebe0]">Prova Technologies, Inc.</strong>
              </p>
              <p>Attn: Privacy Team</p>
              <p>450 W 33rd St, Suite 700</p>
              <p>New York, NY 10001</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@getprova.com"
                  className="text-[#c9a84c] hover:text-[#d4b85c] transition-colors duration-200"
                >
                  privacy@getprova.com
                </a>
              </p>
            </div>
            <p>
              We will respond to all privacy-related inquiries within 5 business
              days.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

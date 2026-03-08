import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <h1 className="font-serif text-4xl text-[#f0ebe0] mb-3">
            Terms of Service
          </h1>
          <p className="font-sans text-sm text-[#5c6478] mb-16">
            Last updated: March 1, 2026
          </p>

          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally
              binding agreement between you and Prova Technologies, Inc.
              (&ldquo;Prova,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) governing your access to and use of the Prova
              platform and related services. By creating an account or using the
              Service, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            1. Acceptance of Terms
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              By accessing or using the Prova platform, you represent that you
              are at least 18 years old, have the legal authority to enter into
              these Terms on behalf of yourself or the organization you
              represent, and have read, understood, and agree to be bound by
              these Terms and our Privacy Policy, which is incorporated herein
              by reference.
            </p>
            <p>
              If you are accepting these Terms on behalf of a company or other
              legal entity, you represent and warrant that you have the authority
              to bind that entity to these Terms. If you do not have such
              authority, you must not access or use the Service.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            2. Description of Service
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              Prova is a cloud-based operations management platform purpose-built
              for high-end vehicle storage facilities. The Service includes tools
              for vehicle profile management, climate monitoring and alerting,
              service history tracking, owner relationship management, scheduling,
              billing, and reporting.
            </p>
            <p>
              The Service is designed for professional use by facility operators,
              managers, and their authorized staff members. It is not intended
              for personal or consumer use. Vehicle owners whose assets are
              managed by a facility may access limited owner-portal features as
              granted by the facility operator.
            </p>
            <p>
              Prova reserves the right to modify, suspend, or discontinue any
              aspect of the Service at any time, provided we give reasonable
              advance notice for material changes. We will not unreasonably
              degrade the core functionality of the Service during an active
              subscription term.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            3. Account Registration and Security
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              To use the Service, you must create an account by providing
              accurate, current, and complete information. You are responsible
              for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account.
            </p>
            <p>
              You agree to: (a) immediately notify Prova of any unauthorized use
              of your account or any other security breach; (b) ensure that all
              users with access to your account comply with these Terms; and (c)
              not share your account credentials with unauthorized parties or
              use your account in a way that circumvents the per-seat licensing
              model.
            </p>
            <p>
              Prova will not be liable for any loss or damage arising from your
              failure to maintain adequate account security. You are solely
              responsible for all activity that occurs under your account,
              whether or not authorized by you.
            </p>
          </div>

          {/* Section 4 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            4. Subscription and Payment
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              Access to the Service requires a paid subscription. Subscription
              fees are billed in advance on a monthly or annual basis, as
              selected at the time of purchase. All billing is processed through
              Stripe, our third-party payment processor.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Monthly Plans.</strong> Monthly
              subscriptions are billed on the same day each month. You may cancel
              at any time, and cancellation will take effect at the end of the
              current billing period. No refunds are provided for partial months.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Annual Plans.</strong> Annual
              subscriptions are billed in full at the start of each annual term.
              Annual plans are non-refundable except in the case of a material
              breach by Prova. If you cancel an annual plan, you will retain
              access through the end of the paid term.
            </p>
            <p>
              <strong className="text-[#f0ebe0]">Free Trial.</strong> New
              accounts receive a 14-day free trial with full access to the
              selected plan tier. No credit card is required to start a trial.
              At the end of the trial period, you must provide payment
              information to continue using the Service.
            </p>
            <p>
              Prova reserves the right to adjust pricing with 60 days&apos;
              advance notice. Price changes will not apply to active annual
              subscriptions until the start of the next renewal term.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            5. Data Ownership
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              You retain full ownership of all data you input into the Prova
              platform, including vehicle records, owner information, service
              history, climate logs, and any other content (&ldquo;Customer
              Data&rdquo;). Prova processes Customer Data only as directed by
              you and as necessary to deliver the Service.
            </p>
            <p>
              You grant Prova a limited, non-exclusive, royalty-free license to
              host, store, transmit, and process Customer Data solely for the
              purpose of providing and improving the Service. We will not use
              Customer Data for any other purpose without your explicit consent.
            </p>
            <p>
              Upon termination of your account, you may export your Customer Data
              in machine-readable formats within 30 days. After this period,
              Prova will securely delete your Customer Data from our systems,
              except as required by applicable law or as retained in anonymized,
              aggregated form for platform analytics.
            </p>
          </div>

          {/* Section 6 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            6. Acceptable Use
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              You agree to use the Service only for lawful purposes and in
              accordance with these Terms. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Use the Service to store, transmit, or process data relating to
                illegal activities or in violation of any applicable law or
                regulation
              </li>
              <li>
                Attempt to gain unauthorized access to any part of the Service
                or to other accounts
              </li>
              <li>
                Reverse engineer, decompile, disassemble, or attempt to derive
                the source code of the Service or any underlying algorithms
              </li>
              <li>
                Reproduce, copy, resell, or exploit any portion of the Service
                without Prova&apos;s prior written consent
              </li>
              <li>
                Use automated tools (bots, scrapers, crawlers) to access or
                interact with the Service except through our published APIs
              </li>
              <li>
                Introduce malware, viruses, or other harmful code into the
                Service or its connected systems
              </li>
              <li>
                Impersonate another user, person, or entity, or misrepresent your
                affiliation with any person or entity
              </li>
            </ul>
            <p>
              Violations of this section may result in immediate suspension or
              termination of your account without refund.
            </p>
          </div>

          {/* Section 7 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            7. Intellectual Property
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              The Prova platform, including its software, design, user interface,
              features, documentation, trademarks, logos, and all related
              intellectual property, is owned exclusively by Prova Technologies,
              Inc. and is protected by copyright, trademark, patent, and other
              intellectual property laws.
            </p>
            <p>
              These Terms grant you a limited, non-exclusive, non-transferable,
              revocable license to access and use the Service for your internal
              business purposes during the subscription term. This license does
              not include any right to sublicense the Service to third parties
              or to use the Prova name, logo, or trademarks without prior written
              consent.
            </p>
            <p>
              As noted in Section 5, Customer Data remains your property. Nothing
              in these Terms transfers ownership of your data to Prova.
            </p>
          </div>

          {/* Section 8 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            8. Limitation of Liability
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, PROVA SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS,
              DATA, BUSINESS, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH
              THESE TERMS OR THE SERVICE, EVEN IF PROVA HAS BEEN ADVISED OF THE
              POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              IN NO EVENT SHALL PROVA&apos;S TOTAL CUMULATIVE LIABILITY FOR ALL
              CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE
              EXCEED THE AMOUNTS PAID BY YOU TO PROVA IN THE TWELVE (12) MONTHS
              IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH LIABILITY.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of certain warranties
              or limitations on implied warranties or liability, so some of the
              above limitations may not apply to you.
            </p>
          </div>

          {/* Section 9 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            9. Termination
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              Either party may terminate these Terms at any time. You may cancel
              your subscription through the account settings page or by
              contacting support. Prova may suspend or terminate your access to
              the Service immediately, without prior notice, if you materially
              breach these Terms.
            </p>
            <p>
              Upon termination for any reason: (a) your license to use the
              Service will immediately cease; (b) you must cease all use of the
              Service; and (c) Prova will provide you with 30 days to export your
              Customer Data before it is deleted from our systems.
            </p>
            <p>
              Sections relating to data ownership, intellectual property,
              limitation of liability, and governing law shall survive
              termination of these Terms.
            </p>
          </div>

          {/* Section 10 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            10. Governing Law
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of New York, without regard to its conflict
              of law provisions. Any legal action or proceeding arising under
              these Terms shall be brought exclusively in the federal or state
              courts located in New York County, New York, and you hereby
              irrevocably consent to the personal jurisdiction and venue therein.
            </p>
            <p>
              Any dispute arising out of or relating to these Terms or the
              Service that cannot be resolved through good-faith negotiation
              shall be submitted to binding arbitration administered by JAMS
              under its Streamlined Arbitration Rules, except that either party
              may seek injunctive or other equitable relief in a court of
              competent jurisdiction to prevent irreparable harm.
            </p>
          </div>

          {/* Section 11 */}
          <h2 className="font-serif text-2xl text-[#f0ebe0] mt-12 mb-4">
            11. Contact Information
          </h2>
          <div className="space-y-4 font-sans text-[#a0a8b8] leading-relaxed">
            <p>
              Questions about these Terms of Service should be directed to:
            </p>
            <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6 space-y-2">
              <p>
                <strong className="text-[#f0ebe0]">Prova Technologies, Inc.</strong>
              </p>
              <p>Attn: Legal Department</p>
              <p>450 W 33rd St, Suite 700</p>
              <p>New York, NY 10001</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:legal@getprova.com"
                  className="text-[#c9a84c] hover:text-[#d4b85c] transition-colors duration-200"
                >
                  legal@getprova.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

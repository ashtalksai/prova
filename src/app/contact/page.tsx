"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Navbar />

      {/* ── Header ───────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl text-[#f0ebe0] text-center mb-4">
            Get in Touch
          </h1>
          <p className="font-sans text-[#a0a8b8] text-center max-w-xl mx-auto">
            Whether you&apos;re ready to get started, have questions about a
            plan, or need help with your account — we&apos;re here.
          </p>
        </div>

        {/* ── Two Column Layout ─────────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left: Form */}
          <div className="md:col-span-2 bg-[#0f1626] border border-[#1e2d45] rounded-xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center">
                  <Mail size={24} className="text-[#c9a84c]" />
                </div>
                <h2 className="font-serif text-2xl text-[#f0ebe0]">
                  Message Received
                </h2>
                <p className="font-sans text-[#a0a8b8] max-w-sm leading-relaxed">
                  Thank you for reaching out. A member of our team will respond
                  within one business day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      firstName: "",
                      lastName: "",
                      email: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="font-sans text-sm text-[#c9a84c] hover:text-[#d4b85c] transition-colors duration-200 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 className="font-serif text-xl text-[#f0ebe0] mb-2">
                  Send a Message
                </h2>

                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="firstName"
                      className="font-sans text-sm text-[#a0a8b8]"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Marcus"
                      className="bg-[#162036] border border-[#1e2d45] rounded-lg px-4 py-2.5 font-sans text-sm text-[#f0ebe0] placeholder:text-[#5c6478] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="lastName"
                      className="font-sans text-sm text-[#a0a8b8]"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Chen"
                      className="bg-[#162036] border border-[#1e2d45] rounded-lg px-4 py-2.5 font-sans text-sm text-[#f0ebe0] placeholder:text-[#5c6478] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-sans text-sm text-[#a0a8b8]"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="marcus@vaultautomotive.com"
                    className="bg-[#162036] border border-[#1e2d45] rounded-lg px-4 py-2.5 font-sans text-sm text-[#f0ebe0] placeholder:text-[#5c6478] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="font-sans text-sm text-[#a0a8b8]"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="bg-[#162036] border border-[#1e2d45] rounded-lg px-4 py-2.5 font-sans text-sm text-[#f0ebe0] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200 appearance-none"
                  >
                    <option value="" disabled className="text-[#5c6478]">
                      Select a subject
                    </option>
                    <option value="general">General Inquiry</option>
                    <option value="demo">Demo Request</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-sans text-sm text-[#a0a8b8]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your facility and how we can help..."
                    className="bg-[#162036] border border-[#1e2d45] rounded-lg px-4 py-2.5 font-sans text-sm text-[#f0ebe0] placeholder:text-[#5c6478] focus:outline-none focus:border-[#c9a84c] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="font-sans font-semibold bg-[#c9a84c] text-[#0a0e1a] rounded-full px-8 py-3 hover:bg-[#d4b85c] transition-colors duration-200 self-start"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="md:col-span-1 flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-xl text-[#f0ebe0] mb-6">
                Contact Information
              </h2>
              <div className="flex flex-col gap-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-[#c9a84c] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="font-sans text-sm font-medium text-[#f0ebe0] mb-0.5">
                      Office
                    </div>
                    <div className="font-sans text-sm text-[#a0a8b8] leading-relaxed">
                      450 W 33rd St, Suite 700
                      <br />
                      New York, NY 10001
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="text-[#c9a84c] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="font-sans text-sm font-medium text-[#f0ebe0] mb-0.5">
                      Email
                    </div>
                    <a
                      href="mailto:hello@getprova.com"
                      className="font-sans text-sm text-[#a0a8b8] hover:text-[#c9a84c] transition-colors duration-200"
                    >
                      hello@getprova.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="text-[#c9a84c] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="font-sans text-sm font-medium text-[#f0ebe0] mb-0.5">
                      Phone
                    </div>
                    <a
                      href="tel:+15550000000"
                      className="font-sans text-sm text-[#a0a8b8] hover:text-[#c9a84c] transition-colors duration-200"
                    >
                      hello@getprova.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock
                    size={18}
                    className="text-[#c9a84c] flex-shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="font-sans text-sm font-medium text-[#f0ebe0] mb-0.5">
                      Hours
                    </div>
                    <div className="font-sans text-sm text-[#a0a8b8]">
                      Mon–Fri, 9am–6pm EST
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time callout */}
            <div className="bg-[#0f1626] border border-[#1e2d45] rounded-xl p-6">
              <div className="font-serif text-2xl text-[#c9a84c] font-bold mb-1">
                &lt;2 hrs
              </div>
              <div className="font-sans text-sm text-[#a0a8b8] leading-relaxed">
                Average response time during business hours for all support
                inquiries.
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

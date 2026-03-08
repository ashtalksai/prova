"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, ArrowLeft, Mail } from "lucide-react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // Simulate sending reset email (no backend wired yet)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitted(true)
    setLoading(false)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left panel — branding */}
      <div className="hidden md:flex flex-col justify-center bg-[#0f1626] min-h-screen p-12 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }} />

        <div className="relative z-10">
          <div>
            <span className="font-serif text-[#c9a84c] text-3xl italic font-bold tracking-widest">
              PROVA
            </span>
          </div>

          <p className="text-[#a0a8b8] mt-4 text-base leading-relaxed max-w-xs">
            Operations software for the world&apos;s finest car collections
          </p>

          <p className="mt-16 text-[#5c6478] text-sm">
            Trusted by 50+ premium facilities
          </p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex items-center justify-center bg-[#0a0e1a] p-8 min-h-screen">
        <div className="max-w-md w-full">
          {/* Mobile logo */}
          <div className="md:hidden mb-8 text-center">
            <span className="font-serif text-[#c9a84c] text-2xl italic font-bold tracking-widest">
              PROVA
            </span>
          </div>

          {/* Back link */}
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-[#a0a8b8] text-sm hover:text-[#c9a84c] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to sign in
          </Link>

          {!submitted ? (
            <>
              <h1 className="font-serif text-3xl text-[#f0ebe0] font-semibold">
                Reset your password
              </h1>
              <p className="text-[#a0a8b8] mt-2 text-sm">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-[#0f1626] border border-[#1e2d45] rounded-lg px-4 py-3 text-[#f0ebe0] placeholder-[#5c6478] focus:border-[#c9a84c] focus:outline-none text-sm transition-colors"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#c9a84c] text-[#0a0e1a] rounded-full py-3 font-semibold text-sm hover:bg-[#d4b85c] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center mb-6">
                <Mail className="w-7 h-7 text-[#c9a84c]" />
              </div>
              <h1 className="font-serif text-3xl text-[#f0ebe0] font-semibold">
                Check your email
              </h1>
              <p className="text-[#a0a8b8] mt-3 text-sm leading-relaxed max-w-sm mx-auto">
                If an account exists for <span className="text-[#f0ebe0]">{email}</span>, we&apos;ve sent a password reset link. Please check your inbox.
              </p>
              <Link
                href="/login"
                className="inline-block mt-8 bg-[#c9a84c] text-[#0a0e1a] rounded-full px-8 py-3 font-semibold text-sm hover:bg-[#d4b85c] transition-colors"
              >
                Return to Sign In
              </Link>
            </div>
          )}

          {/* SOC 2 badge */}
          <div className="mt-12 flex items-center justify-center gap-1.5 text-[#5c6478] text-xs">
            <Shield className="w-3.5 h-3.5" />
            <span>SOC 2 Type II Compliant</span>
          </div>
        </div>
      </div>
    </div>
  )
}

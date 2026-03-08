"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { Check, Shield } from "lucide-react"

const features = [
  "Climate monitoring & alerts",
  "Complete vehicle provenance",
  "Owner portal access",
  "Automated billing & invoicing",
]

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [company, setCompany] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, company }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong")
        return
      }

      // Auto sign-in after successful signup
      const signInResult = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })

      if (signInResult?.error) {
        setError("Account created but sign-in failed. Please log in manually.")
        router.push("/login")
        return
      }

      router.push("/dashboard")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
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
          {/* Logo */}
          <div>
            <span className="font-serif text-[#c9a84c] text-3xl italic font-bold tracking-widest">
              PROVA
            </span>
          </div>

          {/* Tagline */}
          <p className="text-[#a0a8b8] mt-4 text-base leading-relaxed max-w-xs">
            Operations software for the world&apos;s finest car collections
          </p>

          {/* Feature checklist */}
          <ul className="mt-12 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#c9a84c]" strokeWidth={2.5} />
                </span>
                <span className="text-[#f0ebe0] text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Trust badge */}
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

          {/* Heading */}
          <h1 className="font-serif text-3xl text-[#f0ebe0] font-semibold">
            Create your account
          </h1>
          <p className="text-[#a0a8b8] mt-2 text-sm">
            Start your 14-day free trial
          </p>

          {/* Google button */}
          <button
            type="button"
            className="mt-8 w-full border border-[#1e2d45] rounded-full py-3 text-[#f0ebe0] text-sm hover:border-[#c9a84c]/50 transition-colors flex items-center justify-center gap-2 bg-transparent cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 border-t border-[#1e2d45]" />
            <span className="text-[#5c6478] text-xs tracking-widest uppercase">or</span>
            <div className="flex-1 border-t border-[#1e2d45]" />
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-[#0f1626] border border-[#1e2d45] rounded-lg px-4 py-3 text-[#f0ebe0] placeholder-[#5c6478] focus:border-[#c9a84c] focus:outline-none text-sm transition-colors"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-[#0f1626] border border-[#1e2d45] rounded-lg px-4 py-3 text-[#f0ebe0] placeholder-[#5c6478] focus:border-[#c9a84c] focus:outline-none text-sm transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full bg-[#0f1626] border border-[#1e2d45] rounded-lg px-4 py-3 text-[#f0ebe0] placeholder-[#5c6478] focus:border-[#c9a84c] focus:outline-none text-sm transition-colors"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full bg-[#0f1626] border border-[#1e2d45] rounded-lg px-4 py-3 text-[#f0ebe0] placeholder-[#5c6478] focus:border-[#c9a84c] focus:outline-none text-sm transition-colors"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c9a84c] text-[#0a0e1a] rounded-full py-3 font-semibold text-sm hover:bg-[#d4b85c] transition-colors disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer mt-2"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {/* Footer link */}
          <p className="mt-6 text-center text-sm text-[#a0a8b8]">
            Already have an account?{" "}
            <Link href="/login" className="text-[#c9a84c] hover:text-[#d4b85c] transition-colors">
              Sign in
            </Link>
          </p>

          {/* SOC 2 badge */}
          <div className="mt-8 flex items-center justify-center gap-1.5 text-[#5c6478] text-xs">
            <Shield className="w-3.5 h-3.5" />
            <span>SOC 2 Type II Compliant</span>
          </div>
        </div>
      </div>
    </div>
  )
}

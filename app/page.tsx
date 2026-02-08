'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Lock,
  ChevronDown,
} from 'lucide-react'

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How is tax calculated?',
      answer:
        'Our engine processes your lot-level FIFO history, calculates holding periods, and applies FY 2025-2026 tax slab logic to minimize STCG exposure while maximizing your LTCG exemption.',
    },
    {
      question: 'Does this execute redemption automatically?',
      answer:
        'No. RedeemRight is a decision intelligence platform. You review the analysis and choose the path that aligns with your intent. All redemptions require your explicit confirmation.',
    },
    {
      question: 'Is this financial advice?',
      answer:
        'RedeemRight provides tax-optimized analysis based on your portfolio data and tax regime. It calculates impact, not prescribes action. Decisions remain yours.',
    },
    {
      question: 'What if tax slabs change?',
      answer:
        'Our tax logic updates annually for regulatory changes. You can adjust your taxable income and regime at any time to see revised optimization scenarios.',
    },
    {
      question: 'How accurate is the optimization?',
      answer:
        'Accuracy depends on the data you provide. We use declared taxable income, current holdings, and purchase lot details. Our calculations follow declared income tax rules.',
    },
    {
      question: 'What assumptions are made?',
      answer:
        'We assume: lot-level purchase data is accurate, FIFO selection follows tax logic, exit loads are as declared by fund houses, and your tax regime remains constant during the financial year.',
    },
  ]

  return (
    <main className="w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-xl font-bold text-primary">RedeemRight</div>
          <nav className="hidden gap-8 md:flex">
            <Link
              href="#how-it-works"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              How it works
            </Link>
            <Link
              href="#solution"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              Solution
            </Link>
            <Link
              href="#faq"
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>
          <button className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Try Smart Redemption
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:gap-20">
          {/* Left: Copy */}
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary md:text-5xl">
              Withdraw With Precision.
            </h1>
            <p className="mb-4 text-lg text-foreground/70">
              Redeem your mutual funds with full visibility into tax impact, exit
              loads, and portfolio balance before you make a decision.
            </p>
            <p className="mb-8 text-base font-medium text-accent">
              Know the exact cost of liquidity before you click sell.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="rounded-lg bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Try Smart Redemption
              </button>
              <button className="rounded-lg border border-border px-8 py-3 text-base font-medium text-foreground transition-colors hover:border-accent hover:text-accent">
                View Live Simulation
              </button>
            </div>
          </div>

          {/* Right: Dashboard Mock */}
          <div className="flex items-center justify-center">
            <div className="w-full rounded-xl border border-border bg-white p-6 shadow-sm">
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <p className="text-sm text-foreground/60 mb-2">Withdrawal Requested</p>
                  <p className="text-3xl font-bold text-primary">₹10,00,000</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-foreground/60 mb-2 uppercase tracking-wide">
                      Estimated Tax
                    </p>
                    <p className="text-2xl font-bold text-primary">₹12,430</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60 mb-2 uppercase tracking-wide">
                      Exit Load
                    </p>
                    <p className="text-2xl font-bold text-green-600">₹0</p>
                  </div>
                </div>

                <div className="border-t border-b border-border py-4">
                  <p className="text-sm text-foreground/60 mb-1">Tax Saved vs Random</p>
                  <p className="text-2xl font-bold text-accent">₹18,430</p>
                </div>

                <div>
                  <p className="text-xs text-foreground/60 mb-3 uppercase tracking-wide">
                    Allocation After Redemption
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="h-2 rounded-full bg-accent/20">
                        <div
                          className="h-2 rounded-full bg-accent"
                          style={{ width: '72%' }}
                        />
                      </div>
                    </div>
                    <p className="text-lg font-bold text-primary">72%</p>
                  </div>
                  <p className="mt-2 text-xs text-foreground/60">Equity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Problem Section */}
      <section className="border-b border-border py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
              Redemption Is Where Wealth Quietly Leaks
            </h2>
            <p className="text-lg text-foreground/70">
              Most investors track returns. Very few track exit cost.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Unused LTCG Exemptions',
                description:
                  'Your LTCG exemption resets every financial year. Are you fully utilizing it?',
              },
              {
                title: 'Unexpected Short Term Capital Gains',
                description:
                  'Selling units purchased within the last 12 months triggers STCG, often at the worst time.',
              },
              {
                title: 'Exit Loads Triggered Days Before Expiry',
                description:
                  'Exit loads often expire within weeks yet go unnoticed. Costly mistakes happen here.',
              },
              {
                title: 'Selling High Performing Funds First',
                description:
                  'Redeeming best-performing funds concentrates risk and derails allocation strategy.',
              },
              {
                title: 'Portfolio Imbalance After Withdrawal',
                description:
                  'Random redemptions shift your equity-debt balance and expose you to unintended risk.',
              },
              {
                title: 'Lot Level Purchase Dates Matter',
                description:
                  'Holding period determines real tax impact. Without visibility, optimization is impossible.',
              },
            ].map((item, i) => (
              <div key={i} className="rounded-lg border border-border p-6 hover:border-accent/50 transition-colors">
                <h3 className="mb-3 text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-muted/40 p-8">
              <p className="mb-3 text-sm font-medium text-foreground/60 uppercase tracking-wide">
                Fact
              </p>
              <p className="text-lg font-semibold text-primary">
                Short term gains can significantly alter net redemption value.
              </p>
            </div>
            <div className="rounded-lg bg-muted/40 p-8">
              <p className="mb-3 text-sm font-medium text-foreground/60 uppercase tracking-wide">
                Fact
              </p>
              <p className="text-lg font-semibold text-primary">
                Exit loads often expire within weeks yet go unnoticed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Architecture Section */}
      <section id="solution" className="border-b border-border bg-muted/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
              Engineered for Intelligent Liquidity
            </h2>
            <p className="text-lg text-foreground/70">
              Structured layers designed to optimize every aspect of your
              redemption decision.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                layer: 'Layer 1',
                title: 'Tax Optimization Engine',
                features: [
                  'Processes lot level FIFO history',
                  'Calculates holding periods',
                  'Applies FY 2025-2026 slab logic',
                  'Maximizes LTCG exemption',
                  'Minimizes STCG exposure',
                ],
              },
              {
                layer: 'Layer 2',
                title: 'Exit Load Awareness',
                features: [
                  'Identifies lock in windows',
                  'Flags near expiry units',
                  'Prevents avoidable penalties',
                  'Tracks fund house policies',
                  'Alerts on critical dates',
                ],
              },
              {
                layer: 'Layer 3',
                title: 'Portfolio Integrity Logic',
                features: [
                  'Maintains equity debt balance',
                  'Avoids disproportionate exposure shifts',
                  'Considers fund performance',
                  'Evaluates expense ratios',
                  'Preserves allocation strategy',
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-background p-8"
              >
                <p className="mb-2 text-xs font-medium text-accent uppercase tracking-wide">
                  {item.layer}
                </p>
                <h3 className="mb-6 text-2xl font-bold text-primary">
                  {item.title}
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {item.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                      <p className="text-sm text-foreground/80">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="border-b border-border py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
              Structured. Transparent. Logical.
            </h2>
            <p className="text-lg text-foreground/70">
              Five clear steps from portfolio entry to redemption clarity.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Enter PAN',
                description:
                  'Portfolio is simulated and displayed with allocation and lot details.',
              },
              {
                step: '02',
                title: 'Define Withdrawal',
                description:
                  'Enter required amount and tax details including regime and taxable income.',
              },
              {
                step: '03',
                title: 'Optimization Engine Runs',
                description:
                  'Three structured strategies generated: Tax Efficient, Performance Aware, Balanced Precision.',
              },
              {
                step: '04',
                title: 'Review Impact',
                description:
                  'Clear comparison of tax, exit load, and allocation shift. AI-generated explanation of selected lots.',
              },
              {
                step: '05',
                title: 'Decide With Clarity',
                description:
                  'You choose the path that aligns with your intent. All decisions are yours.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background text-lg font-bold text-accent">
                    {item.step}
                  </div>
                  {i < 4 && (
                    <div className="my-4 h-16 w-0.5 bg-gradient-to-b from-accent to-accent/30" />
                  )}
                </div>
                <div className="flex-1 pt-2 pb-8">
                  <h3 className="mb-3 text-2xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-base text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Intelligence Section */}
      <section className="border-b border-border bg-muted/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold text-primary md:text-5xl">
              Computation With Context
            </h2>
            <p className="text-lg text-foreground/70">
              The engine does not guess. It calculates.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-4 text-lg font-semibold text-primary">
                What RedeemRight Explains
              </h3>
              <ul className="space-y-3">
                {[
                  'Why a specific fund is selected',
                  'How much LTCG exemption is utilized',
                  'What STCG would have been triggered otherwise',
                  'How allocation changes post redemption',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-accent/30 bg-accent/5 p-8">
              <p className="mb-4 text-sm font-medium text-accent uppercase tracking-wide">
                Example Insight
              </p>
              <p className="mb-6 text-base leading-relaxed text-foreground">
                Redeeming entirely from Fund C would trigger ₹42,000 in short term
                gains because 63% of units were purchased within the last 11 months.
              </p>
              <p className="text-base leading-relaxed text-foreground">
                The recommended path instead utilizes ₹38,000 of remaining LTCG
                exemption from Fund B, reducing immediate tax liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Thoughtful Investors */}
      <section className="border-b border-border py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-bold text-primary md:text-5xl">
            Designed for Investors Who Plan Before They Act
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              'For goal based planners',
              'For investors who value allocation discipline',
              'For those who want clarity before liquidity',
              'For individuals who prefer numbers over assumptions',
            ].map((item, i) => (
              <div key={i} className="rounded-lg bg-muted/50 p-6">
                <p className="text-base font-medium text-primary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust and Compliance */}
      <section className="border-b border-border bg-muted/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-4xl font-bold text-primary md:text-5xl">
            Structured Around Financial Integrity
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-primary">
                Tax Logic
              </h3>
              <p className="text-sm text-foreground/70">
                Based on declared taxable income for FY 2025-2026 tax rules. No
                assumptions beyond what you provide.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <Lock className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-primary">
                Secure Architecture
              </h3>
              <p className="text-sm text-foreground/70">
                No trade execution. No tax filing. Transparent calculation
                methodology. Data handling built for privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-b border-border py-20 md:py-32">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-12 text-4xl font-bold text-primary md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <button
                key={i}
                onClick={() =>
                  setExpandedFaq(expandedFaq === i ? null : i)
                }
                className="w-full rounded-lg border border-border bg-background p-6 text-left transition-all hover:border-accent/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-semibold text-primary">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-accent transition-transform ${
                      expandedFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {expandedFaq === i && (
                  <p className="mt-4 text-sm text-foreground/70">
                    {faq.answer}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="border-b border-border bg-primary py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary-foreground md:text-5xl">
            Clarity Before Liquidity.
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Know the cost. Preserve the balance. Redeem with structure.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-8 py-3 text-base font-medium text-primary transition-opacity hover:opacity-90">
            Launch Smart Redemption
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <p className="font-bold text-primary">RedeemRight</p>
              <p className="mt-2 text-sm text-foreground/60">
                Tax intelligent mutual fund redemption for Indian investors.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">Product</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-foreground/60">Smart Redemption</p>
                <p className="text-sm text-foreground/60">Tax Analysis</p>
                <p className="text-sm text-foreground/60">Portfolio Tools</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">Company</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-foreground/60">About</p>
                <p className="text-sm text-foreground/60">Privacy</p>
                <p className="text-sm text-foreground/60">Terms</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">Legal</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-foreground/60">Disclaimer</p>
                <p className="text-sm text-foreground/60">Compliance</p>
                <p className="text-sm text-foreground/60">Support</p>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-center text-sm text-foreground/60">
              © 2024 RedeemRight. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

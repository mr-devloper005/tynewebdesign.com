import type { Metadata } from 'next'

import Link from 'next/link'

import { ArrowRight, Clock, Image as ImageIcon, Mail, MessageSquare, User } from 'lucide-react'

import { NavbarShell } from '@/components/shared/navbar-shell'

import { Footer } from '@/components/shared/footer'

import { Button } from '@/components/ui/button'

import { Card, CardContent } from '@/components/ui/card'

import { Input } from '@/components/ui/input'

import { Label } from '@/components/ui/label'

import { Textarea } from '@/components/ui/textarea'

import { SITE_CONFIG } from '@/lib/site-config'

import { buildPageMetadata } from '@/lib/seo'
import { ContactLeadForm } from "@/components/shared/contact-lead-form";



const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@tynewebdesign.com'



export async function generateMetadata(): Promise<Metadata> {

  return buildPageMetadata({

    path: '/contact',

    title: `Contact — ${SITE_CONFIG.name}`,

    description: `Reach ${SITE_CONFIG.name} for partnerships, creator support, technical questions, and press. Same calm studio experience as the rest of the site.`,

  })

}



const reasons = [

  {

    title: 'Creator & gallery support',

    body: 'Questions about publishing, profiles, or how your work appears in the feed—we route you to the right team.',

    icon: ImageIcon,

  },

  {

    title: 'Partnerships & collaborations',

    body: 'Sponsorships, integrations, and co-marketing that fit a visual-first product without noisy placements.',

    icon: User,

  },

  {

    title: 'Technical & billing',

    body: 'API access, account issues, and invoices. Include URLs and timestamps so we can reproduce anything odd.',

    icon: MessageSquare,

  },

]



export default function ContactPage() {

  return (

    <div className="min-h-screen bg-transparent text-foreground">

      <NavbarShell />

      <main>

        <section className="relative overflow-hidden border-b border-border/60">

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.92_0.05_28_/_0.25),transparent_55%)]" />

          <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">

            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Contact</p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-[3.1rem] lg:leading-[1.08]">

              Tell us what you are publishing, fixing, or launching—we will route it to the right lane.

            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">

              {SITE_CONFIG.name} is built for galleries, profiles, and calm discovery. Whether you are a creator, a partner, or troubleshooting something technical, the more context you

              share, the faster we can help.

            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">

              <span className="inline-flex items-center gap-2">

                <Clock className="h-4 w-4 text-accent" />

                Typical reply within one business day

              </span>

              <Link href="/help" className="font-semibold text-foreground underline-offset-4 transition hover:text-accent hover:underline">

                Browse help center

              </Link>

            </div>

          </div>

        </section>



        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">

            <div className="space-y-5">

              <div>

                <h2 className="text-xl font-semibold tracking-[-0.02em]">Why people reach out</h2>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">

                  Pick the area that fits you best in your message—we read everything and forward internally so you are not bounced between queues.

                </p>

              </div>

              <div className="grid gap-4 sm:grid-cols-1">

                {reasons.map((item) => {

                  const Icon = item.icon

                  return (

                    <Card key={item.title} className="border-border bg-card/90 shadow-[var(--gallery-shadow-soft)] backdrop-blur-sm">

                      <CardContent className="flex gap-4 p-5 sm:p-6">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-muted/50">

                          <Icon className="h-5 w-5 text-accent" />

                        </div>

                        <div>

                          <h3 className="font-semibold">{item.title}</h3>

                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>

                        </div>

                      </CardContent>

                    </Card>

                  )

                })}

              </div>

              <Card className="border-dashed border-border bg-muted/20">

                <CardContent className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">

                  <div className="flex items-start gap-3">

                    <Mail className="mt-0.5 h-5 w-5 text-accent" />

                    <div>

                      <p className="text-sm font-medium">Email us directly</p>

                      <p className="mt-1 text-sm text-muted-foreground">

                        <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-foreground hover:underline">

                          {CONTACT_EMAIL}

                        </a>

                      </p>

                    </div>

                  </div>

                  <Button asChild variant="outline" className="rounded-full shrink-0">

                    <Link href={`mailto:${CONTACT_EMAIL}`}>

                      Send email

                      <ArrowRight className="ml-1 h-4 w-4" />

                    </Link>

                  </Button>

                </CardContent>

              </Card>

            </div>



            <Card className="border-border bg-card shadow-[var(--gallery-shadow)]">

              <CardContent className="p-6 sm:p-8">

                <h2 className="text-xl font-semibold tracking-[-0.02em]">Send a message</h2>

                <p className="mt-2 text-sm text-muted-foreground">All fields help us respond with a concrete next step—not a generic auto-reply.</p>

                <ContactLeadForm />

              </CardContent>

            </Card>

          </div>

        </section>

      </main>

      <Footer />

    </div>

  )

}


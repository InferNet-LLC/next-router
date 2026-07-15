/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

interface HomeFaqCtaProps {
  isAuthenticated: boolean
}

export function HomeFaqCta(props: HomeFaqCtaProps) {
  const { t } = useTranslation()
  const faqs = [
    [
      t('Which models can I use?'),
      t(
        'You can use GPT, Claude, Gemini, DeepSeek, and other popular models shown on the pricing page'
      ),
    ],
    [
      t('Can I use it with Codex or Claude Code?'),
      t(
        'Yes, copy the API address and key into Codex, Claude Code, Cherry Studio, or another compatible client'
      ),
    ],
    [
      t('How does pricing work?'),
      t(
        'You pay from one balance based on the model and usage, with current prices listed clearly before you start'
      ),
    ],
    [
      t('Is the service stable enough for daily use?'),
      t(
        'The relay automatically selects available upstream routes and retries supported requests when a route fails'
      ),
    ],
    [
      t('Can I see where my balance goes?'),
      t(
        'Yes, usage records show the model, tokens, time, and cost for each request'
      ),
    ],
  ]

  return (
    <>
      <section id='faq' className='border-b'>
        <div className='mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16'>
          <div className='self-start lg:sticky lg:top-24'>
            <div className='text-muted-foreground font-mono text-xs tracking-[0.14em] uppercase'>
              {t('FAQ')}
            </div>
            <h2 className='mt-5 text-3xl leading-tight font-medium tracking-[-0.04em] sm:text-4xl'>
              {t('Everything you need to know')}
            </h2>
            <p className='text-muted-foreground mt-5 text-sm leading-6'>
              {t(
                'For setup steps and supported clients, visit the connection guide'
              )}
            </p>
          </div>
          <div className='bg-card rounded-lg border px-5 sm:px-6'>
            <Accordion className='w-full'>
              {faqs.map((faq, index) => (
                <AccordionItem key={faq[0]} value={`faq-${index + 1}`}>
                  <AccordionTrigger className='py-5 text-base no-underline hover:no-underline'>
                    <span className='text-muted-foreground mr-5 font-mono text-[10px]'>
                      0{index + 1}
                    </span>
                    <span className='flex-1'>{faq[0]}</span>
                  </AccordionTrigger>
                  <AccordionContent className='text-muted-foreground pr-8 pb-5 pl-9 leading-6'>
                    {faq[1]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className='border-b'>
        <div className='mx-auto max-w-7xl px-5 py-12 sm:py-16'>
          <div className='bg-cta text-cta-foreground border-cta-foreground/10 relative isolate grid overflow-hidden rounded-xl border shadow-2xl lg:grid-cols-[1fr_auto]'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute inset-0 overflow-hidden'
            >
              <div className='absolute inset-0 [background-image:linear-gradient(to_right,color-mix(in_oklch,var(--cta-foreground)_16%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--cta-foreground)_16%,transparent)_1px,transparent_1px)] [mask-image:linear-gradient(to_right,black_15%,transparent_92%)] [background-size:32px_32px] opacity-40' />
              <div className='bg-chart-1/40 absolute -top-24 left-[8%] size-72 rounded-full blur-[96px]' />
              <div className='bg-chart-2/35 absolute -bottom-32 left-[38%] size-80 rounded-full blur-[112px]' />
              <div className='bg-chart-4/35 absolute top-1/2 right-[5%] size-64 -translate-y-1/2 rounded-full blur-[96px]' />
              <div className='absolute inset-0 bg-[radial-gradient(circle_at_42%_50%,transparent_0%,color-mix(in_oklch,var(--cta-background)_72%,transparent)_100%)]' />
            </div>

            <div className='relative z-10 p-6 sm:p-10'>
              <p className='text-cta-foreground/60 font-mono text-[10px] tracking-[0.2em] uppercase'>
                {t('Start creating')}
              </p>
              <h2 className='mt-6 max-w-4xl text-3xl leading-tight font-medium tracking-[-0.04em] text-balance sm:text-4xl'>
                {t('Your models, clients, and usage in one place')}
              </h2>
            </div>
            <div className='border-cta-foreground/20 bg-cta-foreground/5 relative z-10 flex items-end border-t p-6 backdrop-blur-sm sm:p-10 lg:w-72 lg:border-t-0 lg:border-l'>
              <Button
                size='lg'
                variant='secondary'
                className='w-full'
                render={
                  <Link
                    to={props.isAuthenticated ? '/dashboard' : '/sign-up'}
                  />
                }
              >
                {props.isAuthenticated
                  ? t('Go to Dashboard')
                  : t('Get Started')}
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  data-icon='inline-end'
                  strokeWidth={2}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

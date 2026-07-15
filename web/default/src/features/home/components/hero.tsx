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

import { Button } from '@/components/ui/button'

import { HomeHeroColorPanelsVisual } from './hero-color-panels-visual'

interface HomeHeroProps {
  docsUrl: string
  isAuthenticated: boolean
}

export function HomeHero(props: HomeHeroProps) {
  const { t } = useTranslation()

  return (
    <section className='relative isolate overflow-hidden border-b py-8 pt-14'>
      <div className='relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-5 lg:min-h-[36rem] lg:grid-cols-[1fr_minmax(22rem,31rem)] lg:gap-16 lg:pb-24'>
        <div className='flex max-w-3xl flex-col gap-4 text-balance sm:gap-5'>
          <h1 className='text-[2.5rem] leading-[1.02] font-medium sm:text-5xl sm:leading-[0.98]'>
            {t('Stop comparing. Your last AI relay')}
          </h1>

          <p className='text-muted-foreground max-w-2xl text-base leading-7 sm:text-lg lg:text-xl'>
            {t(
              'Use GPT, Claude, and Gemini reliably at discounted prices, then connect Codex, Claude Code, and more in one step'
            )}
          </p>

          <div className='mt-2 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center'>
            <Button
              className='col-span-2 w-full rounded-full px-4 sm:w-auto'
              size='lg'
              render={
                <Link to={props.isAuthenticated ? '/dashboard' : '/sign-up'} />
              }
            >
              {props.isAuthenticated ? t('Go to Dashboard') : t('Get Started')}
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                data-icon='inline-end'
                strokeWidth={2}
              />
            </Button>
            <Button
              size='lg'
              variant='outline'
              render={<Link to='/pricing' />}
              className='w-full rounded-full px-4 sm:w-auto'
            >
              {t('View Pricing')}
            </Button>
            <Button
              className='hidden w-full rounded-full px-4 sm:w-auto'
              size='lg'
              variant='ghost'
              render={
                <a
                  href={props.docsUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                />
              }
            >
              {t('Setup guide')}
            </Button>
          </div>
        </div>

        <HomeHeroColorPanelsVisual />
      </div>
    </section>
  )
}

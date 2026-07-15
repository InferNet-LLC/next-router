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
import { useTranslation } from 'react-i18next'

export function HomeCapabilities() {
  const { t } = useTranslation()

  return (
    <section id='capabilities' className='border-b'>
      <div className='mx-auto max-w-7xl px-5 py-16 sm:py-20'>
        <div className='max-w-3xl'>
          <div className='text-muted-foreground font-mono text-xs tracking-[0.14em] uppercase'>
            {t('Why switch')}
          </div>
          <h2 className='mt-5 text-3xl leading-tight font-medium tracking-[-0.04em] sm:text-4xl'>
            {t('One account for the models and clients you already use')}
          </h2>
          <p className='text-muted-foreground mt-5 max-w-2xl text-base leading-7 sm:text-lg'>
            {t(
              'Stop comparing providers and maintaining separate balances, keys, and endpoints across every AI tool'
            )}
          </p>
        </div>

        <div className='mt-10 grid gap-4 md:grid-cols-3'>
          <article className='bg-card rounded-lg border p-5 sm:p-6'>
            <div className='text-muted-foreground flex items-center justify-between font-mono text-[10px] tracking-widest'>
              <span>{t('MODEL ACCESS')}</span>
              <span>01</span>
            </div>
            <h3 className='mt-12 text-xl font-medium tracking-tight sm:text-2xl'>
              {t('Use flagship models without choosing a provider')}
            </h3>
            <p className='text-muted-foreground mt-3 text-sm leading-6'>
              {t(
                'Switch between GPT, Claude, Gemini, and other popular models with the same balance and API key'
              )}
            </p>
          </article>

          <article className='bg-card rounded-lg border p-5 sm:p-6'>
            <div className='text-muted-foreground flex items-center justify-between font-mono text-[10px] tracking-widest'>
              <span>{t('CLIENT SETUP')}</span>
              <span>02</span>
            </div>
            <h3 className='mt-12 text-xl font-medium tracking-tight sm:text-2xl'>
              {t('Connect your favorite AI clients in minutes')}
            </h3>
            <p className='text-muted-foreground mt-3 text-sm leading-6'>
              {t(
                'Copy your API address and key into Codex, Claude Code, Cherry Studio, and other compatible clients'
              )}
            </p>
          </article>

          <article className='bg-card rounded-lg border p-5 sm:p-6'>
            <div className='text-muted-foreground flex items-center justify-between font-mono text-[10px] tracking-widest'>
              <span>{t('TRANSPARENCY')}</span>
              <span>03</span>
            </div>
            <h3 className='mt-12 text-xl font-medium tracking-tight sm:text-2xl'>
              {t('Know what every request costs')}
            </h3>
            <p className='text-muted-foreground mt-3 text-sm leading-6'>
              {t(
                'Check your balance, model prices, token usage, and request details from one clear dashboard'
              )}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

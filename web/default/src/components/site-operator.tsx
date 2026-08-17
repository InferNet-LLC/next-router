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
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { IconGithub } from '@/assets/brand-icons/icon-github'
import { cn } from '@/lib/utils'

export const SITE_OPERATOR_NAME = 'Next Router Team'
export const SITE_OPERATOR_URL = 'https://github.com/Yidadaa'

export function SiteOperatorLink(props: { className?: string }) {
  const { t } = useTranslation()

  return (
    <a
      href={SITE_OPERATOR_URL}
      target='_blank'
      rel='author me noopener noreferrer'
      className={cn(
        'text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex items-center gap-1.5 rounded-md outline-none transition-colors focus-visible:ring-3',
        props.className
      )}
    >
      <IconGithub className='size-3.5' aria-hidden='true' />
      <span>
        {t('Operated by {{operator}}', { operator: SITE_OPERATOR_NAME })}
      </span>
    </a>
  )
}

export function SiteOperatorLinks(props: { className?: string }) {
  const { t } = useTranslation()

  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-x-2 gap-y-1',
        props.className
      )}
    >
      <SiteOperatorLink />
      <span aria-hidden='true' className='text-muted-foreground/40'>
        ·
      </span>
      <Link
        to='/user-agreement'
        className='text-muted-foreground hover:text-foreground transition-colors'
      >
        {t('User Agreement')}
      </Link>
      <span aria-hidden='true' className='text-muted-foreground/40'>
        ·
      </span>
      <Link
        to='/privacy-policy'
        className='text-muted-foreground hover:text-foreground transition-colors'
      >
        {t('Privacy Policy')}
      </Link>
    </div>
  )
}

export function SiteOperatorFooter(props: { className?: string }) {
  return (
    <footer
      className={cn(
        'border-border/40 relative z-10 border-t px-6 py-4',
        props.className
      )}
    >
      <div className='mx-auto flex max-w-6xl justify-center text-xs'>
        <SiteOperatorLinks />
      </div>
    </footer>
  )
}

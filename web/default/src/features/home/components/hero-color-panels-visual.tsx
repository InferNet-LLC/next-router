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
import { ColorPanels } from '@paper-design/shaders-react'
import { memo } from 'react'

const MemoizedColorPanels = memo(ColorPanels)

const SHADER_COLORS = ['#ed40b3', '#6ef7cc', '#adfa1e', '#b054de']

const SHARED_SHADER_PROPS = {
  colors: SHADER_COLORS,
  colorBack: '#ffffff00',
  density: 5.03,
  angle1: 0.68,
  angle2: 0.28,
  length: 1.13,
  edges: true,
  blur: 0.25,
  fadeIn: 0.85,
  fadeOut: 0.3,
  gradient: 0.56,
  speed: 4,
  scale: 0.96,
  rotation: 180,
} as const

const MOBILE_SHADER_STYLE = {
  height: '100%',
  width: '100%',
} as const

export function HomeHeroColorPanelsVisual() {
  return (
    <>
      <div
        aria-hidden='true'
        className='relative hidden h-[25rem] lg:block xl:h-[31rem]'
      >
        <div className='absolute inset-0 flex items-center justify-center overflow-hidden rounded-full'>
          <MemoizedColorPanels
            {...SHARED_SHADER_PROPS}
            width={1280}
            height={720}
          />
        </div>
      </div>

      <div
        aria-hidden='true'
        className='pointer-events-none relative order-first -mx-5 h-52 overflow-hidden sm:h-64 lg:hidden'
      >
        <div className='via-background/80 to-background absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-b from-transparent' />
        <div className='absolute -inset-x-[12%] -top-12 bottom-0 [mask-image:linear-gradient(to_bottom,black_0%,black_78%,transparent_100%)]'>
          <MemoizedColorPanels
            {...SHARED_SHADER_PROPS}
            style={MOBILE_SHADER_STYLE}
          />
        </div>
      </div>
    </>
  )
}

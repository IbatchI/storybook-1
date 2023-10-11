import type { CSSProperties } from 'react'

import type { IconType } from 'react-icons'
import { COLORS, type ColorVariant } from '../../types/colors'

export interface IconProps {
  className?: string
  icon: IconType
  variant?: ColorVariant
  size?: number | string
  style?: CSSProperties
}

export const Icon = ({ className, icon, variant, size, style }: IconProps) => {
  const LocalIcon = icon
  const color = variant ? (COLORS[variant] as string) : undefined

  return <LocalIcon className={className} style={{ color, fontSize: size, ...style }} />
}

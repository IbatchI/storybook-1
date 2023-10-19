import { Badge } from 'react-bootstrap'
import type { Color } from 'react-bootstrap/esm/types'

import { concat } from '../../utils/functionUtils'
import { PillState, PillVariant } from './PillTypes'
import { renderBadges } from './PillUtils'

import './Pill.scss'

export interface PillProps {
  label: string
  className?: string
  bgVariant?: PillVariant
  textVariant?: PillVariant
  state?: PillState | PillState[]
  width?: number | string
  height?: number | string
}

export const Pill = ({
  label,
  className,
  bgVariant,
  textVariant,
  width,
  height,
  state,
}: PillProps) => {
  return (
    <div className={concat('pill-container', className)}>
      <Badge
        pill
        className='pill'
        bg={bgVariant}
        style={{
          width: width,
          height: height,
        }}
        text={textVariant as Color}
      >
        {label}
      </Badge>

      {renderBadges(state)}
    </div>
  )
}

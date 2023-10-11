import { OverlayTrigger, Tooltip as BsTooltip } from 'react-bootstrap'
import type { TooltipPlacement } from './tooltipTypes'

export interface TooltipProps {
  children: JSX.Element
  placement?: TooltipPlacement
  label: string
}

export const Tooltip = ({ children, placement = 'top', label }: TooltipProps) => {
  const overlay =
    placement && label ? (
      <BsTooltip id={`tooltip-${placement}`} style={{ position: 'fixed' }}>
        {label}
      </BsTooltip>
    ) : (
      <></>
    )

  const isButton = children.type.displayName === 'Button'

  return (
    <OverlayTrigger key={placement} placement={placement} overlay={overlay}>
      {isButton ? <div>{children}</div> : children}
    </OverlayTrigger>
  )
}

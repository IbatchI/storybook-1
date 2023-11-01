import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button as BsButton } from 'react-bootstrap'

import { concat } from '../../utils/functionUtils'
import type { ButtonVariant } from './buttonTypes'

import './button.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  disabled?: boolean
  variant?: ButtonVariant
  width?: string | number
}

export const Button = ({
  children,
  className,
  disabled,
  type = 'button',
  variant = 'primary',
  style,
  width,
  ...props
}: ButtonProps) => {
  return (
    <BsButton
      type={type}
      className={concat('button', className)}
      variant={variant}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...props}
    >
      {children}
    </BsButton>
  )
}

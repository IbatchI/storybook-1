import type { ReactElement } from 'react'
import { type FormControlProps, Form, InputGroup } from 'react-bootstrap'

import { concat } from '../../utils/functionUtils'
import { blockInvalidCharacters } from './inputUtils'

import './input.scss'

export interface InputProps extends FormControlProps {
  name: string
  label?: string
  error?: string
  isDecimal?: boolean
  bgVariant?: 'default' | 'blue' | 'green' | 'grey'
  borderVariant?: 'default' | 'transparent'
  textVariant?: 'default' | 'blue' | 'green' | 'black' | 'red' | 'white' | 'grey'
  width?: string
  maxLength?: number
  max?: number
  min?: number
  icon?: ReactElement
  handleClickOnIcon?: () => void
  isDisabledIcon?: boolean
  iconSize?: number | string
}

export const Input = ({
  className,
  name,
  type,
  label,
  error,
  isInvalid,
  isDecimal,
  bgVariant = 'default',
  borderVariant = 'default',
  maxLength,
  max,
  min,
  icon,
  handleClickOnIcon,
  isDisabledIcon,
  textVariant,
  iconSize,
  width,
  ...inputProps
}: InputProps) => {
  return (
    <div className={concat('input-container', className)} style={{ width }}>
      {label && <Form.Label>{label}</Form.Label>}

      <InputGroup hasValidation>
        <Form.Control
          name={name}
          className={concat(
            'custom-input',
            `bg-${bgVariant}`,
            `border-${borderVariant}`,
            `text-${textVariant}`,
          )}
          autoComplete='off'
          isInvalid={isInvalid}
          onKeyDown={type === 'number' ? blockInvalidCharacters(isDecimal) : undefined}
          type={type}
          maxLength={maxLength}
          max={max}
          min={min}
          {...inputProps}
        />
        <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
        {icon && (
          <button
            className={concat('btn-input-icon', `text-${textVariant}`)}
            disabled={isDisabledIcon}
            onClick={handleClickOnIcon}
            style={{
              fontSize: iconSize,
            }}
          >
            {icon}
          </button>
        )}
        <div></div>
      </InputGroup>
    </div>
  )
}

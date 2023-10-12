import { useFormikContext } from 'formik'
import { Form, type FormControlProps, InputGroup } from 'react-bootstrap'

import { concat } from '../../utils/functionUtils'
import { blockInvalidCharacters } from './inputUtils'

import './input.scss'
import { ReactElement } from 'react'

export interface InputProps extends FormControlProps {
  name: string
  label?: string
  error?: string
  isDecimal?: boolean
  bgVariant?: 'default' | 'blue' | 'green' | 'grey'
  borderVariant?: 'default' | 'transparent'
  textVariant?: 'default' | 'blue' | 'green' | 'black' | 'red' | 'white' | 'grey'
  width?: string | number
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
  value,
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
  ...inputProps
}: InputProps) => {
  const { values, errors, handleChange, handleBlur } = useFormikContext<
    Record<string, string>
  >() ?? { values: {} }

  return (
    <div className={concat('input-container', className)}>
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
          value={value ?? values[name]}
          onChange={inputProps.onChange ?? handleChange}
          onBlur={inputProps.onBlur ?? handleBlur}
          isInvalid={isInvalid ?? !!errors[name]}
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
            className={concat('input-icon', `text-${textVariant}`)}
            disabled={isDisabledIcon}
            onClick={handleClickOnIcon}
            style={{
              fontSize: iconSize,
            }}
          >
            {icon}
          </button>
        )}
      </InputGroup>
    </div>
  )
}

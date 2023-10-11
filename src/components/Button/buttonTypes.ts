export const allButtonVariants = [
  'info',
  'primary',
  'secondary',
  'success',
  'dark',
  'warning',
  'light',
  'danger',
  'link',
  'white',
  'light-gray',
  'violet',
  'outline-primary',
  'outline-secondary',
  'outline-success',
  'outline-danger',
  'outline-warning',
  'outline-info',
  'outline-dark',
  'outline-violet',
] as const

export type ButtonVariant = (typeof allButtonVariants)[number]

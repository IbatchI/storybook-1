// * Replicate the colors from styles/_variables.scss
export const COLORS = {
  black: '#000',
  white: '#ffffff',

  light300: '#f7f7f7',
  light500: '#e9ecef',
  light700: '#e0e0e0',
  light900: '#dddddd',

  secondary300: 'rgba(161, 161, 161, 1)',
  secondary500: '#999999',
  secondary600: '#797979',
  secondary700: '#575757',
  secondary900: '#2f2f2f',

  primary300: '#159ad8',
  primary500: '#3865b8',
  primary700: '#0063bd',

  warning100: '#ffc107',
  warning300: '#fbc024',
  warning500: '#ff973d',
  warning700: '#ff7600',

  error300: '#ff6666',
  error500: '#dc3545',

  success500: '#4ad295',
  success700: '#219e66',

  violet700: '#4c04aa',
} as const

export type ColorVariant = keyof typeof COLORS
export type Colors = (typeof COLORS)[ColorVariant]

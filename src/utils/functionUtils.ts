/**
 * Concat classNames
 * Accept any string and validations as `value && 'class'`
 */
export const concat = (...classNames: (string | boolean | undefined)[]) => {
  return classNames.filter((cn) => !!cn).join(' ')
}

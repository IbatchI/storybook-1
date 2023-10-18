/**
 * Concat classNames
 * Accept any string and validations as `value && 'class'`
*/
export const concat = (...classNames: (string | boolean | undefined)[]) => {
  return classNames.filter((cn) => !!cn).join(' ')
}

/**
 * Draw a dot before the rest of the content
 * Accept colors
*/

export const dot = ({ color = 'transparent' }) => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: `${color}35`,
    borderRadius: 15,
    border: `1px solid ${color}`,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 15,
    width: 15,
  },
})

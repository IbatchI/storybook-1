/**
 * @returns An object with the options as keys and values. Useful for Storybook's `options` property of control type `select`.
 */
export const createSelectOptions = (options: string[] | Readonly<string[]>) => {
  const optionsObject: Record<string, string> = {}

  options.forEach((option) => {
    optionsObject[option] = option
  })

  return optionsObject
}

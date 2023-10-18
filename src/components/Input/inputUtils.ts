import { KeyboardEvent } from 'react'

export const blockInvalidCharacters =
  (allowDecimals?: boolean) => (e: KeyboardEvent<HTMLInputElement>) => {
    const blockers = allowDecimals
      ? ['e', 'E', '+', '-', '{', '}']
      : ['e', 'E', '+', '-', '{', '}', '.', ',']

    return blockers.includes(e.key) && e.preventDefault()
  }

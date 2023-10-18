/* eslint-disable @typescript-eslint/no-unused-vars */
import { GroupBase } from 'react-select'
import { Colors } from '../../types/colors'

export type GenericValue = { color?: Colors; value: string; label: string }

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    width?: string
  }
}

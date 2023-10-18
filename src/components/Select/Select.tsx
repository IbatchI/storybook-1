import Select, { Props, GroupBase } from 'react-select'
import { GenericValue } from './SelectTypes'
import { dot } from '../../utils/functionUtils'
import './Select.scss'

// In this component we use react-select library, because we use the multiselect.
// Here we can see the props that the component can recieved -> https://react-select.com/props

export const GenericSelect = <
  Option extends GenericValue,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  classNames,
  width,
  ...props
}: Props<Option, IsMulti, Group>) => {
  return (
    <Select
      // if in the value object where we have the initial value
      // we have color, so it's because we need to render a dot previus the option
      styles={{
        container: (provided) => ({
          ...provided,
          width,
        }),
        option: (styles, { data }) =>
          data?.color ? { ...styles, ...dot({ color: data.color }) } : styles,
        singleValue: (styles, { data }) =>
          data?.color ? { ...styles, ...dot({ color: data.color }) } : styles,
        multiValueLabel: (styles, { data }) =>
          data?.color
            ? {
                ...styles,
                color: data.color,
                fontWeight: 'bold',
              }
            : styles,
      }}
      // Note: this is not to be confused with the className prop, which will add a class to the component.
      classNames={{
        ...classNames,
        container: () => 'custom-select-container',
        control: () => 'control',
        dropdownIndicator: () => 'dropdown-btn',
        placeholder: () => 'placeholder',
        multiValue: () => 'multivalue',
        multiValueRemove: () => 'multivalue-remove',
      }}
      {...props}
    />
  )
}

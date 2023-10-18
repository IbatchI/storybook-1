import type { Meta, StoryObj } from '@storybook/react'
import { GenericSelect } from '../components/Select/Select'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Select',
  component: GenericSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    width: { type: 'string', description: 'Is the width of the select' },
    placeholder: { type: 'string', description: 'Is the placeholder of the select' },
  },
} satisfies Meta<typeof GenericSelect>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Generic: Story = {
  args: {
    placeholder: 'Seleccione su juego',
    options: [
      {
        value: 'AssassinsCreed2',
        label: 'Assassins Creed 2',
      },
      {
        value: 'AssassinsCreed1',
        label: 'Assassins Creed 1',
      },
    ],
  },
}

export const MultiSelect: Story = {
  args: {
    placeholder: 'Seleccione su juego',
    options: [
      {
        value: 'AssassinsCreed2',
        label: 'Assassins Creed 2',
      },
      {
        value: 'AssassinsCreed1',
        label: 'Assassins Creed 1',
      },
    ],
    isMulti: true,
  },
}

export const WithDots: Story = {
  args: {
    placeholder: 'Seleccionar estado',
    options: [
      {
        value: 'pending',
        label: 'Pendiente Y ademas super largo el label',
        color: '#219e66',
      },
      {
        value: 'configured',
        label: 'Configurado',
        color: '#ff973d',
      },
      {
        value: 'notApply',
        label: 'No Aplicado',
        color: '#3865b8',
      },
    ],
    isMulti: true,
  },
}

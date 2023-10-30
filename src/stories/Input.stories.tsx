import { AiFillWarning } from 'react-icons/ai'
import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '../components/Input/Input'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text: Story = {
  render: (args) => <Input {...args} />,
  args: {
    name: 'text',
    label: 'Text Input',
    placeholder: 'Text Input',
  },
}

export const Number: Story = {
  render: (args) => <Input {...args} />,
  args: {
    name: 'number',
    label: 'Number Input',
    placeholder: 'Number Input',
    type: 'number',
  },
}

export const Invalid: Story = {
  render: (args) => <Input {...args} />,
  args: {
    name: 'invalid',
    label: 'Invalid Input',
    placeholder: 'Invalid Input',
    isInvalid: true,
    error: 'This is an error message',
  },
}

export const WithIcon: Story = {
  render: (args) => <Input {...args} />,
  args: {
    name: 'withIcon',
    label: 'Input with Icon',
    textVariant: 'blue',
    placeholder: 'Input with Icon',
    icon: <AiFillWarning />,
  },
}

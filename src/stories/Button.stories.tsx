import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button/Button'
import { BsTrash } from 'react-icons/bs'
import { createSelectOptions } from '../utils/storybookUtils'
import { allButtonVariants } from '../components/Button/buttonTypes'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    style: {
      control: {
        type: 'object',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: createSelectOptions(allButtonVariants),
    },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    width: '120px',
  },
}

export const Disabled: Story = {
  args: {
    onClick: () => console.log('clicked'),
    children: 'Button',
    disabled: true,
    width: '120px',
  },
}

export const Outline: Story = {
  args: {
    onClick: () => console.log('clicked'),
    children: 'Button',
    variant: 'outline-primary',
    width: '120px',
  },
}

export const WithIcon: Story = {
  args: {
    onClick: () => console.log('clicked'),
    variant: 'outline-danger',
    className: 'd-flex gap-2 justify-content-center align-items-center px-2',
    children: (
      <>
        <BsTrash />
        Button
      </>
    ),
    width: '120px',
  },
}

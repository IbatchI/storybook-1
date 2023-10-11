import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '../components/Icon/Icon'
import { AiOutlineDownload, AiFillWarning } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const OutlineDownloadPrimary: Story = {
  args: {
    icon: AiOutlineDownload,
    variant: 'primary700',
    size: 30,
  },
}

export const TrashError: Story = {
  args: {
    icon: BsTrash,
    variant: 'error500',
    size: 30,
  },
}

export const FillWarning: Story = {
  args: {
    icon: AiFillWarning,
    variant: 'warning500',
    size: 30,
  },
}

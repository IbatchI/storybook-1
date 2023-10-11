import type { Meta, StoryObj } from '@storybook/react'
import { createSelectOptions } from '../utils/storybookUtils'
import { allTooltipPlacements } from '../components/Tooltip/tooltipTypes'
import { Tooltip } from '../components/Tooltip/Tooltip'
import { Button as CustomButton } from '../components/Button/Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Tooltip',
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    placement: {
      control: {
        type: 'select',
      },
      options: createSelectOptions(allTooltipPlacements),
    },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Text: Story = {
  args: {
    children: <p className='p-2'>Hover me</p>,
    placement: 'top',
    label: 'Tooltip text',
  },
}

export const Button: Story = {
  args: {
    children: (
      <CustomButton className='px-2' onClick={() => {}}>
        Hover me
      </CustomButton>
    ),
    placement: 'top',
    label: 'Tooltip text',
  },
}

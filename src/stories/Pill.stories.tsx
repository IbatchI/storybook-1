import type { Meta, StoryObj } from '@storybook/react'

import { Pill } from '../components/Pill/Pill'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Pill',
  component: Pill,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Pill>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    label: 'Tratado',
    bgVariant: 'info',
    textVariant: 'light',
  },
}

export const HighPriority: Story = {
  args: {
    label: 'Alta',
    bgVariant: 'light',
    textVariant: 'danger',
  },
}

export const MediumPriority: Story = {
  args: {
    label: 'Media',
    bgVariant: 'light',
    textVariant: 'warning',
  },
}

export const ErrorState: Story = {
  args: {
    label: 'Tratado',
    bgVariant: 'light',
    textVariant: 'success',
    state: 'error',
  },
}

export const TimeState: Story = {
  args: {
    label: 'Aceptada 4/5',
    bgVariant: 'info',
    textVariant: 'light',
    state: 'time',
  },
}

export const AcceptedState: Story = {
  args: {
    label: 'Recibida',
    bgVariant: 'light',
    textVariant: 'info',
    state: 'accepted',
  },
}

export const AcceptedTimeState: Story = {
  args: {
    label: 'Recibida',
    bgVariant: 'light',
    textVariant: 'info',
    state: ['time', 'accepted'],
  },
}

export const RejectedState: Story = {
  args: {
    label: 'Recibida',
    bgVariant: 'light',
    textVariant: 'info',
    state: 'rejected',
  },
}

export const RejectedTimeState: Story = {
  args: {
    label: 'Recibida',
    bgVariant: 'light',
    textVariant: 'info',
    state: ['time', 'rejected'],
  },
}

import type { Meta, StoryObj } from '@storybook/react-vite'

// import { fn } from 'storybook/test';

import { Voting } from '../Voting'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Vaultrice/Voting',
  component: Voting,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    credentials: {
      control: false
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },
} satisfies Meta<typeof Voting>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    id: 'voting1',
    title: 'Vote for our latest feature proposal',
    description: 'Every voice counts to get this component like you want it.',
    choices: [
      { id: 'op1', label: 'Create a render prop.' },
      { id: 'op2', label: 'Have a dark theme.' },
      { id: 'op3', label: <>I'm already <a href='https://www.vaultrice.com/' target='_blank' rel='noreferrer'>happy</a> with what <strong>I got</strong>.</> }
    ],
    credentials: {
      projectId: import.meta.env.VITE_VAULTRICE_PROJECTID,
      apiKey: import.meta.env.VITE_VAULTRICE_APIKEY,
      apiSecret: import.meta.env.VITE_VAULTRICE_APISECRET
    }
  },
}

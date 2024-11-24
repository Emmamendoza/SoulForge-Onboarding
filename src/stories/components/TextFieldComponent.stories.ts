import type { Meta, StoryObj } from '@storybook/react';
import { TextFieldComponent } from '../../components/TextFieldComponent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/TextFieldComponent',
  component: TextFieldComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextFieldComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Outlined: Story = {
  args: {
    id: 'outlined-id',
    variant: 'outlined',
    label: 'Outlined',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => console.log(`This is the value: ${event.target.value}`),
    placeholder: 'Type something'
  },
}

export const Filled: Story = {
  args: {
    id: 'filled-id',
    variant: 'filled',
    label: 'Filled',
    onChange: (event) => console.log(`This is the value: ${event.target.value}`)
  },
}

export const Standard: Story = {
    args: {
      id: 'standard-id',
      variant: 'standard',
      label: 'Standard',
      onChange: (event) => console.log(`This is the value: ${event.target.value}`)
    },
  }
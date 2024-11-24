import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../../components/ButtonComponent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof ButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Button',
    onClick: () => console.log('Clicked!!!!')
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    color: 'secondary',
    onClick: () => console.log('Clicked!!!!')
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
    onClick: () => console.log('Clicked!!!!')
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    onClick: () => console.log('Clicked!!!!')
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    label: "Button",
    onClick: () => console.log('Clicked!!!!')
  }
};

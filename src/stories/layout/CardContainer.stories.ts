import type { Meta, StoryObj } from '@storybook/react';
import { SecondContainer } from '../../layout/SecondContainer';
// import card1 from './../../assets/card1.jpeg';
// import card2 from './../../assets/card2.jpeg';
// import card3 from './../../assets/card3.jpeg';
// import card4 from './../../assets/card4.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Layouts/SecondContainer',
  component: SecondContainer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SecondContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {

    },
}
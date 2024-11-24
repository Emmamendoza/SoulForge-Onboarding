import type { Meta, StoryObj } from '@storybook/react';
import { NavbarComponent } from '../../components/NavbarComponent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/NavbarComponent',
  component: NavbarComponent,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NavbarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    pages:[{
        text: 'Docs',
        onClick: (id) => console.log('Clicking: ', id),
        id: 'Docs'
    }, {
        text: 'Contact', 
        onClick: (id) => console.log('Clicking: ', id),
        id: 'Contact'
    }, {
        text: 'About us', 
        onClick: (id) => console.log('Clicking: ', id),
        id: 'About us'
    }]
  },
}
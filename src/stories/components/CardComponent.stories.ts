import type { Meta, StoryObj } from '@storybook/react';
import { CardComponent } from '../../components/CardComponent';
import card1 from './../../assets/card1.jpeg';
import card2 from './../../assets/card2.jpeg';
import card3 from './../../assets/card3.jpeg';
import card4 from './../../assets/card4.jpeg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/CardComponent',
  component: CardComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// type Card = {
//     id: string;
//     image: string;
//     title: string
//     description?: string;
// };

// const cards: Card[] = [
//     {
//         id: "forest",
//         image: card1,
//         title: 'Forge Souls',
//         description: 'Every path you walk shapes the world you leave behind'
//     },
//     {
//         id: "giant",
//         image: card2,
//         title: 'Arcane Odyssey',
//         description: 'Embark on an epic quest through a realm of mystery and magic'
//     },
//     {
//         id: "dragon",
//         image: card3,
//         title: 'Veil of the Void',
//         description: 'Journey beyond the veil to uncover the secrets of creation'
//     },
//     {
//         id: "battle",
//         image: card4,
//         title: 'Shattered Kingdoms',
//         description: 'Unite the fractured realms and restore the ancient balance'
//     },

// ]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        id: "forest",
        image: card1,
        title: 'Forge Souls',
        description: 'Every path you walk shapes the world you leave behind'
    },
}

export const Default2: Story = {
    args: {
      id: "giant",
      image: card2,
      title: 'Arcane Odyssey',
      description: 'Embark on an epic quest through a realm of mystery and magic'
    }
}

export const Default3: Story = {
    args: {
        id: "dragon",
        image: card3,
        title: 'Veil of the Void',
        description: 'Journey beyond the veil to uncover the secrets of creation'
    }
}

export const Default4: Story = {
    args: {
        id: "battle",
        image: card4,
        title: 'Shattered Kingdoms',
        description: 'Unite the fractured realms and restore the ancient balance'
    }
}
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { 
      control: 'text',
      description: 'The main title of the card'
    },
    description: { 
      control: 'text',
      description: 'The description text inside the card'
    },
    imageUrl: { 
      control: 'text',
      description: 'URL for the top image of the card'
    },
    // Yahan hum explicitly bata rahe hain ki children ek text input hai
    children: { 
      control: 'text',
      description: 'Content inside the card (e.g., text or button)'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Awesome Product',
    description: 'This is a description of the product. Use the controls below to change this text live.',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
    children: 'Extra content here', // Default text set kar diya
  },
};
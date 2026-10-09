import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  // Yahan Phase 2 ke Controls add kiye gaye hain
  argTypes: {
    variant: { 
      control: 'radio', 
      options: ['primary', 'secondary', 'danger', 'outline'],
      description: 'Choose the visual style of the button'
    },
    size: { 
      control: 'radio', 
      options: ['small', 'medium', 'large'],
      description: 'Choose the size of the button'
    },
    disabled: { 
      control: 'boolean',
      description: 'Toggle button disabled state'
    },
    children: { 
      control: 'text',
      description: 'Text inside the button'
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Not Allowed',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Action',
    className: 'bg-gray-500 hover:bg-gray-600 text-white',
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete Data',
    className: 'bg-red-600 hover:bg-red-700 text-white',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    className: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  },
};
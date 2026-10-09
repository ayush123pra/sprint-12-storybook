import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { 
      control: 'text',
      description: 'The label displayed above the input' 
    },
    placeholder: { 
      control: 'text',
      description: 'Placeholder text inside the input' 
    },
    disabled: { 
      control: 'boolean',
      description: 'Toggles the disabled state' 
    },
    value: { 
      control: 'text',
      description: 'The current value of the input' 
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter text here...',
    disabled: false,
  },
};
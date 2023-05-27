import { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    width: 24,
    height: 24,
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Mail: Story = {
  args: {
    icon: 'mail',
  },
};

export const Briefcase: Story = {
  args: {
    icon: 'briefcase',
  },
};

export const ArrowDown: Story = {
  args: {
    icon: 'arrowDown',
  },
};
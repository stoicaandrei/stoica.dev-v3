import avatarImage from '@/images/avatar.jpg';
import { Avatar } from './Avatar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: avatarImage,
    alt: 'Avatar',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const DefaultBordered: Story = {
  args: {
    bordered: true,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const LargeBordered: Story = {
  args: {
    size: 'large',
    bordered: true,
  },
};

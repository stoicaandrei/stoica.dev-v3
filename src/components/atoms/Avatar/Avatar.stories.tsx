import avatarImage from '@/images/avatar.jpg';
import { Avatar } from './Avatar';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: avatarImage,
    alt: 'Avatar',
  },
};

export const Large: Story = {
  args: {
    src: avatarImage,
    alt: 'Avatar',
    size: 'large',
  },
};

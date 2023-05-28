import { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};

export const HighlightAvatar: Story = {
  args: {
    highlightAvatar: true,
    style: { height: '500px' },
  },
};

export const Active: Story = {
  args: {
    activePath: '/about',
  },
};

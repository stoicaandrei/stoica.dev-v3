import { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Organisms/Navigation',
  component: Navigation,
  args: {
    items: [
      { href: '/', label: 'Home' },
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    activePath: '/',
  },
};

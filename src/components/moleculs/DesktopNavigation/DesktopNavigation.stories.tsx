import { Meta, StoryObj } from '@storybook/react';
import { DesktopNavigation } from './DesktopNavigation';

const meta: Meta<typeof DesktopNavigation> = {
  title: 'Organisms/DesktopNavigation',
  component: DesktopNavigation,
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
type Story = StoryObj<typeof DesktopNavigation>;

export const Default: Story = {
  args: {},
};

export const Active: Story = {
  args: {
    activePath: '/',
  },
};

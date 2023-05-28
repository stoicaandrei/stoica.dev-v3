import { Meta, StoryObj } from '@storybook/react';
import { MobileNavigation } from './MobileNavigation';

const meta: Meta<typeof MobileNavigation> = {
  title: 'Organisms/MobileNavigation',
  component: MobileNavigation,
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
type Story = StoryObj<typeof MobileNavigation>;

export const Default: Story = {
  args: {},
};

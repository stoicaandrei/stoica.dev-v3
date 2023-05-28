import { Meta, StoryObj } from '@storybook/react';
import { GithubIcon } from './icons';

const meta: Meta<typeof GithubIcon> = {
  title: 'Atoms/Icon',
  component: GithubIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof GithubIcon>;

export const Default: Story = {
  args: {},
};

export const Clickable: Story = {
  args: {
    clickable: true,
  },
};

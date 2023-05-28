import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Atoms/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  args: {
    style: {
        width: '100px',
    },
    children: 'NavItem',
  }
}

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
    args: {
    }
}

export const Active: Story = {
    args: {
        active: true,
        style: {
            width: '100px',
        }
    }
}
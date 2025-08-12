import type { Meta, StoryObj } from '@storybook/react';
import CategoryNav from './CategoryNav';

const meta: Meta<typeof CategoryNav> = {
  title: 'Components/CategoryNav',
  component: CategoryNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
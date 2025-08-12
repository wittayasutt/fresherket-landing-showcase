import type { Meta, StoryObj } from '@storybook/react';
import HotDealsSection from './HotDealsSection';

const meta: Meta<typeof HotDealsSection> = {
  title: 'Components/HotDealsSection',
  component: HotDealsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
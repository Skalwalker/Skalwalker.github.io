import type { Meta, StoryObj } from '@storybook/react';

import { LikeDesc } from '../../../src/components/about/LikeDesc';

const meta: Meta<typeof LikeDesc> = {
  title: 'About/LikeDesc',
  component: LikeDesc,
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'Coffee',
  },
};

export default meta;

type Story = StoryObj<typeof LikeDesc>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';

import { LikeDesc } from '../../../src/components/about/LikeDesc';
import { likeContent } from '../../../src/content';

const titleOptions = likeContent.map((item) => item.title);

const meta: Meta<typeof LikeDesc> = {
  title: 'About/LikeDesc',
  component: LikeDesc,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: 'select',
      options: titleOptions,
      description: 'The label shown beneath the like icon',
    },
  },
  args: {
    text: titleOptions[0],
  },
};

export default meta;

type Story = StoryObj<typeof LikeDesc>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';

import { LikeIcon } from '../../../src/components/about/LikeIcon';
import { likeContent } from '../../../src/content';

const iconOptions = Array.from(new Set(likeContent.map((item) => item.img)));

const meta: Meta<typeof LikeIcon> = {
  title: 'About/LikeIcon',
  component: LikeIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    img: {
      control: 'select',
      options: iconOptions,
    },
  },
  args: {
    img: iconOptions[0] ?? 'coffee',
  },
};

export default meta;

type Story = StoryObj<typeof LikeIcon>;

export const Default: Story = {};

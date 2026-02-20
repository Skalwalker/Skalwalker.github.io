import type { Meta, StoryObj } from '@storybook/react';

import { AchievDesc } from '../../../src/components/achievements/AchievDesc';
import { achievList } from '../../../src/content';

const meta: Meta<typeof AchievDesc> = {
  title: 'Achievements/AchievDesc',
  component: AchievDesc,
  parameters: {
    layout: 'centered',
  },
  args: {
    content: achievList[0],
  },
};

export default meta;

type Story = StoryObj<typeof AchievDesc>;

export const Default: Story = {};

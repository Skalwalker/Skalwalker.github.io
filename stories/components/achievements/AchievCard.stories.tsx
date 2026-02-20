import type { Meta, StoryObj } from '@storybook/react';

import { AchievCard } from '../../../src/components/achievements/AchievCard';
import { achievList } from '../../../src/content';

const iconOptions = Array.from(new Set(achievList.map((item) => item.img)));
const defaultAchievement = achievList[0];

const meta: Meta<typeof AchievCard> = {
  title: 'Achievements/AchievCard',
  component: AchievCard,
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
    title: defaultAchievement?.title ?? 'Graduate',
    date: defaultAchievement?.earned ?? 'Earned in 2020',
    img: defaultAchievement?.img ?? 'graduate',
    locked: defaultAchievement?.locked ?? false,
  },
};

export default meta;

type Story = StoryObj<typeof AchievCard>;

export const Default: Story = {};

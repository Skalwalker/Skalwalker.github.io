import type { Meta, StoryObj } from '@storybook/react';

import { AchievCard } from '../../../src/components/achievements/AchievCard';
import { achievList } from '../../../src/content';

const iconOptions = Array.from(new Set(achievList.map((item) => item.img)));
const unlockedAchievement = achievList.find((item) => !item.locked) ?? achievList[0];
const lockedAchievement = achievList.find((item) => item.locked) ?? achievList[0];

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
    title: unlockedAchievement.title,
    date: unlockedAchievement.earned,
    img: unlockedAchievement.img,
    locked: unlockedAchievement.locked,
  },
};

export default meta;

type Story = StoryObj<typeof AchievCard>;

export const Unlocked: Story = {};

export const Locked: Story = {
  args: {
    title: lockedAchievement.title,
    date: lockedAchievement.earned,
    img: lockedAchievement.img,
    locked: true,
  },
};

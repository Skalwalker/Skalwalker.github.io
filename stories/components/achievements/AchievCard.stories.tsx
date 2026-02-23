import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

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

const getCardOpacity = (canvasElement: HTMLElement): string => {
  const card = canvasElement.querySelector('.click_cards');
  if (card === null) return '';
  return window.getComputedStyle(card).opacity;
};

export const Unlocked: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(args.title)).toBeInTheDocument();
    await expect(canvas.getByText(args.date)).toBeInTheDocument();
    await expect(getCardOpacity(canvasElement)).toBe('1');
  },
};

export const Locked: Story = {
  args: {
    title: lockedAchievement.title,
    date: lockedAchievement.earned,
    img: lockedAchievement.img,
    locked: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Achievement Locked')).toBeInTheDocument();
    await expect(getCardOpacity(canvasElement)).toBe('0.5');
  },
};

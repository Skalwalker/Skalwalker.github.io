import type { Meta, StoryObj } from '@storybook/react';

import { AchievDescModal } from '../../../src/components/achievements/AchievDescModal';
import { achievList } from '../../../src/content';

const meta: Meta<typeof AchievDescModal> = {
  title: 'Achievements/AchievDescModal',
  component: AchievDescModal,
  parameters: {
    layout: 'centered',
  },
  args: {
    content: achievList[0],
    callback: (): void => undefined,
  },
};

export default meta;

type Story = StoryObj<typeof AchievDescModal>;

export const Default: Story = {};

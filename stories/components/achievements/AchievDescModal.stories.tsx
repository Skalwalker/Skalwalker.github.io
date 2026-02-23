import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { AchievDescModal } from '../../../src/components/achievements/AchievDescModal';
import { achievList } from '../../../src/content';

const meta: Meta<typeof AchievDescModal> = {
  title: 'Achievements/AchievDescModal',
  component: AchievDescModal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    callback: { description: 'Called when the modal is dismissed' },
  },
  args: {
    content: achievList[0],
    callback: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof AchievDescModal>;

export const Default: Story = {};

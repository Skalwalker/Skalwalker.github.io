import type { Meta, StoryObj } from '@storybook/react';
import { expect, fn, userEvent, within } from 'storybook/test';

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

export const Default: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
  play: async ({ args }) => {
    const body = within(document.body);
    await expect(body.getByText(achievList[0].title)).toBeInTheDocument();
    await expect(body.getByText(achievList[0].desc)).toBeInTheDocument();
    await userEvent.click(body.getByRole('button', { name: /close/i, hidden: true }));
    await expect(args.callback).toHaveBeenCalledOnce();
  },
};

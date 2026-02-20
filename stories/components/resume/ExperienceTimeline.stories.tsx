import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { ExperienceTimeline } from '../../../src/components/resume/VerticalTimeLine';

const meta: Meta<typeof ExperienceTimeline> = {
  title: 'Resume/ExperienceTimeline',
  component: ExperienceTimeline,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ExperienceTimeline>;

export const Default: Story = {
  render: (): JSX.Element => (
    <div style={{ padding: '24px' }}>
      <ExperienceTimeline />
    </div>
  ),
};

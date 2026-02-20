import type { Meta, StoryObj } from '@storybook/react';

import { ProjectFooter } from '../../../src/components/projects/ProjectFooter';

const meta: Meta<typeof ProjectFooter> = {
  title: 'Projects/ProjectFooter',
  component: ProjectFooter,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    footer: [
      {
        heading: 'Role',
        desc: 'ML Engineer',
      },
      {
        heading: 'Duration',
        desc: 'Jan 2022 - Jun 2022',
      },
      {
        heading: 'Highlights',
        desc: 'CNN baseline, MFCC features, and robust validation pipeline.',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof ProjectFooter>;

export const Default: Story = {};

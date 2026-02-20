import type { Meta, StoryObj } from '@storybook/react';

import { PaperCard } from '../../../src/components/papers/PaperCard';

const meta: Meta<typeof PaperCard> = {
  title: 'Papers/PaperCard',
  component: PaperCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'AURORA: An Autonomous Agent-Orientated Hybrid Trading Service',
    url: 'https://rdcu.be/cysdA',
    publisher: 'Neural Computing and Applications - Springer',
    year: '2022',
  },
};

export default meta;

type Story = StoryObj<typeof PaperCard>;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

import { PaperCard } from '../../../src/components/papers/PaperCard';

const meta: Meta<typeof PaperCard> = {
  title: 'Papers/PaperCard',
  component: PaperCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { description: 'Paper title shown as the card heading' },
    publisher: { description: 'Journal or venue name' },
    year: { description: 'Publication year' },
    url: { description: 'Link to the paper (opens in a new tab)' },
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

export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link');
    await expect(link).toHaveAttribute('href', args.url);
    await expect(link).toHaveAttribute('target', '_blank');
  },
};

export const LongTitle: Story = {
  args: {
    title:
      'A Very Long Paper Title That Evaluates How the Card Handles Text Overflow Across Multiple Lines of Content',
    publisher: 'Neural Computing and Applications - Springer',
    year: '2022',
    url: 'https://rdcu.be/cysdA',
  },
};

export const ShortTitle: Story = {
  args: {
    title: 'Deep Learning',
    publisher: 'Nature',
    year: '2015',
    url: 'https://rdcu.be/cysdA',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { PaperCardShort } from '../../../src/components/papers/PaperCardShort';

const meta: Meta<typeof PaperCardShort> = {
  title: 'Papers/PaperCardShort',
  component: PaperCardShort,
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
    title: 'PyEcosampling Whitepaper: Ecological Sampling of Gaze Shift in Python',
    url: 'https://drive.google.com/file/d/1zypysCialnEkX04R1ExY0FmDJ9Jg6HyD/view?usp=sharing',
    publisher: 'M.Sc. Course Report',
    year: '2022',
  },
};

export default meta;

type Story = StoryObj<typeof PaperCardShort>;

export const Default: Story = {};

export const LongTitle: Story = {
  args: {
    title:
      'A Very Long Paper Title That Evaluates How the Card Handles Text Overflow Across Multiple Lines of Content',
    publisher: 'M.Sc. Course Report',
    year: '2022',
    url: 'https://drive.google.com/file/d/1zypysCialnEkX04R1ExY0FmDJ9Jg6HyD/view?usp=sharing',
  },
};

export const ShortTitle: Story = {
  args: {
    title: 'Deep Learning',
    publisher: 'Nature',
    year: '2015',
    url: 'https://drive.google.com/file/d/1zypysCialnEkX04R1ExY0FmDJ9Jg6HyD/view?usp=sharing',
  },
};

import type { Meta, StoryObj } from '@storybook/react';

import { PaperCardShort } from '../../../src/components/papers/PaperCardShort';

const meta: Meta<typeof PaperCardShort> = {
  title: 'Papers/PaperCardShort',
  component: PaperCardShort,
  parameters: {
    layout: 'centered',
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

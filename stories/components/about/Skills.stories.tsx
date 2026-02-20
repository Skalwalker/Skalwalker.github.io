import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { Skills } from '../../../src/components/about/Skills';

const meta: Meta<typeof Skills> = {
  title: 'About/Skills',
  component: Skills,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Skills>;

export const Default: Story = {
  render: (): JSX.Element => (
    <div style={{ minHeight: '100vh' }}>
      <Skills />
    </div>
  ),
};

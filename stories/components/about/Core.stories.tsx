import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { Core } from '../../../src/components/about/Core';

const meta: Meta<typeof Core> = {
  title: 'About/Core',
  component: Core,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Core>;

export const Default: Story = {
  render: (): JSX.Element => (
    <div style={{ minHeight: '100vh' }}>
      <Core />
    </div>
  ),
};

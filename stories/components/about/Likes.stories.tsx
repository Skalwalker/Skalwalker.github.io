import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { Likes } from '../../../src/components/about/Likes';

const meta: Meta<typeof Likes> = {
  title: 'About/Likes',
  component: Likes,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Likes>;

export const Default: Story = {
  render: (): JSX.Element => (
    <div style={{ minHeight: '100vh' }}>
      <Likes />
    </div>
  ),
};

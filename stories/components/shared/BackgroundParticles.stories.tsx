import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps, JSX } from 'react';

import { BackgroundParticles } from '../../../src/components/shared/BackgroundParticles';

const meta: Meta<typeof BackgroundParticles> = {
  title: 'Shared/BackgroundParticles',
  component: BackgroundParticles,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    id: { control: 'text' },
  },
  args: {
    id: 'storybook-particles',
  },
};

export default meta;

type Story = StoryObj<typeof BackgroundParticles>;

export const Default: Story = {
  render: (args: ComponentProps<typeof BackgroundParticles>): JSX.Element => (
    <div style={{ height: '60vh' }}>
      <BackgroundParticles {...args} />
    </div>
  ),
};

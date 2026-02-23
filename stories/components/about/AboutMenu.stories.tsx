import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { AboutMenu } from '../../../src/components/about/AboutMenu';

const meta: Meta<typeof AboutMenu> = {
  title: 'About/AboutMenu',
  component: AboutMenu,
  parameters: {
    layout: 'centered',
    memoryRouter: { initialEntries: ['/about'] },
  },
};

export default meta;

type Story = StoryObj<typeof AboutMenu>;

export const Default: Story = {
  render: (): JSX.Element => (
    <div style={{ width: '280px' }}>
      <AboutMenu />
    </div>
  ),
};

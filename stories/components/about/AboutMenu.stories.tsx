import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';
import { MemoryRouter } from 'react-router';

import { AboutMenu } from '../../../src/components/about/AboutMenu';

const meta: Meta<typeof AboutMenu> = {
  title: 'About/AboutMenu',
  component: AboutMenu,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof AboutMenu>;

export const Default: Story = {
  render: (): JSX.Element => (
    <MemoryRouter initialEntries={['/about']}>
      <div style={{ width: '280px' }}>
        <AboutMenu />
      </div>
    </MemoryRouter>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';
import { MemoryRouter } from 'react-router';

import { NavBar } from '../../../src/components/shared/NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'Shared/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  render: (): JSX.Element => (
    <MemoryRouter initialEntries={['/projects']}>
      <NavBar />
    </MemoryRouter>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';

import { NavBar } from '../../../src/components/shared/NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'Shared/NavBar',
  component: NavBar,
  parameters: {
    layout: 'fullscreen',
    memoryRouter: { initialEntries: ['/projects'] },
  },
};

export default meta;

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {};

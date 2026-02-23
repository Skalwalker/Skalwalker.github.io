import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { AboutMenu } from '../../../src/components/about/AboutMenu';

const withMenuWrapper = (): JSX.Element => (
  <div style={{ width: '280px' }}>
    <AboutMenu />
  </div>
);

const meta: Meta<typeof AboutMenu> = {
  title: 'About/AboutMenu',
  component: AboutMenu,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof AboutMenu>;

export const CoreActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/about'] },
  },
  render: withMenuWrapper,
};

export const SkillsActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/about/skills'] },
  },
  render: withMenuWrapper,
};

export const LikesActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/about/likes'] },
  },
  render: withMenuWrapper,
};

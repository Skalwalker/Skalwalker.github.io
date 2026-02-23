import type { Meta, StoryObj } from '@storybook/react';

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

export const AboutActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/about'] },
  },
};

export const ProjectsActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/projects'] },
  },
};

export const ExperienceActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/experience'] },
  },
};

export const AchievementsActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/achievements'] },
  },
};

export const PublicationsActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/publications'] },
  },
};

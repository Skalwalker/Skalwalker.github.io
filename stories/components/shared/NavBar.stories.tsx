import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from 'storybook/test';

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'About' });
    await expect(link.style.fontWeight).toBe('bold');
  },
};

export const ProjectsActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/projects'] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'Projects' });
    await expect(link.style.fontWeight).toBe('bold');
  },
};

export const ExperienceActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/experience'] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'Experience' });
    await expect(link.style.fontWeight).toBe('bold');
  },
};

export const AchievementsActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/achievements'] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'Achievements' });
    await expect(link.style.fontWeight).toBe('bold');
  },
};

export const PublicationsActive: Story = {
  parameters: {
    memoryRouter: { initialEntries: ['/publications'] },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'Publications' });
    await expect(link.style.fontWeight).toBe('bold');
  },
};

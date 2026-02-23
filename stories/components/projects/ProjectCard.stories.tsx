import type { Meta, StoryObj } from '@storybook/react';

import { ProjectCard } from '../../../src/components/projects/ProjectCard';
import type { ProjectCardInfo } from '../../../src/components/projects/types';

const internalProject: ProjectCardInfo = {
  title: 'COVID-19 Detection',
  banner: '/img/covid19.png',
  headline: "Detecting COVID-19 in audio tracks from patients' coughs with CNNs.",
  language: 'Python',
  year: '2022',
  url: '/projects/covid_19',
  target: '',
};

const externalProject: ProjectCardInfo = {
  title: 'Portfolio',
  banner: '/img/portfolio.png',
  headline: 'This website built with React, Bootstrap, and TypeScript.',
  language: 'JavaScript',
  year: '2022',
  url: 'https://github.com/Skalwalker/Skalwalker.github.io',
  target: '_blank',
};

const meta: Meta<typeof ProjectCard> = {
  title: 'Projects/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

export const Internal: Story = {
  args: {
    project: internalProject,
  },
};

export const External: Story = {
  args: {
    project: externalProject,
  },
};

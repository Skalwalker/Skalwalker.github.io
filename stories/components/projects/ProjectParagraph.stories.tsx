import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { ProjectParagraph } from '../../../src/components/projects/ProjectParagraph';

const meta: Meta<typeof ProjectParagraph> = {
  title: 'Projects/ProjectParagraph',
  component: ProjectParagraph,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ProjectParagraph>;

export const Default: Story = {
  render: (): JSX.Element => (
    <ProjectParagraph>
      A reusable paragraph component for project narratives, tuned for readability in long-form
      sections.
    </ProjectParagraph>
  ),
};

import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { ProjectParagraph } from '../../../src/components/projects/ProjectParagraph';
import { ProjectSection } from '../../../src/components/projects/ProjectSection';

const meta: Meta<typeof ProjectSection> = {
  title: 'Projects/ProjectSection',
  component: ProjectSection,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Overview',
    id: 'overview',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof ProjectSection>;

export const Default: Story = {
  render: (args): JSX.Element => (
    <ProjectSection {...args}>
      <ProjectParagraph>
        Sections group headings and content into a consistent layout for project pages.
      </ProjectParagraph>
    </ProjectSection>
  ),
};

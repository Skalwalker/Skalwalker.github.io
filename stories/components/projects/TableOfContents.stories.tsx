import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { ProjectParagraph } from '../../../src/components/projects/ProjectParagraph';
import { ProjectSection } from '../../../src/components/projects/ProjectSection';
import { TableOfContents } from '../../../src/components/projects/TableofContents';

const TableOfContentsStory = (): JSX.Element => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: '32px',
      minHeight: '70vh',
      padding: '24px',
    }}
  >
    <TableOfContents />
    <div>
      <ProjectSection id="overview" title="Overview" variant="first">
        <ProjectParagraph>
          A concise description of the project scope and the key problem being tackled.
        </ProjectParagraph>
      </ProjectSection>
      <ProjectSection id="approach" title="Approach">
        <ProjectParagraph>
          Highlights the methodology, datasets, and evaluation process used in the project.
        </ProjectParagraph>
      </ProjectSection>
      <ProjectSection id="results" title="Results">
        <ProjectParagraph>
          Summarizes outcomes, metrics, and insights discovered during experimentation.
        </ProjectParagraph>
      </ProjectSection>
    </div>
  </div>
);

const meta: Meta<typeof TableOfContents> = {
  title: 'Projects/TableOfContents',
  component: TableOfContents,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof TableOfContents>;

export const Default: Story = {
  render: (): JSX.Element => <TableOfContentsStory />,
};

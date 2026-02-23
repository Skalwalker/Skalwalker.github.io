import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';
import { Row } from 'react-bootstrap';

import { ProjectHeader } from '../../../src/components/projects/ProjectHeader';
import type { ProjectInfo } from '../../../src/components/projects/types';

const sampleProject: ProjectInfo = {
  title: 'COVID-19 Detection',
  banner: '/img/covid19.png',
  abstract:
    "I've trained CNN and SVM models to produce prescreening COVID-19 detection using only the patient's cough.",
  skills: 'Audio Processing, Machine Learning, MFCCs, Python',
  codeUrl: 'https://github.com/Skalwalker/C19-Audit',
  paperUrl: 'https://drive.google.com/file/d/1pq3GrozIeHavHbMS2vEDlmYOwQbJ91an/view',
};

const meta: Meta<typeof ProjectHeader> = {
  title: 'Projects/ProjectHeader',
  component: ProjectHeader,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    project: sampleProject,
  },
};

export default meta;

type Story = StoryObj<typeof ProjectHeader>;

const withRow = (args: { project: ProjectInfo }): JSX.Element => (
  <Row className="align-items-center">
    <ProjectHeader {...args} />
  </Row>
);

export const WithBothLinks: Story = {
  render: withRow,
};

export const CodeOnly: Story = {
  args: {
    project: { ...sampleProject, paperUrl: '' },
  },
  render: withRow,
};

export const PaperOnly: Story = {
  args: {
    project: { ...sampleProject, codeUrl: '' },
  },
  render: withRow,
};

export const NoLinks: Story = {
  args: {
    project: { ...sampleProject, codeUrl: '', paperUrl: '' },
  },
  render: withRow,
};

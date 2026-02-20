import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { ProjectPageContainer } from '../../../src/components/projects/ProjectPageContainer';
import { ProjectParagraph } from '../../../src/components/projects/ProjectParagraph';
import { ProjectSection } from '../../../src/components/projects/ProjectSection';
import type { FooterSectionType, ProjectInfo } from '../../../src/components/projects/types';

const sampleProject: ProjectInfo = {
  title: 'Global Warming Simulation',
  banner: '/img/globalwarming2.png',
  abstract:
    'A simulation study on CO2 emissions and deforestation impact on global temperature trends.',
  skills: 'Agent-based Simulations, Anylogic, Monte Carlo',
  codeUrl:
    'https://cloud.anylogic.com/model/ba6ea900-9637-4817-a172-226847603ebf?mode=SETTINGS&tab=GENERAL',
  paperUrl: 'https://drive.google.com/file/d/1ZRBn_5ddMIygHjv697twuZtW5BbO9Cr5/view',
};

const footer: FooterSectionType[] = [
  {
    heading: 'Role',
    desc: 'Simulation Designer',
  },
  {
    heading: 'Stack',
    desc: 'Anylogic, System Dynamics',
  },
];

const ProjectPageStory = (): JSX.Element => (
  <ProjectPageContainer project={sampleProject} footer={footer}>
    <ProjectSection id="overview" title="Overview" variant="first">
      <ProjectParagraph>
        A scenario-driven model that explores long-term effects of CO2 emissions and forest loss.
      </ProjectParagraph>
    </ProjectSection>
    <ProjectSection id="method" title="Method">
      <ProjectParagraph>
        The simulation combines agent-based behaviors with system dynamics to extrapolate outcomes.
      </ProjectParagraph>
    </ProjectSection>
    <ProjectSection id="results" title="Results">
      <ProjectParagraph>
        The model predicts a steady temperature increase reaching the 2°C threshold around 2064.
      </ProjectParagraph>
    </ProjectSection>
  </ProjectPageContainer>
);

const meta: Meta<typeof ProjectPageContainer> = {
  title: 'Projects/ProjectPageContainer',
  component: ProjectPageContainer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ProjectPageContainer>;

export const Default: Story = {
  render: (): JSX.Element => <ProjectPageStory />,
};

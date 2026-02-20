import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';

import { BackButton } from '../../../src/components/';

const meta: Meta<typeof BackButton> = {
  title: 'Shared/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  render: (): JSX.Element => <BackButton />,
};

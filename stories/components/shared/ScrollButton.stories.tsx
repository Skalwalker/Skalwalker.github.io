import type { Meta, StoryObj } from '@storybook/react';
import type { JSX } from 'react';
import { useEffect } from 'react';

import { ScrollButton } from '../../../src/components/shared/ScrollButton';

const meta: Meta<typeof ScrollButton> = {
  title: 'Shared/ScrollButton',
  component: ScrollButton,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof ScrollButton>;

const ScrollButtonStory = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo({ top: 400 });
    window.dispatchEvent(new Event('scroll'));

    return (): void => {
      window.scrollTo({ top: 0 });
      window.dispatchEvent(new Event('scroll'));
    };
  }, []);

  return (
    <div style={{ height: '200vh', padding: '2rem' }}>
      <p>Scroll down to see the button.</p>
      <div style={{ marginTop: '150vh' }}>Bottom of the page</div>
      <ScrollButton />
    </div>
  );
};

export const Default: Story = {
  render: (): JSX.Element => <ScrollButtonStory />,
};

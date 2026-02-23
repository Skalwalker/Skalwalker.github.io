import type { Decorator, Preview } from '@storybook/react';
import type { JSX } from 'react';
import { MemoryRouter } from 'react-router';
import '../src/assets/css/theme.scss';
import './preview.css';

interface MemoryRouterParameters {
  initialEntries?: string[];
}

const withMemoryRouter: Decorator = (fn, context): JSX.Element => {
  const Story = fn;
  const routerParams = context.parameters.memoryRouter as MemoryRouterParameters | undefined;
  const initialEntries = routerParams?.initialEntries ?? ['/'];
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Story />
    </MemoryRouter>
  );
};

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [withMemoryRouter],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: '#070e20' },
        { name: 'white', value: '#ffffff' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile (375px)',
          styles: { width: '375px', height: '812px' },
        },
        tablet: {
          name: 'Tablet (768px)',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop (1440px)',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
  },
};

export default preview;

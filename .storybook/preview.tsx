import { Preview } from '@storybook/react';
import '../src/assets/css/theme.scss';
import './preview.css';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default preview;

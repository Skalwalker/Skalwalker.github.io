import React from 'react';

import { Paragraph } from '../../styles/primitives';

export const ProjectParagraph = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => (
  <Paragraph className="mt-2" style={style.paragraphStyle}>
    {children}
  </Paragraph>
);

const style = {
  paragraphStyle: {
    fontSize: '16px',
    lineHeight: 1.6,
  },
};

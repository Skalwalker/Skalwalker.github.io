import React from 'react';
import { Row } from 'react-bootstrap';

import { SubtitleBold } from '../../styles/primitives';

interface ProjectSectionProps {
  title: string;
  id: string;
  variant?: 'first' | 'default';
  children: React.ReactNode;
}

const variantClassNames = {
  first: 'mb-2',
  default: 'mt-4 mb-2',
};

export const ProjectSection = ({
  title,
  id,
  variant,
  children,
}: ProjectSectionProps): React.JSX.Element => (
  <Row id={id}>
    <SubtitleBold
      as="h2"
      id={id}
      className={variantClassNames[variant ?? 'default']}
      style={style.headerStyle}
    >
      {title}
    </SubtitleBold>
    {children}
  </Row>
);

const style = {
  headerStyle: {
    fontSize: '30px',
    color: '#60D7F9',
  },
  paragraphStyle: {
    fontSize: '16px',
  },
};

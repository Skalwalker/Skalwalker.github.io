import React from 'react';
import { Row } from 'react-bootstrap';

import '../../assets/css/font.css';

interface ProjectSectionProps {
  title: string;
  id: string;
  variant?: 'first' | 'default';
  children: React.ReactNode;
}

const variantClassNames = {
  first: 'subtitle_bold mb-2',
  default: 'subtitle_bold mt-4 mb-2',
};

export const ProjectSection = ({
  title,
  id,
  variant,
  children,
}: ProjectSectionProps): React.JSX.Element => (
  <Row id={id}>
    <h2 id={id} className={variantClassNames[variant ?? 'default']} style={style.headerStyle}>
      {title}
    </h2>
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

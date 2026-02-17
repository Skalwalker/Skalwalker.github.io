import React from 'react';

import '../../assets/css/font.css';


export const ProjectParagraph = ({ children }: { children: React.ReactNode }): React.JSX.Element => (
  <p className="paragraph mt-2" style={style.paragraph_style}>
    {children}
  </p>
);

const style = {
  paragraph_style: {
    fontSize: '16px',
    lineHeight: 1.6,
  },
};
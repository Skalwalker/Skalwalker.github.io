import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import { FooterSectionType } from './types';
import { Paragraph } from '../../styles/primitives';

const FooterSection = ({ heading, desc }: FooterSectionType): React.JSX.Element => (
  <FooterRow className="mt-4 mb-1 pt-2 ms-1 me-1">
    <FooterHeadingCol xl={3} className="ps-0">
      {heading}
    </FooterHeadingCol>
    <FooterDescCol xl={9} className="ps-0">
      {desc}
    </FooterDescCol>
  </FooterRow>
);

export const ProjectFooter = ({ footer }: { footer: FooterSectionType[] }): React.JSX.Element => (
  <FooterParagraph as="div" className="ms-2 me-4">
    {footer.map((sec) => (
      <FooterSection key={sec.heading} heading={sec.heading} desc={sec.desc} />
    ))}
    <Row className="mt-5 mb-5 pt-5"></Row>
  </FooterParagraph>
);

const FooterRow = styled(Row)`
  border-top: solid;
  border-width: 1px;
  border-color: var(--bs-primary);
`;

const FooterHeadingCol = styled(Col)`
  font-size: 14px;
`;

const FooterDescCol = styled(Col)`
  white-space: pre-wrap;
  font-size: 14px;
`;

const FooterParagraph = styled(Paragraph)`
  color: rgba(var(--bs-primary-rgb), 1);
`;

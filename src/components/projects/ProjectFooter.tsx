import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FooterSectionType } from './types';

import '../../assets/css/font.css';

const FooterSection = ({ heading, desc }: FooterSectionType): React.JSX.Element => (
  <Row
    className="mt-4 mb-1 pt-2 ms-1 me-1"
    style={{ borderTop: 'solid', borderWidth: '1px', borderColor: 'var(--bs-primary)' }}
  >
    <Col xl={3} className="ps-0" style={{ fontSize: '14px' }}>
      {heading}
    </Col>
    <Col xl={9} className="ps-0" style={{ whiteSpace: 'pre-wrap', fontSize: '14px' }}>
      {desc}
    </Col>
  </Row>
);

export const ProjectFooter = ({ footer }: { footer: FooterSectionType[] }): React.JSX.Element => (
  <div className="paragraph ms-2 me-4" style={{ color: 'rgba(var(--bs-primary-rgb),1.0)' }}>
    {footer.map((sec, _index) => (
      <FooterSection heading={sec.heading} desc={sec.desc} />
    ))}
    <Row className="mt-5 mb-5 pt-5"></Row>
  </div>
);

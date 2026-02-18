import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { PaperCardProps } from './types';
import { StyledCard } from '../../components';

export const PaperCardShort = ({
  title,
  url,
  publisher,
  year,
}: PaperCardProps): React.JSX.Element => {
  return (
    <a href={url} style={{ width: '100%' }} target="_blank" rel="noopener noreferrer">
      <StyledCard className="click_cards">
        <Card.Body style={{ padding: '0.8rem' }}>
          <Card.Text className="mb-0 mt-0 paragraph_bold" style={{ color: 'white' }}>
            <Row>
              <Col xl={10} md={9} xs={9} style={{ textAlign: 'left' }}>
                {title}
              </Col>
              <Col xl={2} md={3} xs={3} style={{ textAlign: 'right' }}>
                {year}
              </Col>
            </Row>
          </Card.Text>
          <Card.Subtitle className="subtitle mt-2" style={{ marginTop: '0' }}>
            {publisher}
          </Card.Subtitle>
        </Card.Body>
      </StyledCard>
    </a>
  );
};

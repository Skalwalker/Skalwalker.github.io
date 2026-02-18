import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { PaperCardProps } from './types';
import { StyledCard } from '../../components';

export const PaperCard = ({ title, url, publisher, year }: PaperCardProps): React.JSX.Element => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <StyledCard className="click_cards" style={{ height: '100%' }}>
        <Card.Body style={{ padding: '0.8rem' }}>
          <Card.Text className="mt-2 subtitle_bold" style={{ color: 'white' }}>
            {title}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="subtitle">
          <Row>
            <Col xl={10} md={8} sm={6} xs={6} style={{ alignSelf: 'left' }}>
              {publisher}
            </Col>
            <Col xl={2} md={4} sm={6} xs={6} style={{ textAlign: 'right' }}>
              {year}
            </Col>
          </Row>
        </Card.Footer>
      </StyledCard>
    </a>
  );
};

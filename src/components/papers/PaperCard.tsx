import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { PaperCardProps } from './types';
import { StyledCard } from '../../components';
import { SubtitleBold, Subtitle } from '../../styles/primitives';

export const PaperCard = ({ title, url, publisher, year }: PaperCardProps): React.JSX.Element => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <StyledCard className="click_cards" style={{ height: '100%' }}>
        <Card.Body style={{ padding: '0.8rem' }}>
          <Card.Text className="mt-2" style={{ color: 'white' }}>
            <SubtitleBold as="span">{title}</SubtitleBold>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Subtitle as="div">
            <Row>
              <Col xl={10} md={8} sm={6} xs={6} style={{ alignSelf: 'left' }}>
                {publisher}
              </Col>
              <Col xl={2} md={4} sm={6} xs={6} style={{ textAlign: 'right' }}>
                {year}
              </Col>
            </Row>
          </Subtitle>
        </Card.Footer>
      </StyledCard>
    </a>
  );
};

import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { PaperCardProps } from './types';
import { StyledCard, SubtitleBold, Subtitle } from '../../styles';

export const PaperCard = ({ title, url, publisher, year }: PaperCardProps): React.JSX.Element => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <StyledCard className="click_cards h-100">
        <PaperCardBody>
          <Card.Text className="mt-2 text-white">
            <SubtitleBold as="span">{title}</SubtitleBold>
          </Card.Text>
        </PaperCardBody>
        <Card.Footer>
          <Subtitle as="div">
            <Row>
              <Col xl={10} md={8} sm={6} xs={6} className="text-start">
                {publisher}
              </Col>
              <Col xl={2} md={4} sm={6} xs={6} className="text-end">
                {year}
              </Col>
            </Row>
          </Subtitle>
        </Card.Footer>
      </StyledCard>
    </a>
  );
};

const PaperCardBody = styled(Card.Body)`
  padding: 0.8rem;
`;

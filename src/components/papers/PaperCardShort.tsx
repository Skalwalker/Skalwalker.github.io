import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { PaperCardProps } from './types';
import { StyledCard, ParagraphBold, Subtitle } from '../../styles';

export const PaperCardShort = ({
  title,
  url,
  publisher,
  year,
}: PaperCardProps): React.JSX.Element => {
  return (
    <a href={url} className="w-100 d-block" target="_blank" rel="noopener noreferrer">
      <StyledCard className="click_cards">
        <PaperCardBody>
          <ParagraphBold as="div" className="mb-0 mt-0 text-white">
            <Row>
              <Col xl={10} md={9} xs={9} className="text-start">
                {title}
              </Col>
              <Col xl={2} md={3} xs={3} className="text-end">
                {year}
              </Col>
            </Row>
          </ParagraphBold>
          <PaperCardSubtitle className="mt-0">
            <Subtitle as="span">{publisher}</Subtitle>
          </PaperCardSubtitle>
        </PaperCardBody>
      </StyledCard>
    </a>
  );
};

const PaperCardBody = styled(Card.Body)`
  padding: 0.8rem;
`;

const PaperCardSubtitle = styled(Card.Subtitle)`
  margin-top: 0;
`;

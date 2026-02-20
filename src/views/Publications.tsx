import type { JSX } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { PaperCard, PaperCardShort, ScrollButton } from '../components';
import { publicationsContent } from '../content';
import { useTagFilter } from '../hooks';
import { PageFluidContainer, SectionDivider, Subtitle } from '../styles/primitives';

export const Publications = (): JSX.Element => {
  const { toggleTag, isTagActive, matchesTags } = useTagFilter();

  const { tags, publications } = publicationsContent;

  return (
    <PageFluidContainer fluid>
      <Row>
        <Subtitle as="h1">
          Featured <b>Publications</b>
        </Subtitle>
        <SectionDivider className="w-100 mt-2 mb-2" />
      </Row>
      <FeaturedRow>
        {publications
          .filter((paper) => paper.highlight)
          .map((paper) => (
            <FeaturedPaperCol key={paper.title} lg={6}>
              <PaperCard
                title={paper.title}
                url={paper.url}
                publisher={paper.publisher}
                year={paper.year}
              />
            </FeaturedPaperCol>
          ))}
      </FeaturedRow>
      <Row className="pt-5">
        <Col>
          <Row>
            <Col lg={6}>
              <Subtitle as="h1">Newest</Subtitle>
            </Col>
            {tags.map((name) => (
              <TagFilterCol key={name} lg={2} className="d-grid mb-2">
                <Button
                  onClick={() => {
                    toggleTag(name);
                  }}
                  variant={isTagActive(name) ? 'light' : 'outline-light'}
                  size="sm"
                >
                  {name}
                </Button>
              </TagFilterCol>
            ))}
            <SectionDivider className="w-100 mt-2 mb-2" />
          </Row>
          {publications
            .filter((paper) => !paper.highlight && matchesTags(paper.tags))
            .map((paper) => (
              <PaperRow key={paper.title}>
                <PaperCardShort
                  title={paper.title}
                  url={paper.url}
                  publisher={paper.publisher}
                  year={paper.year}
                />
              </PaperRow>
            ))}
        </Col>
      </Row>
      <ScrollButton />
    </PageFluidContainer>
  );
};

const FeaturedRow = styled(Row)`
  padding: 8px;
`;

const FeaturedPaperCol = styled(Col)`
  padding: 10px;
`;

const TagFilterCol = styled(Col)`
  padding-top: 12px;
`;

const PaperRow = styled(Row)`
  padding: 10px;
`;

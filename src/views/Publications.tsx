import type { JSX } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { PaperCard, PaperCardShort, ScrollButton } from '../components';
import { publicationsContent } from '../content';
import { useTagFilter } from '../hooks';
import { Subtitle, SectionDivider } from '../styles/primitives';

export const Publications = (): JSX.Element => {
  const { toggleTag, isTagActive, matchesTags } = useTagFilter();

  const { tags, publications } = publicationsContent;

  return (
    <Container className="p-5" style={{ padding: '90px', paddingTop: '50px' }} fluid>
      <Row>
        <Subtitle as="h1">
          Featured <b>Publications</b>
        </Subtitle>
        <SectionDivider className="w-100 mt-2 mb-2" />
      </Row>
      <Row style={{ padding: '8px' }}>
        {publications
          .filter((paper) => paper.highlight)
          .map((paper) => (
            <Col key={paper.title} lg={6} style={{ padding: '10px' }}>
              <PaperCard
                title={paper.title}
                url={paper.url}
                publisher={paper.publisher}
                year={paper.year}
              />
            </Col>
          ))}
      </Row>
      <Row className="pt-5">
        <Col>
          <Row>
            <Col lg={6}>
              <Subtitle as="h1">Newest</Subtitle>
            </Col>
            {tags.map((name) => (
              <Col key={name} lg={2} style={{ paddingTop: '12px' }} className="d-grid mb-2">
                <Button
                  onClick={() => {
                    toggleTag(name);
                  }}
                  variant={isTagActive(name) ? 'light' : 'outline-light'}
                  size="sm"
                >
                  {name}
                </Button>
              </Col>
            ))}
            <SectionDivider className="w-100 mt-2 mb-2" />
          </Row>
          {publications
            .filter((paper) => !paper.highlight && matchesTags(paper.tags))
            .map((paper) => (
              <Row key={paper.title} style={{ padding: '10px', paddingTop: '10px' }}>
                <PaperCardShort
                  title={paper.title}
                  url={paper.url}
                  publisher={paper.publisher}
                  year={paper.year}
                />
              </Row>
            ))}
        </Col>
      </Row>
      <ScrollButton />
    </Container>
  );
};

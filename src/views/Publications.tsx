import type { JSX } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

import { PaperCard } from '../components/papers/PaperCard';
import { PaperCardShort } from '../components/papers/PaperCardShort';
import { ScrollButton } from '../components/shared/ScrollButton';
import { publicationsContent } from '../content/Publications';
import { useTagFilter } from '../hooks/useTagFilter';

import '../assets/css/font.css';

export const Publications = (): JSX.Element => {
  const { toggleTag, isTagActive, matchesTags } = useTagFilter();

  const { tags, publications } = publicationsContent;

  return (
    <Container className="p-5" style={{ padding: '90px', paddingTop: '50px' }} fluid>
      <Row>
        <h1 className="subtitle">
          Featured <b>Publications</b>
        </h1>
        <div className="w-100 mt-2 mb-2" style={{ backgroundColor: 'white', height: '3px' }} />
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
              <h1 className="subtitle">Newest</h1>
            </Col>
            {tags.map((name) => (
              <Col key={name} lg={2} style={{ paddingTop: '12px' }} className="d-grid mb-2">
                <Button
                  onClick={() => {
                    toggleTag(name);
                  }}
                  className="paragraph"
                  variant={isTagActive(name) ? 'light' : 'outline-light'}
                  size="sm"
                >
                  {name}
                </Button>
              </Col>
            ))}
            <div className="w-100 mt-2 mb-2" style={{ backgroundColor: 'white', height: '3px' }} />
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

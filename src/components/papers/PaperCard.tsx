import React from 'react';
import Card from 'react-bootstrap/Card';
import { StyledCard } from '../../components/shared/StyledCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface myState {}
interface myProps { title: any; url: any; publisher: any; year: any }

class PaperCard extends React.Component<myProps, myState> {
  static defaultProps = {
    title: 'An incredible paper on placeholders',
    url: 'https://github.com/Skalwalker',
    publisher: 'Placeholder Editor',
    year: '0001',
  };

  render() {
    return (
      <a href={this.props.url} target="_blank" rel="noopener noreferrer">
        <StyledCard className="click_cards" style={{ height: '100%' }}>
          <Card.Body style={{ padding: '0.8rem' }}>
            <Card.Text className="mt-2 subtitle_bold" style={{ color: 'white' }}>
              {this.props.title}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="subtitle">
            <Row>
              <Col xl={10} md={8} sm={6} xs={6} style={{ alignSelf: 'left' }}>
                {this.props.publisher}
              </Col>
              <Col xl={2} md={4} sm={6} xs={6} style={{ textAlign: 'right' }}>
                {this.props.year}
              </Col>
            </Row>
          </Card.Footer>
        </StyledCard>
      </a>
    );
  }
}
export default PaperCard;

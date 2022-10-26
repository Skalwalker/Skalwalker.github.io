import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type myState = { }
type myProps = {title: any, url: any, publisher: any, year: any}

class PaperCard extends React.Component<myProps, myState> {

    static defaultProps = {
        title: 'An incredible paper on placeholders',
        url: "https://github.com/Skalwalker",
        publisher: "Placeholder Editor",
        year: "0001"
    };


  render () {
    return (
        <a href={this.props.url}>
        <Card style={{borderRadius: '10px'}}>
          <Card.Body style={{ padding: '0.8rem' }}>
            <Card.Text className='mt-2 subtitle_bold' style={{color: "white"}}>
              {this.props.title}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="subtitle">
            <Row>
                <Col lg={10} style={{alignSelf: 'left', color: 'white'}}>
                    {this.props.publisher}
                </Col>
                <Col lg={2} style={{textAlign: 'right', color: 'white'}}>
                    {this.props.year}
                </Col>
            </Row>
          </Card.Footer>
        </Card>
        </a>
    )
  }
}
export default PaperCard;

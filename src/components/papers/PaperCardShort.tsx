import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../../assets/css/card.css"

type myState = { }
type myProps = {title: any, url: any, publisher: any, year: any}

class PaperCardShort extends React.Component<myProps, myState> {

    static defaultProps = {
        title: 'An incredible paper on placeholders',
        url: "https://github.com/Skalwalker",
        publisher: "Placeholder Editor",
        year: "0001"
    };


  render () {
    return (
        <a href={this.props.url} style={{width: '100%'}}  target="_blank" rel="noopener noreferrer">
        <Card className="click_cards">
          <Card.Body style={{ padding: '0.8rem' }}>
            <Card.Text className='mb-0 mt-0 paragraph_bold' style={{color: "white"}}>
                <Row>
                    <Col xl={10} md={9} xs={9} style={{textAlign: 'left'}}>
                        {this.props.title}
                    </Col>
                    <Col xl={2} md={3} xs={3} style={{textAlign: 'right'}}>
                        {this.props.year}
                    </Col>
                </Row>
            </Card.Text>
            <Card.Subtitle className="subtitle mt-2" style={{marginTop:'0'}}>{this.props.publisher}</Card.Subtitle>
          </Card.Body>
        </Card>
        </a>
    )
  }
}
export default PaperCardShort;

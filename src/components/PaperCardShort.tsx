import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <a href={this.props.url} style={{width: '100%'}}>
        <Card style={{borderRadius: '10px'}}>
          <Card.Body style={{ padding: '0.8rem' }}>
            <Card.Text className='mb-0 mt-0 paragraph_bold' style={{color: "white"}}>
                <Row>
                    <Col lg={10}>
                        {this.props.title}
                    </Col>
                    <Col lg={2} style={{textAlign: 'right'}}>
                        {this.props.year}
                    </Col>
                </Row>
            </Card.Text>
            <Card.Subtitle className="subtitle" style={{color:'white', marginTop:'0'}}>{this.props.publisher}</Card.Subtitle>
          </Card.Body>
        </Card>
        </a>
    )
  }
}
export default PaperCardShort;

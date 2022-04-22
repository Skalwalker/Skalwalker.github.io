import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom/Link';

type myState = { }
type myProps = { title: any, img: any, url: any, onLoad: any }

class CardRelease extends React.Component<myProps, myState> {

  static defaultProps = {
    title: 'Stranger',
    img: require("../assets/images/glitch/glitch_ios.jpg").default,
    url: "https://github.com/Skalwalker"
  };

  render () {
    return (
      <Col md={3} className='mb-3'>
        <a href={this.props.url}>
        <Card style={{ minHeight: '30vh' }}>
          <Card.Body style={{ padding: '0.8rem' }}>
            <Card.Img variant="top" src={this.props.img} onLoad={this.props.onLoad}/>
            <Card.Text className='mt-2 paragraph_bold' style={{color: "white"}}>
              {this.props.title}
            </Card.Text>
          </Card.Body>
        </Card>
        </a>
      </Col>
    )
  }
}

export default CardRelease;

import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

type myState = { }
type myProps = { title: any }

class CardRelease extends React.Component<myProps, myState> {
  render () {
    return (
      <Col md={4} className='mb-3'>
        <Card style={{ minHeight: '30vh' }}>
          <Card.Body style={{padding: '0.8rem'}}>
            <Card.Img variant="top" src={require("../assets/images/200x200.png")} />
            <Card.Text className='mt-2'>
              {this.props.title}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
export default CardRelease;

import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';

type MyProps = { title: string, date: string };
type MyState = { };

class AchievCard extends React.Component<MyProps, MyState> {

  static defaultProps = {
    title: 'Stranger',
    date: 'Stranger'
  };

  render () {
    return (
      <Card border="#60D7F9" className="mt-1 mb-1">
          <Row>
          {/* className='mt-2 paragraph_bold' */}
            <Col md={3}>
              <Card.Img style={style.cardImgLeft}/>
            </Col>
            <Col>
              <Card.Body style={{padding: '0.5rem'}}>
                <Card.Title className='subtitle_bold pt-2' style={{fontSize: '18px', color: 'white'}}>{this.props.title}</Card.Title>
                <Card.Text className='paragraph' style={{fontSize: '12px', color: 'white'}}>{this.props.date}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
      </Card>
    )
  }
}

// AchievCard.

const style = {
  cardImgLeft: {
    height: '80px',
    width: '80px',
    // float: "left"
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 0
  }
}

export default AchievCard;

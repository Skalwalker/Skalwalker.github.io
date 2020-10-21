import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Button, Row, Col } from 'react-bootstrap'
import Background from '../components/Background'
import { slides } from '../content/Home'
import '../assets/css/font.css';

class Home extends React.Component {
  render() {
    return (
      <Background>
        <Carousel>
        {slides.map((slide, index)=> {
          return (
            <Carousel.Item>
              <div className="d-block w-100" style={{ height: '92vh' }} >
                <Row className="h-100">
                  <Col md={12} className="my-auto">
                    <div className="bottom_text">
                    <h1 className="font_text" style={style.nameStyle}>{slide.text}</h1>
                      <div className="top_text">
                        <h1 className="font_text_2" style={style.nameStyle}>{slide.text}</h1>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <Carousel.Caption className='mb-5'>
                <p style={{color: '#CA3A78', fontSize: '36px'}}>
                  {slide.desc}
                </p>
                {slide.button && (<Button size='lg' href={slide.route} variant="outline-light" className='mb-3'>
                  Learn More
                </Button>)}
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
      </Background>
    )
  }
}

const style = {
  nameStyle: {
    fontSize: '96px',
    color: '#60D7F9'
  }
}

export default Home;

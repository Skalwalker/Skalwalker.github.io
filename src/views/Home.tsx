import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'
import Background from '../components/Background'
import { slides } from '../content/Home'

class Home extends React.Component {
  render() {
    return (
      <Background>
        <Carousel>
        {slides.map((slide, index)=> {
          return (
            <Carousel.Item>
              <div className="d-block w-100" style={{ height: '92vh' }} >
                <div style={style.nameDiv}>
                <h1 style={style.nameStyle}>{slide.text}</h1>
                </div>
              </div>
              <Carousel.Caption className='mb-5'>
                <p style={{color: '#CA3A78', fontSize: '36px'}}>
                  {slide.desc}
                </p>
                {slide.button && (<Button size='lg' variant="outline-light" className='mb-3'>
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
  nameDiv: {
    height: '90%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0
  },
  nameStyle: {
    fontSize: '96px',
    color: '#60D7F9'
  }
}

export default Home;

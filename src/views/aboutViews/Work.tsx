import React from 'react';
import Orb from '../../components/Orb'
import FocusOrb from '../../components/FocusOrb'
import { Container, Row, Col } from 'react-bootstrap';
import { works } from '../../content/About'

type myProps = { }
type myState = { title: any, text: any, img:any}

class Work extends React.Component<myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: works.orbs[0].title,
      text: works.orbs[0].text,
      img: works.orbs[0].img
    };
  }

  setIsShown = (title:string, text:string) => {
    this.setState({
      title: title,
      text: text,
    })
  }

  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={12} className='my-auto'>
            <Row>
              <Col md={2} className='text-center'>
                <Row>
                  {works.orbs.map((work, index) => {
                    return(
                      <Orb img={work.img} onClick={() => {this.setIsShown(work.title, work.text)}} />
                    )
                  })}
                </Row>
              </Col>
              <Col md={{span:8, offset:1}}>
                <FocusOrb title={this.state.title} text={this.state.text}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Work;


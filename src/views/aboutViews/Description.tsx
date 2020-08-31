import React from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import image from "../../assets/images/300x300.png"

class Description extends React.Component {
  render() {
    return (
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={{span: 11, offset: 1}} className='my-auto'>
            <Row>
              <Col md={3} className='text-center'>
                <div style={{height: '150px', width: '150px', backgroundColor: 'white', borderRadius:'75px'}}></div>
              </Col>
              <Col md={9} className='my-auto pr-5'>
                <Row>
                  <Col md={12}>
                    <p style={{color: 'white', fontSize: '20px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, quam vitae dapibus commodo, nisl sapien ornare leo, vel finibus urna est eget ipsum. In hac habitasse platea dictumst.
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, quam vitae dapibus commodo, nisl sapien ornare leo, vel finibus urna est eget ipsum. In hac habitasse platea dictumst.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={12} className='mt-5'>
                <p style={{color: 'white', fontSize: '20px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, quam vitae dapibus commodo, nisl sapien ornare leo, vel finibus urna est eget ipsum. In hac habitasse platea dictumst.
                    </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Description;


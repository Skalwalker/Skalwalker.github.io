import React from 'react';
import Background from '../components/Background'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from 'react-bootstrap'
import MailForm from '../components/MailForm'

class Contact extends React.Component {
    render() {
      return (
        <Background>
          <Container className="h-100">
            <Row className='h-100'>
              <Col md={{span: 6, offset: 3}} xs={12} className="my-auto">
                <div className='text-center'>
                  <h2 style={{color: '#FFFFFF', fontSize: '65px'}}>Contact Me</h2>
                </div>
                <MailForm/>
              </Col>
            </Row>
          </Container>
        </Background>
      )
    }
}

export default Contact;

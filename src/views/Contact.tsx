import React from 'react';
import Background from '../components/Background'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Contact extends React.Component {
    render() {
      return (
        <Background>
          <Row className="justify-content-xl-center">
              <Col xl="auto" id="page-content-wrapper" style={style.nameDiv}>
              <Form>
                  <Form.Group controlId="formContact">
                  <Form.Label style={style.nameStyle}>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted" style={{color: '#FFFFFF'}} >
                      We'll never share your email with anyone else.
                      </Form.Text>
                  </Form.Group>

                  <Form.Group>
                      <Form.Label style={style.nameStyle}>Subject</Form.Label>
                      <Form.Control type="text" placeholder="Normal text"/>
                  </Form.Group>


                  <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label style={style.nameStyle}>Content</Form.Label>
                      <Form.Control as="textarea"/>
                  </Form.Group>
              </Form>
              </Col>
          </Row>

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
    fontSize: '30px',
    color: '#FFFFFF'
  }
}

export default Contact;

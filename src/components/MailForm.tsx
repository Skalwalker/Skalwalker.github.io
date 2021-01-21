import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

type myState = { status: any }
type myProps = { }

class MailForm extends React.Component<myProps, myState> {

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
        <Form onSubmit={this.submitForm} action="https://formspree.io/f/xzbkozaa"
        method="POST">

        <Form.Group controlId="formContact">
          <Form.Label style={style.nameStyle}>Email Address</Form.Label>
          <Form.Control required name="Email" type="email" placeholder="Enter email" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Text style={{color: '#FFFFFF'}} >
          I'll never share your email with anyone else.
          </Form.Text>

        </Form.Group>

        <Form.Group>
          <Form.Label style={style.nameStyle}>Subject</Form.Label>
          <Form.Control required name="Subject" type="text" placeholder="Email Subject"/>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label style={style.nameStyle}>Content</Form.Label>
          <Form.Control required name="Message" as="textarea"/>
        </Form.Group>


        {status === "SUCCESS" ?
        <Alert variant="success">
        Thanks for sending me an email, I will get in touch shortly.
        </Alert> :
        <Button type='submit' size='lg' variant="outline-light" className='ml-3 float-right'>
            Submit
        </Button>
        }

        {status === "ERROR" &&
        <Alert variant="warning">
        Ops! Something went wrong!
        </Alert>
        }

      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        console.log("Success");
      } else {
        this.setState({ status: "ERROR" });
        console.log("Error");
      }
    };
    xhr.send(data);
  }
}

const style = {
    nameDiv: {
      height: '90%',
      // width: '100%',
      display: 'block',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0
    },
    nameStyle: {
      fontSize: '30px',
      color: '#FFFFFF'
    }
}


export default MailForm

import React from 'react';
import { Col, Modal, Button } from 'react-bootstrap';

type myState = { }
type myProps = { onHide: any, show: any, skill: any }

class SkillModal extends React.Component<myProps, myState> {
  render () {
    return (
      <Modal
        {... this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {this.props.skill.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {this.props.skill.desc}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default SkillModal;

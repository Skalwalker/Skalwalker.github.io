import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Header>
        <Modal.Body style={{height:"80vh"}}>
            <embed src={props.document} type="application/pdf" width="100%" height="100%" />
        </Modal.Body>
        {/* <Modal.Footer>

        </Modal.Footer> */}
      </Modal>
    );
}

export default MyVerticallyCenteredModal;

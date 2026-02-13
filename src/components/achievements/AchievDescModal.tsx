import React from 'react';
import Modal from 'react-bootstrap/Modal';

interface MyProps { desc: string; title: string; date: string; show: boolean; callback: any }
interface MyState { show: boolean }

class AchievDescModal extends React.Component<MyProps, MyState> {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ show: props.show });
  }

  handleClose = () => {
    this.setState({ show: false });
    this.props.callback();
  };

  render() {
    return (
      <Modal className="d-lg-none" show={this.state.show} onHide={this.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="subtitle_bold">{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="paragraph">{this.props.desc}</Modal.Body>
      </Modal>
    );
  }
}
export default AchievDescModal;

import React from 'react';
import Modal from 'react-bootstrap/Modal';

import { AchievementModalProps } from './types';

export const AchievDescModal = ({
  content,
  callback,
}: AchievementModalProps): React.JSX.Element => {
  return (
    <Modal className="d-lg-none" onHide={callback} centered>
      <Modal.Header closeButton>
        <Modal.Title className="subtitle_bold">{content.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="paragraph">{content.desc}</Modal.Body>
    </Modal>
  );
};

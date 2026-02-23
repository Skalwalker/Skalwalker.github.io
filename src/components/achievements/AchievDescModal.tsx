import React from 'react';
import { Modal } from 'react-bootstrap';

import { AchievementModalProps } from './types';
import { SubtitleBold, Paragraph } from '../../styles/primitives';

export const AchievDescModal = ({
  content,
  callback,
}: AchievementModalProps): React.JSX.Element => {
  return (
    <Modal show className="d-lg-none" onHide={callback} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <SubtitleBold as="span">{content.title}</SubtitleBold>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Paragraph as="span">{content.desc}</Paragraph>
      </Modal.Body>
    </Modal>
  );
};

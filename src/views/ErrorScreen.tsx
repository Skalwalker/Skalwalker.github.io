import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../assets/css/font.css';

export const Errorscreen = (): React.JSX.Element => {
  return (
    <div className="w-100" style={{ height: '100vh' }}>
      <Row className="h-100">
        <Col md={12} className="my-auto">
          <div className="bottom_text">
            <h1 className="font_text" style={style.nameStyle}>
              404
              <br />
              Doesn&apos;t look like
              <br /> anything to me
            </h1>
            <div className="top_text">
              <h1 className="font_text_2" style={style.nameStyle}>
                404
                <br />
                Doesn&apos;t look like
                <br /> anything to me
              </h1>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const style = {
  nameStyle: {
    fontSize: '96px',
    color: '#60D7F9',
  },
};

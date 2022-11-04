import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/font.css';
import Background from '../components/shared/Background'

class Splashscreen extends React.Component {
    render() {
        return (
            <Background navbar={false}>
                <div className="w-100" style={{ height: '100vh'}} >
                    <Row className="h-100">
                        <Col md={12} className="my-auto">
                            <div className="bottom_text">
                            <h1 className="font_text" style={style.nameStyle}>Hi, I am Renato Nobre</h1>
                            <div className="top_text">
                                <h1 className="font_text_2" style={style.nameStyle}>Hi, I am Renato Nobre</h1>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Background>
        )
    }
};


const style = {
    nameStyle: {
      fontSize: '96px',
      color: '#60D7F9'
    }
}

export default Splashscreen;

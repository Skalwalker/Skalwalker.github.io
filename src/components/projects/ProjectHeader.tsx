import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { FaGithub } from "react-icons/fa";
import { IoIosPaper } from 'react-icons/io';

import '../../assets/css/font.css';

type myState = { }
type myProps = { project: any, abstract: string }

class ProjectHeader extends React.Component<myProps, myState> {

  render () {
    return (
        // <Row >
        <>
            <Col xl={8} md={7} className="my-auto">
                <Row className="ms-0">
                    <div className="bottom_project_text">
                        <h1 className="font_text" style={style.nameStyle}>{this.props.project?.title}</h1>
                            <div className="top_project_text">
                                <h1 className="font_text_2" style={style.nameStyle}>{this.props.project?.title}</h1>
                            </div>
                    </div>
                </Row>
                <Row className="ms-0 my-auto">
                    <p className='paragraph' style={{fontSize: "16px", color: "white", height: "100%", lineHeight: 1.6}}>
                    {this.props.abstract}
                    </p>
                </Row>
                <Row className="ms-0">
                    <p><b style={{color: 'var(--bs-primary)'}}>Skills:</b> Machine Learnin, SVM, CNN, Swift, Python, CSS</p>
                </Row>
                <Row className="ms-0 mt-3">
                    <div>
                        <Button size="sm" className="me-3" variant="outline-primary">View Code
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Skalwalker">
                            <FaGithub color="#60D7F9" className='float-start me-2' size="25"></FaGithub>
                        </a>
                        </Button>
                        <Button size="sm" className="me-3" variant="outline-primary">Read Paper
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Skalwalker">
                            <IoIosPaper color="#60D7F9" className='float-start me-2' size="25"></IoIosPaper>
                        </a>
                        </Button>
                    </div>
                </Row>
            </Col>
            <Col className='ps-5 my-auto mt-5 mt-xl-0' xl={4} md={5} >
                <Image className="w-100"
                    src={this.props.project?.banner}
                    style={{borderRadius: '20px', borderWidth: '5px', border: 'solid', borderColor: 'var(--bs-primary)'}}/>
            </Col>
        </>
        // </Row>
    )
  }
}


const style = {
    nameStyle: {
      fontSize: '70px',
      color: '#60D7F9'
    }
}


export default ProjectHeader;

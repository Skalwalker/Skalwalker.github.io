import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { FaGithub } from "react-icons/fa";
import { IoIosPaper } from 'react-icons/io';

import '../../assets/css/font.css';
import '../../assets/css/projects.css'

type myState = { }
type myProps = { project: any }

class ProjectHeader extends React.Component<myProps, myState> {

  render () {
    return (
        // <Row >
        <>
            <Col xl={8} md={7} className="my-auto ps-0">
                <Row className="ms-0 ps-0">
                    <div className="bottom_project_text">
                        <h1 className="font_text title_style">{this.props.project?.title}</h1>
                        <div className="top_project_text">
                            <h1 className="font_text_2 title_style">{this.props.project?.title}</h1>
                        </div>
                    </div>
                </Row>
                <Row className="ms-0 ps-0 my-auto">
                    <p className='paragraph' style={{fontSize: "16px", color: "white", height: "100%", lineHeight: 1.6}}>
                    {this.props.project?.abstract}
                    </p>
                </Row>
                <Row className="ms-0 ps-0">
                    <p><b style={{color: 'var(--bs-primary)'}}>Skills: </b>{this.props.project?.skills}</p>
                </Row>
                <Row className="ms-0 ps-0 mt-3">
                    <div>
                        {this.props.project?.code_link && (
                        <a target="_blank" rel="noopener noreferrer" href={this.props.project?.code_link}>
                        <Button size="sm" className="me-3" variant="outline-primary">View Code
                            <FaGithub color="#60D7F9" className='float-start me-2' size="25"></FaGithub>
                        </Button>
                        </a>
                        )}
                        {this.props.project?.paper_link && (
                        <a target="_blank" rel="noopener noreferrer" href={this.props.project?.paper_link}>
                        <Button size="sm" className="me-3" variant="outline-primary">Read Paper
                            <IoIosPaper color="#60D7F9" className='float-start me-2' size="25"></IoIosPaper>
                        </Button>
                        </a>
                        )}
                    </div>
                </Row>
            </Col>
            <Col className='ps-2 pe-2 ps-md-5 pe-md-0 my-auto mt-5 mt-xl-0' xl={4} md={5} >
                <Image className="w-100"
                    src={this.props.project?.banner}
                    style={{borderRadius: '20px', borderWidth: '5px', border: 'solid', borderColor: 'var(--bs-primary)'}}/>
            </Col>
        </>
        // </Row>
    )
  }
}



export default ProjectHeader;

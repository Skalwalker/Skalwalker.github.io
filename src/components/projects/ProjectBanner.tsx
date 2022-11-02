import React from 'react';
import { Card } from 'react-bootstrap';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { project } from '../../content/Projects';
import { FaGithub } from "react-icons/fa";
import { IoIosPaper } from 'react-icons/io';
import '../../assets/css/font.css';

type myState = { }
type myProps = { }

class ProjectBanner extends React.Component<myProps, myState> {

  render () {
    return (
        <Container fluid style={{height: "90vh", paddingLeft: "70px", paddingRight: "70px"}}>
            <Row style={{height: "90vh"}}>
                <Row className="my-auto ml-0 mr-0">
                    <Col md={8}>
                        <div style={{marginTop: "-20px", maxWidth: "85%"}}>
                            <Row className="ml-0">
                                <div className="bottom_project_text">
                                    <h1 className="font_text" style={style.nameStyle}>{project.projects[0].title}</h1>
                                        <div className="top_project_text">
                                            <h1 className="font_text_2" style={style.nameStyle}>{project.projects[0].title}</h1>
                                        </div>
                                </div>
                            </Row>
                            <Row className="ml-0">
                                <p className='paragraph_bold' style={{fontSize: "16px", color: "white", height: "100%"}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia eros ac blandit maximus. Nulla erat turpis, imperdiet at rutrum eu, hendrerit a velit. Aenean congue odio nisi, at faucibus augue porta viverra. Cras ut blandit diam, sit amet pulvinar augue. Suspendisse potenti. Pellentesque sed turpis fringilla, posuere mi eget, porttitor augue. Nullam vitae lectus eget lacus eleifend consectetur at eu ante. Cras fringilla consequat ex, sed maximus ipsum eleifend id. Fusce tincidunt dictum est eu euismod. Vivamus est dui, consectetur vel sapien sed, consequat molestie lorem. Pellentesque mollis est eget congue blandit.
                                </p>
                            </Row>
                            <Row className="ml-0">
                                <Button className="mr-3" variant="outline-primary">View Code
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Skalwalker">
                                    <FaGithub color="#60D7F9" className='d-inline-block float-left mr-2' size="25"></FaGithub>
                                </a>
                                </Button>
                                <Button className="mr-3" variant="outline-primary">View Paper
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Skalwalker">
                                    <IoIosPaper color="#60D7F9" className='d-inline-block float-left mr-2' size="25"></IoIosPaper>
                                </a>
                                </Button>
                            </Row>
                        </div>
                    </Col>
                    <Col className='pl-0 my-auto' md={4}>
                        <Card style={{height: "70vh", marginLeft: "70px"}}>
                            <Card.Img style={{maxWidth: "90%", maxHeight: "93%", display: "block", margin: "auto"}} src={project.projects[0].banner}/>
                        </Card>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
  }
}


const style = {
    nameStyle: {
      fontSize: '100px',
      color: '#60D7F9'
    }
}


export default ProjectBanner;

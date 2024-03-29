import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import ProjectHeader from './ProjectHeader';
import TableofContents from './TableofContents';
import Background from '../shared/Background';

import ProjectFooter from '../../components/projects/ProjectFooter'

import '../../assets/css/font.css';
import '../../assets/css/stickytable.css';
import '../../assets/css/projects.css'
import ScrollButton from '../shared/ScrollButton';


type myState = { }
type myProps = { project: any, children: React.ReactNode, footer: any }

class ProjectPageContainer extends React.Component<myProps, myState> {

  render () {
    return (
        <Background>
            <Container fluid className="project_page">
                <Row className="ms-0 me-0" style={{marginTop: "80px", marginBottom: '80px'}}>
                    <ProjectHeader project={this.props.project}/>
                </Row>
                <Row className="ms-0 me-0">
                    <Col lg={3} md={3} className="d-none d-md-flex">
                        <TableofContents/>
                    </Col>
                    <Col lg={7} md={9} style={{paddingLeft: "0px"}}>
                        {this.props.children}
                    </Col>
                    <Col lg={2} md={0} className="d-none d-lg-flex"></Col>
                </Row>
                <ProjectFooter footer={this.props.footer}/>
                <ScrollButton/>
            </Container>
        </Background>
    )
  }
}



export default ProjectPageContainer;

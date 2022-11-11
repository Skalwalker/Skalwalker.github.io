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
import ScrollButton from '../shared/ScrollButton';


type myState = { }
type myProps = { project: any, abstract: string, children: React.ReactNode }

class ProjectPageContainer extends React.Component<myProps, myState> {

  render () {
    return (
        <Background>
            <Container fluid style={{paddingLeft: "70px", paddingRight: "70px"}}>
                <Row className="ms-0 me-0" style={{marginTop: "80px", marginBottom: '80px'}}>
                    <ProjectHeader project={this.props.project} abstract={this.props.abstract}/>
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
                <ProjectFooter/>
                <ScrollButton/>
            </Container>
        </Background>
    )
  }
}



export default ProjectPageContainer;

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

import ListGroup from 'react-bootstrap/ListGroup'

type myState = { }
type myProps = { project: any, abstract: string }

class ProjectPageContainer extends React.Component<myProps, myState> {

  render () {
    return (
        <Background showParticles={false}>
            <Container fluid style={{height: "90vh", paddingLeft: "70px", paddingRight: "70px"}}>
                <ProjectHeader project={this.props.project} abstract={this.props.abstract}/>
                <Row className="ml-0 mr-0">
                    <Col md={3}>
                        <TableofContents/>
                    </Col>
                    <Col md={7} style={{paddingLeft: "0px"}}>
                        {this.props.children}
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <ProjectFooter/>
                <ScrollButton/>
            </Container>
        </Background>

    )
  }
}



export default ProjectPageContainer;

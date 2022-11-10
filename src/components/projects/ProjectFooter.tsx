import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../../assets/css/font.css'


type myProps = {}
type myState = {}


class ProjectFooter extends React.Component<myProps, myState> {
    render() {
     return(
        <>
            <Row className="mt-4 mb-1 pt-2 ms-3 me-3" style={{borderTop: 'solid', borderWidth: '1px', borderColor: 'var(--bs-primary)'}}>
                <Col xl={4}>Footnotes</Col>
                <Col xl={8}>1. Teste126<br/>2. Teste 321</Col>
            </Row>
            <Row className="mt-2 mb-1 pt-2 ms-3 me-3" style={{borderTop: 'solid', borderWidth: '1px', borderColor: 'var(--bs-primary)'}}>
                <Col xl={4}>References</Col>
                <Col xl={8}>1. Teste123<br/>2. Teste 321</Col>
            </Row>
            <Row className="pt-5"></Row>
        </>
     )
    }
}

export default ProjectFooter;

import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../../assets/css/font.css'


type myProps = { footer: any }
type myState = {}




function FooterSection({heading, desc}) {
    return (
        <Row className="mt-4 mb-1 pt-2 ms-1 me-1" style={{borderTop: 'solid', borderWidth: '1px', borderColor: 'var(--bs-primary)'}}>
            <Col xl={3} className="ps-0" style={{fontSize: '14px'}}>{heading}</Col>
            <Col xl={9} className="ps-0" style={{whiteSpace: 'pre-wrap', fontSize: '14px'}}>{desc}</Col>
        </Row>
    )
}


class ProjectFooter extends React.Component<myProps, myState> {
    render() {
        const footer_info = this.props.footer

     return(
        <div className="paragraph ms-2 me-4" style={{color: 'rgba(var(--bs-primary-rgb),1.0)'}}>
        {footer_info.map((sec, index) =>
                <FooterSection heading={sec.heading} desc={sec.desc}/>
            )}
        <Row className="mt-5 mb-5 pt-5"></Row>
        </div>
     )
    }
}

export default ProjectFooter;


// <Row className="mt-2 mb-1 pt-2 ms-1 me-1" style={{borderTop: 'solid', borderWidth: '1px', borderColor: 'var(--bs-primary)'}}>
  //              <Col xl={3}>Developers</Col>
    //            <Col xl={9}>1. Teste123<br/>2. Teste 321</Col>
      //      </Row>
        //    <Row className="mt-2 mb-1 pt-2 ms-1 me-1" style={{borderTop: 'solid', borderWidth: '1px', borderColor: 'var(--bs-primary)'}}>
          //      <Col xl={3}>Contributors</Col>
            //    <Col xl={9}>1. Teste123<br/>2. Teste 321</Col>
            //</Row>

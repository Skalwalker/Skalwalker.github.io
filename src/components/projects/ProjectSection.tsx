import React from 'react';
import Row from 'react-bootstrap/Row'

import '../../assets/css/font.css'


type myProps = {title: string, id: string, first: boolean, children: React.ReactNode}
type myState = {}


class ProjectSection extends React.Component<myProps, myState> {

    static defaultProps = {
        first: false,
      };


    render() {
     return(
        <Row id={this.props.id}>
            <h2 id={this.props.id} className={this.props.first ? "subtitle_bold mb-2" : "subtitle_bold mt-4 mb-2"} style={style.header_style}>{this.props.title}</h2>
            {this.props.children}
        </Row>
     )
    }
}

const style = {
    header_style: {
      fontSize: '30px',
      color: '#60D7F9'
    },
    paragraph_style: {
        fontSize: '16px'
    }
}


export default ProjectSection

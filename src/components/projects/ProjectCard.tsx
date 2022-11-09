import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "../../assets/css/card.css"

type myState = { }
type myProps = {project: any}

class ProjectCard extends React.Component<myProps, myState> {


    render() {
        return (
            <Link to={{ pathname: this.props.project?.url }} target={this.props.project?.target}>
                <Card className="ml-auto mr-auto click_cards" style={{minWidth:'15rem', maxWidth: '18rem', height: '100%'}}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + this.props.project?.banner} style={{ borderRadius: '15px 15px 0 0' }} />
                    <Card.Body>
                        <Card.Title className="subtitle-bold mb-1">{this.props.project?.title}</Card.Title>
                        <Card.Text className="paragraph">
                            {this.props.project?.headline}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col>
                                <p className="subtitle" style={{ textAlign: 'left', margin: '0' }}>{this.props.project?.language}</p>
                            </Col>
                            <Col>
                                <p className="subtitle" style={{ textAlign: 'right', margin: '0', }}>{this.props.project?.year}</p>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </Link>
        )
    }
}

export default ProjectCard;

import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "../../assets/css/card.css"

type myState = { }
type myProps = {title: any, url: any, headline: any, year: any, banner: any, highlight: any, language: any}

class ProjectCard extends React.Component<myProps, myState> {

    static defaultProps = {
        title: 'An incredible paper on placeholders',
        url: "https://github.com/Skalwalker",
        headline: "Predicting the stock market with LSTMs and Reinforcement Learning.",
        year: "2022",
        banner: "/projects/questionmark.png",
        highlight: false,
        language: "Swift",
    };

    render() {
        return (
            <a href={this.props.url}>
            <Card className="ml-auto mr-auto click_cards" style={{minWidth:'15rem', maxWidth: '18rem', height: '100%'}}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + this.props.banner} style={{ borderRadius: '15px 15px 0 0' }} />
                <Card.Body>
                    <Card.Title className="subtitle-bold mb-1">{this.props.title}</Card.Title>
                    <Card.Text className="paragraph">
                        {this.props.headline}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col>
                            <p className="subtitle" style={{ textAlign: 'left', margin: '0' }}>{this.props.language}</p>
                        </Col>
                        <Col>
                            <p className="subtitle" style={{ textAlign: 'right', margin: '0', }}>{this.props.year}</p>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
            </a>
        )
    }
}

export default ProjectCard;

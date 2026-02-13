import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { StyledCard } from '../../components/shared/StyledCard';
import { Link } from 'react-router';

type myState = {};
type myProps = { project: any };

class ProjectCardContent extends React.Component<myProps, myState> {
  render() {
    return (
      <StyledCard
        className="ms-auto me-auto click_cards"
        style={{ minWidth: '15rem', maxWidth: '18rem', height: '100%' }}
      >
        <Card.Img
          variant="top"
          src={this.props.project?.banner}
          style={{ borderRadius: '15px 15px 0 0' }}
        />
        <Card.Body>
          <Card.Title className="subtitle-bold mb-1">{this.props.project?.title}</Card.Title>
          <Card.Text className="paragraph">{this.props.project?.headline}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <p className="subtitle" style={{ textAlign: 'left', margin: '0' }}>
                {this.props.project?.language}
              </p>
            </Col>
            <Col>
              <p className="subtitle" style={{ textAlign: 'right', margin: '0' }}>
                {this.props.project?.year}
              </p>
            </Col>
          </Row>
        </Card.Footer>
      </StyledCard>
    );
  }
}

class InternalCard extends React.Component<myProps, myState> {
  render() {
    return (
      <Link to={{ pathname: this.props.project?.url }} target={this.props.project?.target}>
        <ProjectCardContent project={this.props.project} />
      </Link>
    );
  }
}

class ExternalCard extends React.Component<myProps, myState> {
  render() {
    return (
      <a
        target={this.props.project?.target}
        rel="noopener noreferrer"
        href={this.props.project?.url}
      >
        <ProjectCardContent project={this.props.project} />
      </a>
    );
  }
}

class ProjectCard extends React.Component<myProps, myState> {
  render() {
    const card_type = this.props.project?.target;
    return (
      <>
        {card_type ? (
          <ExternalCard project={this.props.project} />
        ) : (
          <InternalCard project={this.props.project} />
        )}
      </>
    );
  }
}

export default ProjectCard;

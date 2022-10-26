import React from 'react';
import Background from '../components/Background';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { craft } from '../content/Craft';
import ProjectCard from '../components/ProjectCard';
import '../assets/css/font.css';

type myState = { activeTags: any, bgHeight: any, imagesCounter: any }
type myProps = { }

class Craft extends React.Component<myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeTags: [],
      bgHeight: "100vh",
      imagesCounter: 0
    };
  }

  clickButton = (id: string) => {
    var aux = this.state.activeTags
    if (aux.includes(id, 0)) {
      aux.splice(aux.indexOf(id), 1)
    } else {
      aux.push(id)
    }
    this.setState({
      activeTags: aux,
    })
  }

  checkIfIsActive = (id: string) => {
    if (this.state.activeTags.includes(id, 0)) {
      return 'light'
    } else {
      return 'outline-light'
    }
  }

  checkInTags = (tag: any) => {
    let found = 0;
    for (let i = 0; i <= this.state.activeTags.length; i++) {
      if (this.state.activeTags.includes(tag, 0)) {
        found++;
      }
    }
    if (found >= this.state.activeTags.length) {
      return true;
    } else {
      return false;
    }
  }

  onLoad = () => {
    const releases = craft.crafts;
    if (this.state.imagesCounter === releases.length-1) {
      this.setState({
        bgHeight: document.getElementById('page-size')!.clientHeight +
        document.getElementsByClassName('card-body')![0].clientHeight/2})
    } else {
      this.setState({imagesCounter: this.state.imagesCounter+1})
    }
  }

  render() {
    const tags = craft.tags;
    const projects = craft.crafts;

    return (
      <Background showParticles={true} pageHeight={this.state.bgHeight}>
        <Container style={{padding: '90px', paddingTop: '50px'}} fluid>
          <Row>
            <h1 className="subtitle" style={{color: 'white'}}>Highlight <b>Projects</b></h1>
            <div className='w-100 mt-2 mb-2' style={{backgroundColor: 'white', height: '3px'}} />
          </Row>
          <Row>
          {projects.map((project, index) => {
            if (project.highlight) {
              return(
                <Col lg={3} style={{padding: '10px'}}>
                  <ProjectCard
                      title={project.title}
                      url={project.url}
                      headline={project.headline}
                      year={project.year}
                      banner={project.banner}
                      language={project.language}/>
                </Col>
              )
            } else {
              return(null)
            }
          })}
          </Row>
        <Row className="pt-5">
          <Col>
            <Row>
              <Col lg={4}>
                <h1 className="subtitle" style={{color: 'white'}}>Newest</h1>
              </Col>
              {tags.map((name, index) => {
                return (
                    <Col lg={2} style={{paddingTop: '12px'}}>
                      <Button key={name} onClick={() => this.clickButton(name)}
                              className='paragraph'
                              variant={this.checkIfIsActive(name)}
                              size="sm"
                              block>
                        {name}
                      </Button>
                    </Col>
                )
              })}
              <div className='w-100 mt-2 mb-2' style={{backgroundColor: 'white', height: '3px'}} />
            </Row>
            <Row>
            {projects.map((project, index) => {
              if ((project.tags.some(this.checkInTags) || this.state.activeTags.length === 0) && (!project.highlight)) {
                return(
                  <Col lg={3} style={{paddingTop: '15px', paddingBottom: '15px'}}>
                    <ProjectCard
                      title={project.title}
                      url={project.url}
                      headline={project.headline}
                      year={project.year}
                      banner={project.banner}
                      language={project.language}/>
                  </Col>
                )
              } else {
                return (null)
              }
            })}
            </Row>
          </Col>
        </Row>
        </Container>
      </Background>
    )
  }
}

export default Craft;

import React from 'react';
import Background from '../components/shared/Background';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { publications_content } from '../content/Publications';
import PaperCard from '../components/papers/PaperCard';
import PaperCardShort from '../components/papers/PaperCardShort';
import ScrollButton from '../components/shared/ScrollButton';

import '../assets/css/font.css';

type myState = { activeTags: any, bgHeight: any, papers_count: any}
type myProps = { }

class Publications extends React.Component<myProps, myState> {

  constructor(props: any) {
    super(props);
    this.state = {
      activeTags: [],
      bgHeight: "100vh",
      papers_count: 0,
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
    const papers = publications_content.publications;
    if (this.state.papers_count === papers.length-1) {
      this.setState({
        bgHeight: document.getElementById('page-size')!.clientHeight +
        document.getElementsByClassName('card-body')![0].clientHeight/2})
    } else {
      this.setState({papers_count: this.state.papers_count+1})
    }
  }


  render() {
    const tags = publications_content.tags;
    const papers = publications_content.publications;

    return (
      <Background showParticles={true} pageHeight={this.state.bgHeight}>
        <Container className="p-5" style={{padding: '90px', paddingTop: '50px'}} fluid>
          <Row>
            <h1 className="subtitle">Featured <b>Publications</b></h1>
            <div className='w-100 mt-2 mb-2' style={{backgroundColor: 'white', height: '3px'}} />
          </Row>
          <Row>
          {papers.map((paper, index) => {
            if (paper.highlight) {
              return(
                <Col lg={6} style={{padding: '10px'}}>
                  <PaperCard title={paper.title} url={paper.url} publisher={paper.publisher} year={paper.year}/>
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
              <Col lg={6}>
                <h1 className="subtitle">Newest</h1>
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
            {papers.map((paper, index) => {
              if ((paper.tags.some(this.checkInTags) || this.state.activeTags.length === 0) && (!paper.highlight)) {
                return(
                  <Row style={{padding: '10px', paddingTop: '10px'}}>
                    <PaperCardShort title={paper.title} url={paper.url} publisher={paper.publisher} year={paper.year}/>
                  </Row>
                )
              } else {
                return (null)
              }
            })}
          </Col>
        </Row>
        </Container>
        <ScrollButton/>
      </Background>
    )
  }
}

export default Publications;

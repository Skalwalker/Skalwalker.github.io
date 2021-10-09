import React from 'react';
import Background from '../components/Background';
import { Col, Row, Button, Table } from 'react-bootstrap';
import { craft } from '../content/Craft';
import CardRelease from '../components/CardRelease';
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
    const releases = craft.crafts;
    const papers = craft.papers;

    return (
      <Background showParticles={false} pageHeight={this.state.bgHeight}>
        {/* <Container> */}
        <Row className="m-0 pt-5 pr-4 pb-5">
          <Col md={2}>
            <Row className="p-4">
              {tags.map((name, index) => {
                return (
                    <Button key={name} onClick={() => this.clickButton(name)}
                            className='mb-2 paragraph'
                            variant={this.checkIfIsActive(name)}
                            size="sm"
                            block>
                      {name}
                    </Button>
                )
              })}
            </Row>
          </Col>
          <Col id="page-size" md={10}>
              <Row>
                <h1 className="subtitle" style={{color: 'white'}}>Releases</h1>
                <div className='w-100 mt-2 mb-4' style={{backgroundColor: 'white', height: '3px'}}/>
              </Row>
              <Row>
                {releases.map((release, index) => {
                  if (release.tags.some(this.checkInTags) || this.state.activeTags.length === 0) {
                    if (release.banner === "") {
                      return(
                        <CardRelease title={release.title} url={release.url} onLoad={this.onLoad}/>
                      )
                    } else {
                      return(
                        <CardRelease title={release.title} img={release.banner} url={release.url} onLoad={this.onLoad}/>
                      )
                    }
                  } else {
                    return (null)
                  }
                })}
              </Row>
              <Row>
                <h1 className="subtitle" style={{color: 'white'}}>Papers</h1>
                <div className='w-100 mt-2 mb-2' style={{backgroundColor: 'white', height: '3px'}} />
              </Row>
              <Row >
                <Table style={{color: 'white'}}>
                  <tbody>
                    {papers.map((paper, index) => {
                      if (paper.tags.some(this.checkInTags) || this.state.activeTags.length === 0) {
                        return(
                          <tr className="paragraph">
                            <td>{index+1}</td>
                            <td>{paper.title}</td>
                            <td>{paper.year}</td>
                          </tr>
                        )
                      } else {
                        return (null)
                      }
                    })}
                  </tbody>
                </Table>
              </Row>
          </Col>
          </Row>
        {/* </Container> */}
      </Background>
    )
  }
}

export default Craft;

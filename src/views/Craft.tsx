import React from 'react';
import Background from '../components/Background';
import { Col, Container, Row, Button, Table } from 'react-bootstrap';
import { craft } from '../content/Craft';
import CardRelease from '../components/CardRelease';
// import {
//   Link
// } from "react-router-dom";

type myState = { activeTags: any }
type myProps = { }

class Craft extends React.Component<myProps, myState> {
  constructor(props: any) {
    super(props);
    this.state = {
      activeTags: []
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

  render() {
    const tags = craft.tags;
    const releases = craft.crafts;
    const papers = craft.papers;

    return (
      <Background style={{height: '100%'}}>
        {/* <Container> */}
        <Row>
          <Col md={2}>
            <Row>
              {tags.map((name, index) => {
                return (
                    <Button key={name} onClick={() => this.clickButton(name)}
                            className='mb-2'
                            variant={this.checkIfIsActive(name)}
                            size="sm"
                            block>
                      {name}
                    </Button>
                )
              })}
            </Row>
          </Col>
          <Col md={10}>
              <Row>
                <h1 style={{color: 'white'}}>Releases</h1>
              </Row>
              <div className='w-100 mt-2 mb-4' style={{backgroundColor: 'white', height: '3px'}} />
              <Row>
                {releases.map((release, index) => {
                  if (release.tags.some(this.checkInTags) || this.state.activeTags.length === 0) {
                    if (release.banner === "") {
                      return(
                        <CardRelease title={release.title} url={release.url}/>
                      )
                    } else {
                      return(
                        <CardRelease title={release.title} img={release.banner} url={release.url}/>
                      )
                    }
                  } else {
                    return (null)
                  }
                })}
              </Row>
              <Row>
                <h1 style={{color: 'white'}}>Papers</h1>
              </Row>
              <div className='w-100 mt-2 mb-2' style={{backgroundColor: 'white', height: '3px'}} />
              <Row >
                <Table style={{color: 'white'}}>
                  <tbody>
                    {papers.map((paper, index) => {
                      if (paper.tags.some(this.checkInTags) || this.state.activeTags.length === 0) {
                        return(
                          <tr>
                            <td>{index}</td>
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

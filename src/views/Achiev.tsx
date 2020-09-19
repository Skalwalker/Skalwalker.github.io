import React from 'react';
import '../assets/css/sidebar.css';
import Background from '../components/Background'
import AchievCard from '../components/AchievCard'
import AchievDesc from '../components/AchievDesc'
import { Col, Row, Container } from 'react-bootstrap';
import { achievs } from '../content/Achiev'

type MyProps = { };
type MyState = { isShown: boolean, desc: string, title: string, date: string };

class Acheiv extends React.Component<MyProps, MyState>  {
  constructor(props: any) {
    super(props);
    this.state = {
      isShown: false,
      desc: 'Hover over an Achievement to show description',
      title: '',
      date: '',
    };
  }

  setIsShown = (value: boolean, title:string, date: string, desc: string) => {
    this.setState({
      isShown: value,
      title: title,
      date: date,
      desc: desc
    })
  }

  render() {
    return (
      <Background>
        <Container fluid style={{height: '92vh'}}>
          <Row className='h-100'>
            <Col md={3} className="text-center my-auto">
              {this.state.isShown && (
                <AchievDesc title={this.state.title} desc={this.state.desc} date={this.state.date}/>
              )}
              {this.state.isShown === false && (
                <h2 style={{fontSize:'40px', color: '#FFFFFF'}}>Hover over an Achievement to show description</h2>
              )}
            </Col>
            <Col md={9} className="my-auto">
              <Container style={{}}>
                <Row>
                  {achievs.map((achiev, index) => {
                    return (
                      <Col xl={4}
                        onMouseEnter={() => this.setIsShown(true,
                          achiev.title, achiev.earned, achiev.desc)}
                        onMouseLeave={() => this.setIsShown(false, '', '', '')}>
                        <AchievCard title={achiev.title} date={achiev.earned}/>
                      </Col>
                    )
                  })}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Background>
    )
  }
}

export default Acheiv;

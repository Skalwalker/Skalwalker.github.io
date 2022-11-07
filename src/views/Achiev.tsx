import React from 'react';
import '../assets/css/sidebar.css';
import Background from '../components/shared/Background'
import AchievCard from '../components/achievements/AchievCard'
import AchievDesc from '../components/achievements/AchievDesc'
import AchievDescModal from '../components/achievements/AchievDescModal'
import { Col, Row, Container } from 'react-bootstrap';
import { achievs } from '../content/Achiev'


type MyProps = { };
type MyState = { isShown: boolean, desc: string, title: string,
                 date: string,  modalShow: boolean, modalTitle: string,
                 modalDesc: string, isModal: boolean};

class Acheiv extends React.Component<MyProps, MyState>  {
  constructor(props: any) {
    super(props);
    this.state = {
      isShown: false,
      desc: 'Hover over an Achievement to show description',
      title: '',
      date: '',
      modalShow: false,
      modalTitle: '',
      modalDesc: '',
      isModal: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isModal: window.innerWidth < 992 });
  }



  setIsShown = (value: boolean, title:string, date: string, desc: string) => {
    this.setState({
      isShown: value,
      title: title,
      date: date,
      desc: desc
    })
  }

  modelCloseCallback = () => {
    this.setState({modalShow: false})
 }

  render() {
    return (
      <Background>
        <Container fluid style={{height: '92vh'}}>
          <Row className='h-100'>
            <Col lg={3} md={12} sm={12} className="text-center my-auto pt-4 pb-4 position-lg-static d-none d-lg-flex" style={{position: 'fixed', zIndex: 1}}>
              {this.state.isShown && (
                <AchievDesc title={this.state.title} desc={this.state.desc} date={this.state.date}/>
              )}
              {this.state.isShown === false && (
                <h2 className="subtitle_bold" style={{fontSize:'32px', color: '#FFFFFF'}}>Hover over an Achievement <br/>to show description</h2>
              )}
            </Col>
            <Col lg={9} md={12} sm={12} className="my-auto">
                <Row>
                  {achievs.map((achiev, index) => {
                    return (
                      <Col key={achiev.title}
                        onMouseEnter={() => this.setIsShown(true,
                        achiev.title, achiev.earned, achiev.desc)}
                        onMouseLeave={() => this.setIsShown(false, '', '', '')}
                        onClick={() => this.setState({modalShow: true,
                                                      modalTitle: achiev.title,
                                                      modalDesc: achiev.desc})}>
                        <AchievCard title={achiev.title} date={achiev.earned} img={achiev.img} locked={achiev.locked}/>
                      </Col>
                    )
                  })}
                </Row>
            </Col>
          </Row>
          {this.state.isModal && (<AchievDescModal
            show={this.state.modalShow}
            callback={this.modelCloseCallback}
            title={this.state.modalTitle}
            desc={this.state.modalDesc}
            date={this.state.date}/>)}
        </Container>
      </Background>
    )
  }
}

export default Acheiv;

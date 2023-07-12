import React from 'react';
import '../assets/css/sidebar.css';
import Background from '../components/shared/Background'
import AchievCard from '../components/achievements/AchievCard'
import AchievDesc from '../components/achievements/AchievDesc'
import AchievDescModal from '../components/achievements/AchievDescModal'
import { Col, Row, Container } from 'react-bootstrap';
import { achievs } from '../content/Achiev'


type MyProps = {};
type MyState = {
  isShown: boolean, desc: string, title: string,
  date: string, modalShow: boolean, modalTitle: string,
  modalDesc: string, isModal: boolean
};

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



  setIsShown = (value: boolean, title: string, date: string, desc: string) => {
    this.setState({
      isShown: value,
      title: title,
      date: date,
      desc: desc
    })
  }

  modelCloseCallback = () => {
    this.setState({ modalShow: false })
  }

  render() {
    return (
      <Background>
        <Container className="p-4" fluid style={{ height: '92vh' }}>
          <Row className="h-100">
            <Col xl={3} lg={3} md={12} sm={12} className="pr-2 text-center pt-4 pb-4 position-lg-static d-none d-lg-flex h-100" style={{ zIndex: 1 }}>
              {this.state.isShown && (
                <AchievDesc title={this.state.title} desc={this.state.desc} date={this.state.date} />
              )}
              {this.state.isShown === false && (
                <h2 className="subtitle_bold my-auto" style={{ fontSize: '32px', color: '#FFFFFF' }}>Hover over an Achievement <br />to show description</h2>
              )}
            </Col>
            <Col xl={9} lg={9} md={12} sm={12} className="my-auto">
              <Row>
                <ConstructAchievs self={this} col={1}/>
                <ConstructAchievs self={this} col={7}/>
                <ConstructAchievs self={this} col={13}/>
              </Row>
            </Col>
          </Row>
          {this.state.isModal && (<AchievDescModal
            show={this.state.modalShow}
            callback={this.modelCloseCallback}
            title={this.state.modalTitle}
            desc={this.state.modalDesc}
            date={this.state.date} />)}
        </Container>
      </Background>
    )
  }
}


type FuncProps = {
  col: number;
  self: any;
};


const ConstructAchievs = ({ self, col}: FuncProps) => {
  return (
    <Col className='mt-0'>
      {[...Array(Math.floor(achievs.length / 3))].map((x, i) => {
        let index = (i + Number(col))-1
        // console.log(col)
        console.log((i + Number(col))-1)
        // console.log(i)
        return (
          <Col key={achievs[index].title}
            onMouseEnter={() => self.setIsShown(true,
              achievs[index].title, achievs[index].earned, achievs[index].desc)}
            onMouseLeave={() => self.setIsShown(false, '', '', '')}
            onClick={() => self.setState({
              modalShow: true,
              modalTitle: achievs[index].title,
              modalDesc: achievs[index].desc
            })}>
            <AchievCard title={achievs[index].title} date={achievs[index].earned} img={achievs[index].img} locked={achievs[index].locked} />
          </Col>
        )
      }
      )}
    </Col>
  )
};

export default Acheiv;

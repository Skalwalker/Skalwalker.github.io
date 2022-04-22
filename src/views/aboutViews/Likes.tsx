import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LikeDesc from '../../components/LikeDesc';
import LikeIcon from '../../components/LikeIcon'
import { like } from '../../content/About'

type MyProps = { };
type MyState = { isShown: boolean, text: any };

class Likes extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShown: false,
      text: 'Hover some squares'
    };
  }

  setIsShown = (value: any) => {
    this.setState({text: value})
  }

  render() {
    return (
      <Container  style={{height: "90vh"}}>
        <Row style={{height: "90vh"}}>
          <Col md={{span: 11, offset: 1}} className='my-auto'>
            <Row>
              {like.map((like_icon) => {
                return (
                  <Col md={2} className='mr-3 mb-3'>
                    <div onMouseEnter={() => this.setIsShown(like_icon.title)}
                         onMouseLeave={() => this.setIsShown('Hover some squares')}
                      className='m-auto' style={{height: '70px', width: '70px'}}>
                       <LikeIcon img={like_icon.img}></LikeIcon>
                    </div>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
        <Row style={{marginTop: "-80px"}}>
          <LikeDesc text={this.state.text}/>
        </Row>
      </Container>
    )
  }
}
export default Likes;


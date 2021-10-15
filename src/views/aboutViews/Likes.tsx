import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ILikeDesc from '../../components/ILikeDesc';
import ILike from '../../components/ILike'
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
      <Container className='h-100'>
        <Row className='h-100'>
          <Col md={{span: 11, offset: 1}} className='my-auto'>
            <Row>
              {like.map((ilike) => {
                return (
                  <Col md={2} className='mr-3 mb-3'>
                    <div onMouseEnter={() => this.setIsShown(ilike.title)}
                         onMouseLeave={() => this.setIsShown('Hover some squares')}
                      className='m-auto' style={{height: '70px', width: '70px'}}>
                       <ILike img={ilike.img}></ILike>
                    </div>
                  </Col>
                )
              })}
            </Row>
            <Row className=''>
              <ILikeDesc text={this.state.text}/>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Likes;


import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import LikeDesc from './LikeDesc';
import LikeIcon from './LikeIcon';
import { like } from '../../content/About';
import '../../assets/css/about.css';

type MyProps = {};
type MyState = { isShown: boolean; text: any };

class Likes extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isShown: false,
      text: '',
    };
  }

  setIsShown = (value: any) => {
    this.setState({ text: value });
  };

  render() {
    return (
      <Container className="h-92">
        <Row style={{ height: '92vh' }}>
          <Col
            lg={{ span: 11, offset: 1 }}
            md={{ span: 11, offset: 0.5 }}
            sm={{ span: 11, offset: 0 }}
            className="my-auto"
          >
            <Row>
              {like.map((like_icon) => {
                return (
                  <Col
                    key={like_icon.title}
                    xl={2}
                    lg={2}
                    md={3}
                    sm={3}
                    xs={4}
                    className="me-0 mb-3 me-xl-2 me-lg-1"
                  >
                    <div
                      className="m-auto"
                      onMouseEnter={() => this.setIsShown(like_icon.title)}
                      onMouseLeave={() => this.setIsShown('')}
                      style={{ height: '70px', width: '70px' }}
                    >
                      <LikeIcon img={like_icon.img}></LikeIcon>
                    </div>
                  </Col>
                );
              })}
            </Row>
            <Row
              className="pt-1 pb-1 pt-lg-3 pe-xl-5 about_like_style"
              style={{ height: '20px', width: '100%' }}
            >
              <LikeDesc text={this.state.text} />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Likes;

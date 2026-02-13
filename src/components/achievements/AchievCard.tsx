import React from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import { StyledCard } from '../../components/shared/StyledCard';

import { CgWebsite } from 'react-icons/cg';
import { BiCoffeeTogo } from 'react-icons/bi';
import { RiMedalLine, RiStockFill, RiSlideshowLine } from 'react-icons/ri';
import { IoIosPaper } from 'react-icons/io';
import { SiIos, SiSwift } from 'react-icons/si';
import {
  GiMaterialsScience,
  GiPlagueDoctorProfile,
  GiCarnivorousPlant,
  GiAirplaneDeparture,
  GiCook,
} from 'react-icons/gi';
import {
  FaVuejs,
  FaGraduationCap,
  FaKaggle,
  FaAmazon,
  FaJedi,
  FaMoneyBillAlt,
} from 'react-icons/fa';

interface MyProps { title: string; date: string; img: string; locked: boolean }
interface MyState {}

class AchievCard extends React.Component<MyProps, MyState> {
  static defaultProps = {
    title: 'Stranger',
    date: 'Stranger',
    img: 'default',
    locked: false,
  };

  get_icon(name: string) {
    const size = 50;
    const selected_color = 'white';
    const class_name = 'm-auto d-block';

    switch (name) {
      case 'graduate':
        return <FaGraduationCap className={class_name} color={selected_color} size={size} />;
      case 'paper':
        return <IoIosPaper className={class_name} color={selected_color} size={size - 2} />;
      case 'money':
        return <FaMoneyBillAlt className={class_name} color={selected_color} size={size - 2} />;
      case 'science':
        return <GiMaterialsScience className={class_name} color={selected_color} size={size} />;
      case 'plants':
        return <GiCarnivorousPlant className={class_name} color={selected_color} size={size} />;
      case 'plane':
        return <GiAirplaneDeparture className={class_name} color={selected_color} size={size} />;
      case 'ios':
        return <SiIos className={class_name} color={selected_color} size={size} />;
      case 'workshop':
        return <RiSlideshowLine className={class_name} color={selected_color} size={size - 2} />;
      case 'medal':
        return <RiMedalLine className={class_name} color={selected_color} size={size} />;
      case 'market':
        return <RiStockFill className={class_name} color={selected_color} size={size} />;
      case 'coffee':
        return <BiCoffeeTogo className={class_name} color={selected_color} size={size} />;
      case 'kaggle':
        return <FaKaggle className={class_name} color={selected_color} size={size} />;
      case 'cook':
        return <GiCook className={class_name} color={selected_color} size={size} />;
      case 'swift':
        return <SiSwift className={class_name} color={selected_color} size={size - 2} />;
      case 'jedi':
        return <FaJedi className={class_name} color={selected_color} size={size - 2} />;
      case 'doctor':
        return <GiPlagueDoctorProfile className={class_name} color={selected_color} size={size} />;
      case 'amazon':
        return <FaAmazon className={class_name} color={selected_color} size={size} />;
      case 'website':
        return <CgWebsite className={class_name} color={selected_color} size={size - 2} />;
      default:
        return <FaVuejs className={class_name} color={selected_color} size={size} />;
    }
  }

  render() {
    const locked = this.props.locked;
    let opcValue: string;
    if (locked) {
      opcValue = '0.5';
    } else {
      opcValue = '1.0';
    }

    return (
      <StyledCard
        className="mt-2 click_cards"
        style={{ height: '4.65rem', minWidth: '270px', opacity: opcValue }}
      >
        <Col>
          <Row>
            <Col xl={3} md={3} sm={3} xs={3} className="my-auto mx-auto" style={{ padding: '5px' }}>
              {this.get_icon(this.props.img)}
            </Col>
            <Col xl={9} md={9} sm={9} xs={9} style={{ paddingLeft: '0' }}>
              <Card.Body style={{ padding: '0.5rem', paddingLeft: '0' }}>
                <Card.Title className="subtitle_bold pt-2 mb-1" style={{ fontSize: '18px' }}>
                  {this.props.title}
                </Card.Title>
                <Card.Text className="paragraph mb-1" style={{ fontSize: '12px' }}>
                  {this.props.date}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Col>
      </StyledCard>
    );
  }
}

export default AchievCard;

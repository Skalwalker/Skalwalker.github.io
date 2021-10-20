import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row, Col} from 'react-bootstrap';

import {CgWebsite} from 'react-icons/cg'
import {BiCoffeeTogo} from 'react-icons/bi'
import {RiMedalLine, RiStockFill, RiSlideshowLine} from 'react-icons/ri'
import {IoIosPaper} from 'react-icons/io'
import {SiIos, SiSwift} from 'react-icons/si'
import {GiMaterialsScience, GiPlagueDoctorProfile, GiCarnivorousPlant,
        GiAirplaneDeparture, GiCook, GiMonumentValley} from 'react-icons/gi';
import { FaVuejs, FaGraduationCap, FaKaggle,
         FaJedi, FaMoneyBillAlt} from 'react-icons/fa';

type MyProps = {title: string, date: string, img: string};
type MyState = { };

class AchievCard extends React.Component<MyProps, MyState> {

  static defaultProps = {
    title: 'Stranger',
    date: 'Stranger',
    img: 'default'
  };

  get_icon(name: string){
    let size = 50
    let selected_color = 'white'

    switch (name) {
      case 'graduate':
        return <FaGraduationCap className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'paper':
        return <IoIosPaper className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'money':
        return <FaMoneyBillAlt className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'science':
        return <GiMaterialsScience className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'plants':
        return <GiCarnivorousPlant className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'plane':
        return <GiAirplaneDeparture className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'ios':
        return <SiIos className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'workshop':
        return <RiSlideshowLine className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'medal':
        return <RiMedalLine className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'market':
        return <RiStockFill className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'coffee':
        return <BiCoffeeTogo className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'kaggle':
        return <FaKaggle className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'cook':
        return <GiCook className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'swift':
        return <SiSwift className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'jedi':
        return <FaJedi className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'doctor':
        return <GiPlagueDoctorProfile className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'valley':
        return <GiMonumentValley className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'website':
        return <CgWebsite className="m-auto d-block my-auto" color={selected_color} size={size}/>
      default:
        return <FaVuejs className="m-auto d-block my-auto" color={selected_color} size={size}/>
    }

  };


  render () {
    return (
      <Card border="#60D7F9" className="mt-1 mb-1">
          <Row className="m-0">
            <Col md={3}>
              {this.get_icon(this.props.img)}
            </Col>
            <Col>
              <Card.Body style={{padding: '0.5rem'}}>
                <Card.Title className='subtitle_bold pt-2' style={{fontSize: '18px', color: 'white'}}>{this.props.title}</Card.Title>
                <Card.Text className='paragraph' style={{fontSize: '12px', color: 'white'}}>{this.props.date}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
      </Card>
    )
  }
}

export default AchievCard;

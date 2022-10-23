import React from 'react';
import Image from 'react-bootstrap/Image'
import { Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import CSS from 'csstype';
import { desc } from '../content/About';
import { HiCubeTransparent, HiOfficeBuilding } from 'react-icons/hi';
import { GiBookmark, GiCutDiamond } from 'react-icons/gi';
import { IoMdSchool } from 'react-icons/io';

class AboutMenu extends React.Component {
  render() {
    return (
      <Row>
        <Col lg={11} style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Row>
            <Image src={desc.profile_img} className="ml-auto mr-auto block" style={{ height: '150px', width: '150px', backgroundColor: 'white' }} roundedCircle />
          </Row>
          <Row className="paragraph mt-3" style={{color: 'white', marginLeft: '10px'}}>
            <p >
              <IoMdSchool className='mr-1 mb-1' size={18} />
              M.Sc. Student at Università degli Studi di Milano
            </p>
          </Row>
          <Row className="paragraph" style={{color: 'white', marginLeft: '10px'}}>
            <p>
              <HiOfficeBuilding className='mr-1 mb-1' size={18} />
              Volunteer at Tree-Nation
            </p>
          </Row>
          <Row className='nav-item-custom float-right mt-4 pb-3'>
            <NavLink className='subtitle ml-5' to="/about/core" style={normalTabStyle} activeStyle={selectedTabStyle}>
              Core<HiCubeTransparent className='ml-2 mb-1' size={30}/>
            </NavLink>
          </Row>
          <Row className='nav-item-custom float-right pb-3'>
            <NavLink className='subtitle ml-5' to="/about/skills" style={normalTabStyle} activeStyle={selectedTabStyle}>
              Skills<GiBookmark className='ml-2 mb-1' size={30}/>
            </NavLink>
          </Row>
          <Row className='nav-item-custom float-right pb-3'>
            <NavLink className='subtitle ml-5' to="/about/likes" style={normalTabStyle} activeStyle={selectedTabStyle}>
              Likes<GiCutDiamond className='ml-2 mb-1' size={30}/>
            </NavLink>
          </Row>
        </Col>
        <Col lg={1} style={{ height: '35rem', borderRight: '2px solid white', maxWidth: '2px', padding: '0' }}></Col>
      </Row>
    )
  }
}

const normalTabStyle: CSS.Properties = {
  paddingRight: '15px',
  paddingLeft: '5px',
  marginRight: '-1px',
  borderRadius: '15px 0px 0px 15px'
}

const selectedTabStyle: CSS.Properties = {
    backgroundColor: 'white',
    color: 'black',
    mixBlendMode: 'screen',
    paddingRight: '15px',
    paddingLeft: '60px',
    marginRight: '-1px',
    borderRadius: '15px 0px 0px 15px'
}

// const stylesObject: CSS.Properties = {
//   normalTab: {
//     paddingRight: '15px',
//     paddingLeft: '5px',
//     borderRadius: '15px 0px 0px 15px'
//   },
//   selectedTab: {
//     backgroundColor: 'white',
//     color: 'black',
//     fontWeight: '400',
//     mixBlendMode: 'screen',
//     paddingRight: '15px',
//     paddingLeft: '5px',
//     borderRadius: '15px 0px 0px 15px'
//   }
// }

export default AboutMenu;

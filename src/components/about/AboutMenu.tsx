import React from 'react';
import Image from 'react-bootstrap/Image'
import { Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import CSS from 'csstype';
import { core } from '../../content/About';
import { HiCubeTransparent, HiOfficeBuilding } from 'react-icons/hi';
import { GiBookmark, GiCutDiamond } from 'react-icons/gi';
import { IoMdSchool } from 'react-icons/io';

import '../../assets/css/about.css'


class AboutMenu extends React.Component{
  render() {
    return (
      <Row>
        <Col xl={11} lg={11} className="mb-0 mb-lg-5" style={{ marginTop: '20px', marginBottom: '20px' }}>
          <Row>
            <Image src={core.profile_img} className="ms-auto me-auto block" style={{ height: '150px', width: '150px', backgroundColor: 'white', padding: '0' }} roundedCircle />
          </Row>
          <Row className="paragraph mt-3" style={{ marginLeft: '10px' }}>
            <p className='pe-2'>
              <IoMdSchool className='me-1 mb-1' size={18} />
              M.Sc. Student at Università degli Studi di Milano
            </p>
          </Row>
          <Row className="paragraph mb-4" style={{ marginLeft: '10px' }}>
            <p className='pe-2'>
              <HiOfficeBuilding className='me-1 mb-1' size={18} />
              Volunteer at Tree-Nation
            </p>
          </Row>
          <Row className='about_menu_row float-start float-lg-end nav-item-custom pb-0 pb-lg-3'>
            <NavLink className='about_menu_button subtitle ps-2 pb-1 pt-1 ms-2 ms-lg-1 ps-lg-5'
              to="/about" end
              style={({ isActive }) => isActive ? selectedTabStyle : normalTabStyle}>
              Core<HiCubeTransparent className='ms-2 mb-1' size={20} />
            </NavLink>
          </Row>
          <Row className='about_menu_row float-start float-lg-end nav-item-custom pb-0 pb-lg-3'>
            <NavLink className='about_menu_button subtitle ps-2 pb-1 pt-1 ms-5 ms-lg-1 ps-lg-5'
              to="/about/skills"
              style={({ isActive }) => isActive ? selectedTabStyle : normalTabStyle}>
              Skills<GiBookmark className='ms-2 mb-1' size={20} />
            </NavLink>
          </Row>
          <Row className='about_menu_row float-start float-lg-end nav-item-custom pb-0 pb-lg-3'>
            <NavLink className='about_menu_button subtitle ps-2 ms-5 pb-1 pt-1 ms-lg-1 ps-lg-5'
              to="/about/likes"
              style={({ isActive }) => isActive ? selectedTabStyle : normalTabStyle}>
              Likes<GiCutDiamond className='ms-2 mb-1' size={20} />
            </NavLink>
          </Row>
        </Col>
        <Col xl={1} lg={1} className="d-none d-lg-block" style={{ height: '35rem', borderRight: '2px solid white', maxWidth: '2px', padding: '0' }} />
        <Col xl={1} lg={1} className="d-lg-none" style={{ width: '100%', borderBottom: '2px solid white', maxHeight: '2px', padding: '0' }} />
      </Row>
    )
  }
}

const normalTabStyle: CSS.Properties = {
  paddingRight: '15px',
  paddingLeft: '5px',
  borderRadius: '15px 0px 0px 15px'
}

const selectedTabStyle: CSS.Properties = {
  backgroundColor: 'white',
  color: 'black',
  mixBlendMode: 'screen',
  paddingRight: '15px',
  paddingLeft: '45px',
  borderRadius: '15px 0px 0px 15px'
}



export default AboutMenu;

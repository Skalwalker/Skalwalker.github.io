import CSS from 'csstype';
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { GiBookmark, GiCutDiamond } from 'react-icons/gi';
import { HiCubeTransparent, HiOfficeBuilding } from 'react-icons/hi';
import { IoMdSchool } from 'react-icons/io';
import { NavLink } from 'react-router';

import { coreContent } from '../../content/About';

import '../../assets/css/about.css';

export const AboutMenu = (): React.JSX.Element => {
  return (
    <Row>
      <Col
        xl={11}
        lg={11}
        className="mb-0 mb-lg-5"
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <Row>
          <Image
            src={coreContent.profileImg}
            className="ms-auto me-auto block"
            style={{ height: '150px', width: '150px', backgroundColor: 'white', padding: '0' }}
            roundedCircle
          />
        </Row>
        <Row className="paragraph mt-3 ps-0 pe-0 " style={{ marginLeft: '10px' }}>
          <p className="pe-0 pe-sm-2 ps-0">
            <HiOfficeBuilding className="me-1 mb-1 ps-0 pe-0" size={18} />
            Software Engineer at Amazon
          </p>
        </Row>
        <Row className="paragraph mb-4" style={{ marginLeft: '10px' }}>
          <p className="pe-0 pe-sm-2 ps-0">
            <IoMdSchool className="me-1 mb-1" size={18} />
            M.Sc. in Computer Science — University of Milan
          </p>
        </Row>
        <Row className="about_menu_row float-start float-lg-end nav-item-custom pb-0 pb-lg-3 ms-2">
          <NavLink
            className="about_menu_button subtitle ps-3 pb-1 pt-1 pe-3 ms-lg-0 ps-lg-4"
            to="/about"
            end
            style={({ isActive }) => (isActive ? selectedTabStyle : normalTabStyle)}
          >
            Core
            <HiCubeTransparent className="ms-2 mb-1" size={20} />
          </NavLink>
        </Row>
        <Row className="about_menu_row float-start float-lg-end nav-item-custom pb-0 pb-lg-3 ms-4">
          <NavLink
            className="about_menu_button subtitle ps-3 pb-1 pt-1 pe-3 ms-lg-0 ps-lg-4"
            to="/about/skills"
            style={({ isActive }) => (isActive ? selectedTabStyle : normalTabStyle)}
          >
            Skills
            <GiBookmark className="ms-2 mb-1" size={20} />
          </NavLink>
        </Row>
        <Row className="about_menu_row float-start float-lg-end nav-item-custom pb-0 pb-lg-3 ms-4">
          <NavLink
            className="about_menu_button subtitle ps-3 pb-1 pt-1 pe-3 ms-lg-0 ps-lg-4"
            to="/about/likes"
            style={({ isActive }) => (isActive ? selectedTabStyle : normalTabStyle)}
          >
            Likes
            <GiCutDiamond className="ms-2 mb-1" size={20} />
          </NavLink>
        </Row>
      </Col>
      <Col
        xl={1}
        lg={1}
        className="d-none d-lg-block"
        style={{ height: '35rem', borderRight: '2px solid white', maxWidth: '2px', padding: '0' }}
      />
      <Col
        xl={1}
        lg={1}
        className="d-lg-none"
        style={{ width: '100%', borderBottom: '2px solid white', maxHeight: '2px', padding: '0' }}
      />
    </Row>
  );
};

const normalTabStyle: CSS.Properties = {
  paddingRight: '15px',
  paddingLeft: '45px',
  borderRadius: '15px 0px 0px 15px',
};

const selectedTabStyle: CSS.Properties = {
  backgroundColor: 'white',
  color: 'black',
  mixBlendMode: 'screen',
  paddingRight: '14px',
  paddingLeft: '45px',
  borderRadius: '15px 0px 0px 15px',
};

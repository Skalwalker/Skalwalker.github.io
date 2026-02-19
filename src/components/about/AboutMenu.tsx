import type { JSX } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { GiBookmark, GiCutDiamond } from 'react-icons/gi';
import { HiCubeTransparent, HiOfficeBuilding } from 'react-icons/hi';
import { IoMdSchool } from 'react-icons/io';
import { NavLink } from 'react-router';

import '../../assets/css/about.css';
import { coreContent } from '../../content';
import { Paragraph } from '../../styles/primitives';

const navClass = ({ isActive }: { isActive: boolean }): string =>
  `about_nav_btn${isActive ? ' about_nav_btn--active' : ''}`;

export const AboutMenu = (): JSX.Element => (
  <Row className="gy-3 about_menu_container">
    <Col xs={12} className="d-flex flex-column align-items-center text-center">
      <Image
        src={coreContent.profileImg}
        roundedCircle
        className="mb-3"
        style={{ height: '150px', width: '150px' }}
      />
      <Paragraph className="mb-1">
        <HiOfficeBuilding className="me-1 mb-1" size={16} />
        Software Engineer at Amazon
      </Paragraph>
      <Paragraph className="mb-0">
        <IoMdSchool className="me-1 mb-1" size={16} />
        M.Sc. in Computer Science
      </Paragraph>
    </Col>
    <Col xs={4} lg={12}>
      <NavLink to="/about" end className={navClass}>
        <HiCubeTransparent className="me-2 mb-1" size={20} />
        Core
      </NavLink>
    </Col>
    <Col xs={4} lg={12}>
      <NavLink to="/about/skills" className={navClass}>
        <GiBookmark className="me-2 mb-1" size={20} />
        Skills
      </NavLink>
    </Col>
    <Col xs={4} lg={12}>
      <NavLink to="/about/likes" className={navClass}>
        <GiCutDiamond className="me-2 mb-1" size={20} />
        Likes
      </NavLink>
    </Col>
  </Row>
);

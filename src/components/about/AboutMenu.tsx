import type { JSX } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { GiBookmark, GiCutDiamond } from 'react-icons/gi';
import { HiCubeTransparent, HiOfficeBuilding } from 'react-icons/hi';
import { IoMdSchool } from 'react-icons/io';
import { NavLink } from 'react-router';
import styled from 'styled-components';

import { coreContent } from '../../content';
import { Paragraph } from '../../styles/primitives';

export const AboutMenu = (): JSX.Element => (
  <AboutMenuRow className="gy-3">
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
      <StyledNavLink to="/about" end>
        <HiCubeTransparent className="me-2 mb-1" size={20} />
        Core
      </StyledNavLink>
    </Col>
    <Col xs={4} lg={12}>
      <StyledNavLink to="/about/skills">
        <GiBookmark className="me-2 mb-1" size={20} />
        Skills
      </StyledNavLink>
    </Col>
    <Col xs={4} lg={12}>
      <StyledNavLink to="/about/likes">
        <GiCutDiamond className="me-2 mb-1" size={20} />
        Likes
      </StyledNavLink>
    </Col>
  </AboutMenuRow>
);

const AboutMenuRow = styled(Row)`
  padding: 20px 0;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  width: 100%;
  padding: 10px 12px;
  color: white !important;
  text-align: center;
  text-decoration: none !important;
  font-family: filson-pro, sans-serif;
  font-weight: 100;
  font-style: normal;
  background-color: rgba(var(--bs-primary-rgb), 0.3);
  border: 1.5px solid var(--bs-primary);
  border-radius: 15px;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background-color: rgba(var(--bs-secondary-rgb), 0.3);
    border-color: var(--bs-secondary);
    color: white !important;
  }

  &.active {
    background-color: rgba(var(--bs-primary-rgb), 0.65);
    border-color: var(--bs-primary);
    color: white !important;
  }
`;

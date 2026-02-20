import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { BiCoffeeTogo } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import {
  FaVuejs,
  FaGraduationCap,
  FaKaggle,
  FaAmazon,
  FaJedi,
  FaMoneyBillAlt,
} from 'react-icons/fa';
import {
  GiMaterialsScience,
  GiPlagueDoctorProfile,
  GiCarnivorousPlant,
  GiAirplaneDeparture,
  GiCook,
} from 'react-icons/gi';
import { IoIosPaper } from 'react-icons/io';
import { RiMedalLine, RiStockFill, RiSlideshowLine } from 'react-icons/ri';
import { SiIos, SiSwift } from 'react-icons/si';
import styled from 'styled-components';

// import { StyledCard } from '../../components';
import { SubtitleBold, Paragraph } from '../../styles/primitives';

interface AchievCardProps {
  title: string;
  date: string;
  img: string;
  locked: boolean;
}

export const AchievCard = ({ title, date, img, locked }: AchievCardProps): React.JSX.Element => {
  const getIcon = (name: string): React.JSX.Element => {
    const iconSize = 50;
    const defaultColor = 'white';
    const className = 'm-auto d-block';

    switch (name) {
      case 'graduate':
        return <FaGraduationCap className={className} color={defaultColor} size={iconSize} />;
      case 'paper':
        return <IoIosPaper className={className} color={defaultColor} size={iconSize - 2} />;
      case 'money':
        return <FaMoneyBillAlt className={className} color={defaultColor} size={iconSize - 2} />;
      case 'science':
        return <GiMaterialsScience className={className} color={defaultColor} size={iconSize} />;
      case 'plants':
        return <GiCarnivorousPlant className={className} color={defaultColor} size={iconSize} />;
      case 'plane':
        return <GiAirplaneDeparture className={className} color={defaultColor} size={iconSize} />;
      case 'ios':
        return <SiIos className={className} color={defaultColor} size={iconSize} />;
      case 'workshop':
        return <RiSlideshowLine className={className} color={defaultColor} size={iconSize - 2} />;
      case 'medal':
        return <RiMedalLine className={className} color={defaultColor} size={iconSize} />;
      case 'market':
        return <RiStockFill className={className} color={defaultColor} size={iconSize} />;
      case 'coffee':
        return <BiCoffeeTogo className={className} color={defaultColor} size={iconSize} />;
      case 'kaggle':
        return <FaKaggle className={className} color={defaultColor} size={iconSize} />;
      case 'cook':
        return <GiCook className={className} color={defaultColor} size={iconSize} />;
      case 'swift':
        return <SiSwift className={className} color={defaultColor} size={iconSize - 2} />;
      case 'jedi':
        return <FaJedi className={className} color={defaultColor} size={iconSize - 2} />;
      case 'doctor':
        return <GiPlagueDoctorProfile className={className} color={defaultColor} size={iconSize} />;
      case 'amazon':
        return <FaAmazon className={className} color={defaultColor} size={iconSize} />;
      case 'website':
        return <CgWebsite className={className} color={defaultColor} size={iconSize - 2} />;
      default:
        return <FaVuejs className={className} color={defaultColor} size={iconSize} />;
    }
  };

  return (
    <AchievCardContainer className="mt-2 click_cards" $locked={locked}>
      <Col>
        <Row>
          <IconCol xl={3} md={3} sm={3} xs={3} className="my-auto mx-auto">
            {getIcon(img)}
          </IconCol>
          <Col xl={9} md={9} sm={9} xs={9} className="ps-0">
            <AchievCardBody>
              <AchievCardTitle className="pt-2 mb-1">
                <SubtitleBold as="span">{title}</SubtitleBold>
              </AchievCardTitle>
              <AchievCardText className="mb-1">
                <Paragraph as="span">{date}</Paragraph>
              </AchievCardText>
            </AchievCardBody>
          </Col>
        </Row>
      </Col>
    </AchievCardContainer>
  );
};

const AchievCardContainer = styled(Card)<{ $locked: boolean }>`
  height: 4.65rem;
  min-width: 270px;
  opacity: ${({ $locked }): string => ($locked ? '0.5' : '1.0')};
`;

const IconCol = styled(Col)`
  padding: 5px;
`;

const AchievCardBody = styled(Card.Body)`
  padding: 0.5rem 0 0.5rem 0;
`;

const AchievCardTitle = styled(Card.Title)`
  font-size: 18px;
`;

const AchievCardText = styled(Card.Text)`
  font-size: 12px;
`;

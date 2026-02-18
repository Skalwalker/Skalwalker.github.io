import React from 'react';

import {
  GiSushis,
  GiCookingPot,
  GiDiceTwentyFacesTwenty,
  GiBookmark,
  GiMusicalNotes,
  GiArtificialHive,
} from 'react-icons/gi';
import {
  FaPizzaSlice,
  FaCrosshairs,
  FaDog,
  FaKaggle,
  FaPython,
  FaRobot,
  FaJedi,
  FaVuejs,
  FaApple,
} from 'react-icons/fa';
import { MdPiano, MdLocationCity } from 'react-icons/md';
import { BiCoffeeTogo } from 'react-icons/bi';
import { RiStockFill, RiPlantFill } from 'react-icons/ri';

import saintsIcon from '../../assets/images/icons/saints.svg';
import rhcpIcon from '../../assets/images/icons/rhcp.svg';
import westworldIcon from '../../assets/images/icons/westworld.svg';
import hordeIcon from '../../assets/images/icons/horde.svg';
import gotIcon from '../../assets/images/icons/got.svg';
import marvelIcon from '../../assets/images/icons/avangers.svg';

export const LikeIcon = ({ img }: { img: string }): React.JSX.Element => {
  const getIcon = (): React.JSX.Element => {
    const size = 70;
    const defaultColor = 'white';
    const defaultClass = 'm-auto d-block my-auto';

    switch (img) {
      case 'sushi':
        return <GiSushis className={defaultClass} color={defaultColor} size={size} />;
      case 'pizza':
        return <FaPizzaSlice className={defaultClass} color={defaultColor} size={size} />;
      case 'fps':
        return <FaCrosshairs className={defaultClass} color={defaultColor} size={size} />;
      case 'cook':
        return <GiCookingPot className={defaultClass} color={defaultColor} size={size} />;
      case 'coffee':
        return <BiCoffeeTogo className={defaultClass} color={defaultColor} size={size} />;
      case 'dogs':
        return <FaDog className={defaultClass} color={defaultColor} size={size} />;
      case 'python':
        return <FaPython className={defaultClass} color={defaultColor} size={size} />;
      case 'piano':
        return <MdPiano className={defaultClass} color={defaultColor} size={size} />;
      case 'robot':
        return <FaRobot className={defaultClass} color={defaultColor} size={size} />;
      case 'stock':
        return <RiStockFill className={defaultClass} color={defaultColor} size={size} />;
      case 'jedi':
        return (
          <FaJedi className="m-auto d-none d-lg-block my-auto" color={defaultColor} size={size} />
        );
      case 'jazz':
        return <GiMusicalNotes className={defaultClass} color={defaultColor} size={size} />;
      case 'garden':
        return <RiPlantFill className={defaultClass} color={defaultColor} size={size} />;
      case 'ai':
        return <GiArtificialHive className={defaultClass} color={defaultColor} size={size} />;
      case 'ds':
        return <FaKaggle className={defaultClass} color={defaultColor} size={size} />;
      case 'santa':
        return <MdLocationCity className={defaultClass} color={defaultColor} size={size} />;
      case 'apple':
        return <FaApple className={defaultClass} color={defaultColor} size={size} />;
      case 'saints':
        return (
          <img
            src={saintsIcon}
            alt="Saints"
            width={size}
            height={size}
            className="m-auto d-block"
          />
        );
      case 'rhcp':
        return (
          <img src={rhcpIcon} alt="RHCP" width={size} height={size} className="m-auto d-block" />
        );
      case 'westworld':
        return (
          <img
            src={westworldIcon}
            alt="Westworld"
            width={size}
            height={size}
            className="m-auto d-block"
          />
        );
      case 'marvel':
        return (
          <img
            src={marvelIcon}
            alt="Marvel"
            width={size}
            height={size}
            className="m-auto d-block"
          />
        );
      case 'board':
        return (
          <GiDiceTwentyFacesTwenty className={defaultClass} color={defaultColor} size={size} />
        );
      case 'sandman':
        return <GiBookmark className={defaultClass} color={defaultColor} size={size} />;
      case 'wow':
        return (
          <img
            src={hordeIcon}
            alt="WoW Horde"
            width={size}
            height={size}
            className="m-auto d-block"
          />
        );
      case 'got':
        return (
          <img
            src={gotIcon}
            alt="Game of Thrones"
            width={size}
            height={size}
            className="m-auto d-block"
          />
        );
      default:
        return <FaVuejs className={defaultClass} color={defaultColor} size={size} />;
    }
  };

  return <div key={img}>{getIcon()}</div>;
};

import React from 'react';

import {GiSushis, GiCookingPot, GiDiceTwentyFacesTwenty, GiBookmark,
        GiMusicalNotes, GiArtificialHive} from 'react-icons/gi'
import {FaPizzaSlice, FaCrosshairs, FaDog, FaKaggle,
        FaPython, FaRobot, FaJedi, FaVuejs, FaApple} from 'react-icons/fa'
import {MdPiano, MdLocationCity} from 'react-icons/md'
import {BiCoffeeTogo} from 'react-icons/bi'
import {RiStockFill, RiPlantFill} from 'react-icons/ri'

import { ReactComponent as RkSaints } from '../../assets/images/icons/saints.svg';
import { ReactComponent as RkRHCP } from '../../assets/images/icons/rhcp.svg';
import { ReactComponent as RkWestworld } from '../../assets/images/icons/westworld.svg';
import { ReactComponent as RkWOW } from '../../assets/images/icons/horde.svg';
import { ReactComponent as RkGoT } from '../../assets/images/icons/got.svg';
import { ReactComponent as RkMarvel } from '../../assets/images/icons/avangers.svg';

type myState = { }
type myProps = { img: string }

class LikeDesc extends React.Component<myProps, myState> {

  static defaultProps = {
    img: 'default'
  };


  get_icon(img: string){
    let size = 70
    let selected_color = 'white'

    switch (img) {
      case 'sushi':
        return <GiSushis className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'pizza':
        return <FaPizzaSlice className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'fps':
        return <FaCrosshairs className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'cook':
        return <GiCookingPot className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'coffee':
        return <BiCoffeeTogo className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'dogs':
        return <FaDog className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'python':
        return <FaPython className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'piano':
        return <MdPiano className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'robot':
        return <FaRobot className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'stock':
        return <RiStockFill className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'jedi':
        return <FaJedi className="m-auto d-none d-lg-block my-auto" color={selected_color} size={size}/>
      case 'jazz':
        return <GiMusicalNotes className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'garden':
        return <RiPlantFill className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'ai':
        return <GiArtificialHive className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'ds':
        return <FaKaggle className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'santa':
        return <MdLocationCity className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'apple':
        return <FaApple className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'saints':
        return <RkSaints stroke="white" width={size} height={size}/>
      case 'rhcp':
        return <RkRHCP stroke="white" color="white" fill="white" width={size} height={size}/>
      case 'westworld':
        return <RkWestworld stroke="white" color="white" fill="white" width={size} height={size}/>
      case 'marvel':
        return <RkMarvel stroke="white" color="white" fill="white" width={size} height={size}/>
      case 'board':
        return <GiDiceTwentyFacesTwenty className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'sandman':
        return <GiBookmark className="m-auto d-block my-auto" color={selected_color} size={size}/>
      case 'wow':
        return <RkWOW stroke="white" color="white" fill="white" width={size} height={size}/>
      case 'got':
        return <RkGoT stroke="white" color="white" fill="white" width={size} height={size}/>
      default:
        return <FaVuejs className="m-auto d-block my-auto" color={selected_color} size={size}/>
    }
  };


  render () {
    return (
      <div>
        {this.get_icon(this.props.img)}
      </div>
    )
  }
}
export default LikeDesc;

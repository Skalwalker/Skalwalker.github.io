import React, { CSSProperties } from 'react';
import Particles from 'react-particles-js';
import particles_cfg from '../assets/particles.json';
import '../assets/css/font.css';


type myState = { }
type myProps = { style: CSSProperties }



class Background extends React.Component<myProps, myState> {
  static defaultProps = {style:{}}
  render () {
    return (
      <div id="particles-js" style={{ backgroundColor: '#070e20', height: '92vh', ...this.props.style}}>
        {/* <div className="bottom_text" style={{height: '92vh'}}>
          <Particles></Particles>
          <div className="top_text"> */}
            {this.props.children}
          {/* </div> */}
        {/* </div> */}
      </div>
    )
  }
}
export default Background;

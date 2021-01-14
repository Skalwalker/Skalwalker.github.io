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
      <div id='background' style={{height: '92vh', backgroundColor: '#070e20', ...this.props.style}}>
        <div style={{ height: 'inherit', position: "relative", margin: "0 auto"}}>
          <Particles height={window.outerHeight as any as string} params={{
            particles: {
              color: {
                value: "#ff30d6"
              },
              links: {
                color: {
                  value: "#ff30d6" //ff00cc
                },
                blink: true,
                opacity: 0.7
              },
              number: {
                value: 100
              }
            }
          }}></Particles>
          <div style={{position: "absolute", top: "0", width: "100%", height: '92vh'}}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
export default Background;

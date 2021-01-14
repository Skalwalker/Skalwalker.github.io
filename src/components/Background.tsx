import React, { CSSProperties } from 'react';
import Particles from 'react-particles-js';
import '../assets/css/font.css';


type myState = { }
type myProps = { style: CSSProperties }



class Background extends React.Component<myProps, myState> {
  static defaultProps = {style:{}}
  render () {
    return (
      // <div  style={{backgroundColor: '#070e20'}}>
        <div id='background' style={{minHeight: "100vh", backgroundColor: '#070e20', position: "relative", margin: "0 auto", ...this.props.style}}>

          <Particles params={{
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
          <div style={{position: "absolute", top: "0", width: "100%", minHeight: '100vh'}}>
            {this.props.children}
          </div>
        </div>
      // </div>
    )
  }
}
export default Background;

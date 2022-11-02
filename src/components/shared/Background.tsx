import React, { CSSProperties } from 'react';
import Particles from 'react-particles-js';
import '../../assets/css/font.css';
import NavBar from './NavBar'

type myState = { showParticles: boolean}
type myProps = { showParticles: boolean, style: CSSProperties, pageHeight: any }

class Background extends React.Component<myProps, myState> {
  static defaultProps = {
    style:{},
    showParticles: true,
    pageHeight: "100vh"
  }

  render () {

    const handleParticles = () => {
      if (this.props.showParticles) {
        return <Particles height={this.props.pageHeight} params={{
          particles: {
            color: {
              value: "#ff30d6"
            },
            links: {
              color: {
                value: "#ff30d6"
              },
              blink: true,
              opacity: 0.7
            },
            number: {
              value: 100,
              density: {
                enable: true
              }
            },
            move: {
              speed: 1
            }
          },
          fpsLimit: 30
        }}></Particles>
      }
    }

    return (
      <div id='background' style={{height: this.props.pageHeight, backgroundColor: '#070e20', ...this.props.style}}>
        <div style={{height: this.props.pageHeight, position: "relative", margin: "0 auto"}}>
          {handleParticles()}
          <div style={{position: "absolute", top: "0", width: "100%", minHeight: '100vh'}}>
            <NavBar></NavBar>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
export default Background;

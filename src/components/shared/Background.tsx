import React, { CSSProperties, useCallback } from 'react';
import '../../assets/css/font.css';
import NavBar from './NavBar'

import Particles from 'react-tsparticles';
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Container, Engine } from "tsparticles-engine";

type myState = { height: any }
type myProps = { showParticles: boolean, style: CSSProperties, pageHeight: any, navbar: boolean, children: React.ReactNode}


const BackgroundParticles = () => {

  let particle_amt = 80

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadLinksPreset(engine);
    // await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        preset: "links",
        background: {
          opacity: 0.0
        },
        particles: {
          color: {
            value: "#ff30d6"
          },
          links: {
            color: {
              value: "#ff30d6",
            },
            distance: 125
          },
          number: {
            value: particle_amt,
            density: {
              enable: true
            }
          },
          move: {
            speed: 1
          }
        },
        fpsLimit: 40,
        detectRetina: true
      }}
    />
  );
}


class Background extends React.Component<myProps, myState> {


  static defaultProps = {
    style:{},
    showParticles: false,
    navbar: true,
    pageHeight: "100vh"
  }


  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener('resize', this.updateWindowDimensions);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  // }

  // updateWindowDimensions() {
  //   if (document.documentElement.scrollHeight > this.state.height + 20) {
  //     console.log("Particles Updated");
  //     this.setState({height: document.documentElement.scrollHeight});
  //   }
  // }

  render () {

    return (
      <div id='background' style={{height: this.props.pageHeight, backgroundColor: '#070e20', ...this.props.style}}>
        <div style={{height: this.props.pageHeight, position: "relative", margin: "0 auto"}}>
          {<BackgroundParticles/>}
          <div style={{position: "absolute", top: "0", width: "100%", minHeight: '100vh'}}>
            {this.props.navbar && (<NavBar></NavBar>)}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Background;

import React, { CSSProperties } from 'react';
import Particles from 'react-particles-js';
import '../../assets/css/font.css';
import NavBar from './NavBar'

type myState = { height: any }
type myProps = { showParticles: boolean, style: CSSProperties, pageHeight: any, navbar: boolean }

class Background extends React.Component<myProps, myState> {


  static defaultProps = {
    style:{},
    showParticles: true,
    navbar: true,
    pageHeight: "100vh"
  }


  constructor(props) {
    super(props);
    this.state = {
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (document.documentElement.scrollHeight > this.state.height + 20) {
      this.setState({height: document.documentElement.scrollHeight});
    }
  }

  render () {

    const handleParticles = () => {

      if (this.props.showParticles) {
        let particle_amt = 80
        if (this.state.height > 1500) {
          particle_amt = 50
        }
        return <Particles height={this.state.height} params={{
          particles: {
            color: {
              value: "#ff30d6"
            },
            links: {
              color: {
                value: "#ff30d6",
              }
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
          fpsLimit: 30
        }}></Particles>
      }
    }

    return (
      <div id='background' style={{height: this.props.pageHeight, backgroundColor: '#070e20', ...this.props.style}}>
        <div style={{height: this.props.pageHeight, position: "relative", margin: "0 auto"}}>
          {handleParticles()}
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

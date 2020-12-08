import React, { CSSProperties } from 'react';

type myState = { }
type myProps = { style: CSSProperties }


class Background extends React.Component<myProps, myState> {
  static defaultProps = {style:{}}
  render () {
    return (
      <div id="particles-js" style={{ backgroundColor: '#070e20', height: '92vh', ...this.props.style}}>
          {this.props.children}
      </div>
    )
  }
}
export default Background;

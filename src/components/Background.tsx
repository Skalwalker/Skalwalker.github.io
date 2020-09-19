import React, { CSSProperties } from 'react';

type myState = { }
type myProps = { style: CSSProperties }
class Background extends React.Component<myProps, myState> {
  static defaultProps = {style:{}}
  // constructor(props: any) {
  //   super(props)
  // }
  render () {
    return (
      <div style={{ backgroundColor: '#070e20', height: '92vh', ...this.props.style}}>
          {this.props.children}
      </div>
    )
  }
}
export default Background;

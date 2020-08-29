import React from 'react';

class Background extends React.Component {
  render () {
    return (
      <div style={{ backgroundColor: '#617884', height: '92vh'}}>
          {this.props.children}
      </div>
    )
  }
}
export default Background;

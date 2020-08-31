import React from 'react';

class Background extends React.Component {
  render () {
    return (
      <div style={{ backgroundColor: '#000000', height: '92vh'}}>
          {this.props.children}
      </div>
    )
  }
}
export default Background;

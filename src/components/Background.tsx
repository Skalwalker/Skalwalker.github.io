import React from 'react';

class Background extends React.Component {
  render () {
    return (
      <div style={{ backgroundColor: '#617884', height: '100%'}}>
          {this.props.children}
      </div>
    )
  }
}
export default Background;

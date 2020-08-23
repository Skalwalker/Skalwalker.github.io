import React from 'react';

class Backgroud extends React.Component {
  render () {
    return (
      <div style={{ backgroundColor: '#617884' }}>
          {this.props.children}
      </div>
    )
  }
}
export default Backgroud;
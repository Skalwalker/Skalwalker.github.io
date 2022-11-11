import React from 'react';

type myState = { }
type myProps = { text: any }

class LikeDesc extends React.Component<myProps, myState> {
  render () {
    return (
      <h1 className='text-center subtitle'>{this.props.text}</h1>
    )
  }
}
export default LikeDesc;

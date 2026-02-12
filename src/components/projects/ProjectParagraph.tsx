import React from 'react';

import '../../assets/css/font.css';

type myProps = { children: React.ReactNode };
type myState = {};

class ProjectParagraph extends React.Component<myProps, myState> {
  render() {
    return (
      <p className="paragraph mt-2" style={style.paragraph_style}>
        {this.props.children}
      </p>
    );
  }
}

const style = {
  paragraph_style: {
    fontSize: '16px',
    lineHeight: 1.6,
  },
};

export default ProjectParagraph;

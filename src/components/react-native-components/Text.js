import React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <p>{this.props.children}</p>
    );
  }
}

import React from 'react';
import RiskTolerance from '../components/forms/RiskTolerance';

export default class RiskScreen extends React.Component {
  render() {
    return (
      <RiskTolerance navigation = {this.props.navigation}/>
    );
  }
}

Expo.registerRootComponent(RiskScreen);

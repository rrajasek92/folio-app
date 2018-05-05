import React from 'react';
import RiskTolerance from '../components/forms/RiskTolerance';

export default class IntroScreen extends React.Component {
  render() {
    return (
      <RiskTolerance />
    );
  }
}

Expo.registerRootComponent(IntroScreen);

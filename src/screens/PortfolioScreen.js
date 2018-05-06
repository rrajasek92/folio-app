import React from 'react';
import UserPortfolio from '../components/forms/UserPortfolio';

export default class PortfolioScreen extends React.Component {

  render() {
    return (
      <UserPortfolio navigation={this.props.navigation} />
    );
  }
}

Expo.registerRootComponent(PortfolioScreen);

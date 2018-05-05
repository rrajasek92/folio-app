import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {IntroConfig} from '../../navigation/config/IntroConfig.js';


export default class IntroStack extends React.Component{
  render() {
    const Stack = createStackNavigator(IntroConfig, {initialRouteName: 'Welcome', mode: 'card'});
    return(
      <Stack />
    );
  }
}

export {IntroStack};

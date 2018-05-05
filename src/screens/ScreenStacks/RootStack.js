import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {RootConfig} from '../../navigation/config/RootConfig.js';


export default class RootStack extends React.Component{
  render() {
    const Stack = createStackNavigator(RootConfig, {initialRouteName: 'Welcome', headerMode: 'none', mode: 'card'});
    return(
      <Stack />
    );
  }
}

export {RootStack};

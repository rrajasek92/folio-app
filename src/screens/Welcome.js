import React from 'react';
import Expo from 'expo';
import { Text, View } from 'react-native';
import {Button} from 'react-native-elements';

export default class Welcome extends React.Component {

  next = () => {
    this.props.navigation.navigate('RiskScreen');
  }

  componentDidMount() {
    setTimeout(this.next,2000);
  }

  render() {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
          <Text style = {{fontSize: 30, color: '#29c64d'}}>Welcome</Text>
        </View>
    );
  }
}

Expo.registerRootComponent(Welcome);

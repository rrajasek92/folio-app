import React from 'react';
import { Text, View } from 'react-native';

export default class PortfolioIntro extends React.Component {

  next = () => {
    this.props.navigation.navigate('PortfolioScreen');
  }

  componentDidMount() {
    setTimeout(this.next,3000);
  }

  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
        <Text style={{textAlign:'center', color:'#29c64d',fontSize:30, padding: 10}}>Please enter the dollar amounts in your current portfolio</Text>
      </View>
    );
  }
}

Expo.registerRootComponent(PortfolioIntro);

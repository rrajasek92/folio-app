import React from 'react';
import {StatusBar, View} from 'react-native';
import Expo from 'expo';
import {Provider} from 'react-redux';
import configureStore from './src/config/configureStore.js';
import {RootStack} from './src/screens/ScreenStacks/RootStack.js';
const store = configureStore();

export default class App extends React.Component {
  constructor(props){
    super();
  }

  componentDidMount(){
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <Provider store = {store}>
          <RootStack />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);

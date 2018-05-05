import React from 'react';
import Expo from 'expo';
import {Provider} from 'react-redux';
import configureStore from './src/config/configureStore.js';
import {RootStack} from './src/screens/ScreenStacks/RootStack.js';
const store = configureStore();

export default class App extends React.Component {
  constructor(props){
    super();
  }

  componentWillMount(){
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

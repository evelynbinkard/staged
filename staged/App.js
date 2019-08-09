import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Home from './components/Home';
import Options from './components/Options';
import CheckIn from './components/CheckIn';
import CollectionModels from './components/CollectionModels';
import {createStackNavigator, createAppContainer } from  'react-navigation';

const RootStack = createStackNavigator( {
  Home: Home,
  Login: Login,
  Options: Options,
  CheckIn: CheckIn,
  CollectionModels: CollectionModels
})

const App = createAppContainer(RootStack);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

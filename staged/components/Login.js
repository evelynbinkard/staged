import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default class Login extends React.Component {
    render () {
    return (
      <View style={styles.container}>
        <Text>Please enter your name, password and role</Text>
        <TextInput placeholder="name"/>
        <TextInput placeholder="password" />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
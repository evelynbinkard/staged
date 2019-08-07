import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Options extends React.Component {
    render () {
    return (
      <View style={styles.container}>
        <Text>welcome to options page</Text>
        
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
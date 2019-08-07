import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default class Home extends React.Component {
    render () {
    return (
      <View style={styles.container}>
        <Text>welcome to staged home</Text>
        <Button 
            title="Log In"
            onPress={
                () => this.props.navigation.navigate('Login')
            }/>
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
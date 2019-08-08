import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation';


export default class Options extends React.Component {
    
    render () {
    const role = this.props.navigation.getParam('role', 'no role designated');
    
    if (role === 'model'){
        return (
            <View style={styles.container}>
                <Text>Welcome!</Text>
                <Text>Your call time is:</Text>
                <Text>You are walking for the following designers:</Text>
            </View>
        );
    }
    if (role === 'producer'){
        return (
            <View style={styles.container}>
                <Text>Welcome! Would you like to:</Text>
                <Text>Check in cast</Text>
                <Text>See a show summary</Text>
            </View>
        );
    }
    if (role === 'designer'){
        return (
            <View style={styles.container}>
                <Text>Welcome! Would you like to:</Text>
                <Text>View assigned models for your collections</Text>
                <Text>View tearsheet</Text>
                <Text>Double check your playlists for your scenes</Text>
            </View>
        );
    }
    if (role === 'backstage') {
        return (
            <View style={styles.container}>
                <Text>Welcome!</Text>
                <Text>You're assigned to 'model'. S/he is/not checked in.</Text>
                <Text>You will be working with the following designers/collections</Text>
            </View>
        );
    }
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
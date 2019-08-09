import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';


export default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: '',
            role: '',
        }
      
    }

    render () {
    var data = [["producer", "designer", "model", "backstage"]];
    return (
      <View style={styles.container}>
       
        <TextInput placeholder="name" onChangeText={(text) => this.setState({text})}/>
        <TextInput placeholder="password" />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          maxHeight={300} 
          handler={(selection, row) => this.setState({role: data[selection][row]})}
          data={data}
        >

          <View style={{flex: 1}}>
            <Text>Please enter your name, password and role</Text>
          </View>

        </DropdownMenu>
        <Button title="Enter"
            onPress={
                () => this.props.navigation.navigate('Options', {
                    name: this.state.text,
                    role: this.state.role
                })
            }></Button>
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
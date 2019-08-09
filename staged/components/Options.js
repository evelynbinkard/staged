import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createStackNavigator} from 'react-navigation';
import axios from 'axios';




export default class Options extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            calltime: '',
            designers: [],
            name: this.props.navigation.getParam('name'),
            role: this.props.navigation.getParam('role'),
            dressersModel: ''
        }
        
    }

    componentDidMount() {
        let name = this.state.name;
        
        axios.get(`http://localhost:3000/designers/${name}`)
        .then(results => this.setState({designers: results.data}))
        .catch(err => console.log(err))
    }
    
    render () {
        const role = this.props.navigation.getParam('role', 'no role designated');
        const name = this.props.navigation.getParam('name', 'no name')
    
    if (role === 'model'){
        const designerlist = this.state.designers.map(designer => {
            return (
                <Text>{designer.name}</Text>
            )
        })
        return (
            <View style={styles.container}>
                <Text>Welcome, {name}!</Text>
                <Text>Your call time is: 18.00</Text>
                <Text>You are walking for the following designers:</Text>
                    <Text>

                    {designerlist}
                </Text>
            </View>
        );
    }
    if (role === 'producer') {
        return (
            <View style={styles.container}>
                <Text>Welcome, Linden! Would you like to:</Text>
                <Button 
                    title="Check in personnel"
                    onPress={
                        () => this.props.navigation.navigate('CheckIn')
                    }
                />
                {/* <Text>See a show summary</Text> */}
            </View>
        );
    }
    if (role === 'designer'){
        return (
            <View style={styles.container}>
                <Text>Welcome, {name}! Would you like to:</Text>
                <Button 
                    title="View models assigned to collection"
                    onPress={
                        () => this.props.navigation.navigate('CollectionModels', {name: this.state.name})
                    }
                />
                <Text>View tearsheet</Text>
                <Text>Double check your playlists for your scenes</Text>
            </View>
        );
    }
    if (role === 'backstage') {
        return (
            <View style={styles.container}>
                <Text>Welcome, {name}!</Text>
                <Button
                    title="Check in on your model"
                    onPress= {() => this.props.navigation.navigate('DressersModel', {name: this.state.name})}
                />
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
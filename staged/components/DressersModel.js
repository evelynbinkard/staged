import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { createStackNavigator} from 'react-navigation';
import axios from 'axios';



export default class CollectionModels extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            name: this.props.navigation.getParam('name'),
            model: '',
            checkedIn: [],

        }
       
    }
    componentDidMount () {
        axios.get(`http://localhost:3000/present/${this.state.name}`)
        .then(result => this.setState({model: result.data.name.model_name, checkedIn: result.data.present.rows}))
        
    }
    render() {
        let present = this.state.checkedIn.length > 0 ? 'is': 'is not';
        return (
            <View>
                <Text>Your model, {this.state.model} {present} checked in!</Text>
            </View>
        )
    }
}
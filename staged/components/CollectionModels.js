import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { createStackNavigator} from 'react-navigation';
import axios from 'axios';


export default class CollectionModels extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            models: [],
            backstages: [],
            designers: [],
            name: this.props.navigation.getParam('name', 'no name')
        }
        this.checkIn = this.checkIn.bind(this)
    }
    componentDidMount () {
        axios.get(`http://localhost:3000/collectionmodels/${this.state.name}`)
        .then(result => console.log(result))
    }
    render() {
        <View>
            <Text>Here are your models, {this.state.name}</Text>
        </View>
    }
}
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
       
    }
    componentDidMount () {
        axios.get(`http://localhost:3000/collectionmodels/${this.state.name}`)
        .then(result => this.setState({models: result.data}))
    }
    render() {
        const modelNames = this.state.models.map(model => {
            return (
                <Text>{model}</Text>
                )   
        });
        
        return (
            <View>
                <Text>Here are your models:</Text>
                <ScrollView>
                    <Text>{modelNames}</Text>
                </ScrollView>
            </View>
        )
        
    }
}
import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { createStackNavigator} from 'react-navigation';

import axios from 'axios';

export default class CheckIn extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            models: [],
            backstages: [],
            designers: [],
        }
        this.checkIn = this.checkIn.bind(this)
    }

    checkIn (name) {
        axios.post(`http://localhost:3000/markpresent/${name}`)
        
            .then(results => this.setState({models: results.data}))
            .catch(err => console.log('compdidmount', err))
    }

    componentDidMount () {
       axios.get('http://localhost:3000/checkin')
       .then(results => this.setState({models: results.data}))
       .catch(err => console.log('compdidmount', err)) 
    }

    render () {
        const mappedModels = this.state.models.map(model => {
            return (
               <View>
                    <Text onPress={ this.checkIn.bind(this, model.name) }>Name: {model.name}</Text>
                    <Text>Phone: {model.phone}</Text>
                    <Text>-------------------------</Text>      
              </View>
            )
        })
        
        return (
            <View style={styles.container}>
                <Text>Click Names to check in:</Text>
                <ScrollView>{mappedModels}</ScrollView>
            </View> 
        )
    }
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


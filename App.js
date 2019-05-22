import React, {Component} from 'react';
import {AppRegistry, Text, View, Image} from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}} >
                <Text>Hello {this.props.name}! </Text>
            </View>
        )
    }

}

export default class LotsOfGreetings extends Component {
    render() {

        return (

            <View style={{alignItems: 'center', top: 150}} >
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        );
    }
}



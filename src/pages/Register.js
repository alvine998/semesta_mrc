import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <View>
                <Text style={{fontFamily:'RedHatDisplay-Regular'}}>Hello Register </Text>
            </View>
        )
    }
}
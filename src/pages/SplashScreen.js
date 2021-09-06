import React, { Component } from 'react'
import { Image, Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { logo } from '../assets';
import normalize from 'react-native-normalize';

export default class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state={}
    }

    componentDidMount(){
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'))
        }, 10000);
    }

    render(){
        return(
            <View style={{backgroundColor:'#A746A3', height:'100%'}}>
                <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(120)}}>
                    <Image source={logo} style={{width:normalize(300), height:normalize(300)}}/>
                </View>
            </View>
        )
    }
}
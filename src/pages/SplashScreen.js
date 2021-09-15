import React, { Component } from 'react'
import { Image, Text, View } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { logo } from '../assets';
import normalize from 'react-native-normalize';
import AsyncStorage from '@react-native-community/async-storage';

export default class SplashScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            values:'',
            login: false,
            valEmail:''
        }
    }

    getDataLogin = async () => {
        await AsyncStorage.getItem('emailkey')
        .then(
            (values) => {
                console.log(values)
                this.setState({valEmail:values})
                if(!values){
                    this.setState({login: false})
                    setTimeout(() => {
                        this.props.navigation.dispatch(StackActions.replace('Login'))
                        }, 3000)
                } else {
                    this.setState({login: true})
                    setTimeout(() => {
                        this.props.navigation.dispatch(StackActions.replace('Home'))
                        }, 3000);
                }
            }
        )
    }

    componentDidMount(){
        this.getDataLogin();
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
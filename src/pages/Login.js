import { Button, Icon } from 'native-base';
import React, { Component } from 'react'
import { Image, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../assets';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            collection: []
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(e) {
        this.setState({ email: e })
    }

    handlePassword(e) {
        this.setState({ password: e })
    }

    render() {
        const navigate = this.props;
        return (
            <View style={{ backgroundColor: '#A746A3', height: '100%' }}>
                <ScrollView style={{ paddingLeft: normalize(20), paddingRight: normalize(20) }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: normalize(50) }}>
                        <Image source={logo} style={{ width: normalize(300), height: normalize(250) }} />
                        <TextInput
                            value={this.state.email}
                            onChange={this.handleEmail}
                            placeholder="Email"
                            underlineColorAndroid="black"
                            style={{ width: normalize(250) }}
                        />
                        <View style={{flexDirection:'row'}}>
                            <TextInput
                                value={this.state.password}
                                onChange={this.handlePassword}
                                placeholder="Password"
                                secureTextEntry={true}
                                underlineColorAndroid="black"
                                style={{ width: normalize(250) }}
                            />
                        </View>
                    </View>
                    <View style={{ paddingLeft: normalize(50), paddingRight: normalize(50), paddingTop: normalize(10) }}>
                        <Button full warning style={{ backgroundColor: '#93108D', borderRadius: 10, height: normalize(40) }}>
                            <Text style={{ color: 'white', fontFamily: 'RedHatDisplay-Regular', fontSize: normalize(20), fontWeight: 'bold' }}>LOGIN</Text>
                        </Button>
                        <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(10)}}>
                            <Text style={{ color: 'white', fontFamily: 'RedHatDisplay-Regular', fontSize: normalize(20) }}>Atau</Text>
                        </View>
                        <View style={{paddingTop:normalize(10)}}/>
                        <Button full warning onPress={() => this.props.navigation.navigate('Register')} style={{ backgroundColor: '#55BF3B', borderRadius: 10, height: normalize(40) }}>
                            <Text style={{ color: 'white', fontFamily: 'RedHatDisplay-Regular', fontSize: normalize(20), fontWeight: 'bold' }}>DAFTAR</Text>
                        </Button>
                    </View>

                    <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(20)}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={{ color: 'white', fontFamily: 'RedHatDisplay-Regular', fontSize: normalize(20), fontWeight:'bold' }}>Lewati</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
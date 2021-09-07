import { Body, Button, Header, Icon, Left } from 'native-base';
import React, { Component } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

export default class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            nama:'',
            nohp:'',
            email:'',
            password:'',
            collection:[]
        };
        this.handleNama = this.handleNama.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleNohp = this.handleNohp.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleEmail(e) {
        this.setState({ email: e })
    }

    handleNama(e) {
        this.setState({ nama: e })
    }

    handleNohp(e) {
        this.setState({ nohp: e })
    }

    handlePassword(e) {
        this.setState({ password: e })
    }

    render(){
        const navigate = this.props;
        return(
            <View style={{backgroundColor:'#A746A3', height:'100%'}}>
                <ScrollView>
                    <Header transparent>
                        <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <Icon type={"FontAwesome5"} name="chevron-left" />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <Text style={{fontFamily:'RedHatDisplay-Regular', color:'white', fontWeight:'bold', fontSize:normalize(24)}}>Registrasi</Text>
                        </Body>
                    </Header>
                    <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(50)}}>
                        <View>
                            <TextInput
                                value={this.state.nama}
                                onChange={this.handleNama}
                                placeholder="Nama"
                                underlineColorAndroid="black"
                                style={{width:normalize(280)}}
                            />
                            <TextInput
                                value={this.state.email}
                                onChange={this.handleEmail}
                                placeholder="Email"
                                underlineColorAndroid="black"
                                style={{width:normalize(280)}}
                            />
                            <TextInput
                                value={this.state.nohp}
                                onChange={this.handleNohp}
                                placeholder="Nomor Ponsel"
                                keyboardType="number-pad"
                                underlineColorAndroid="black"
                                maxLength={12}
                                style={{width:normalize(280)}}
                            />
                            <TextInput
                                value={this.state.password}
                                onChange={this.handlePassword}
                                placeholder="Password"
                                secureTextEntry={true}
                                underlineColorAndroid="black"
                                style={{width:normalize(280)}}
                            />

                            <Button full warning style={{backgroundColor:'#55BF3B', height:normalize(40), borderRadius:10}}>
                                <Text style={{ color: 'white', fontFamily: 'RedHatDisplay-Regular', fontSize: normalize(20), fontWeight: 'bold' }}>DAFTAR</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
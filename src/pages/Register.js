import axios from 'axios';
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

    componentDidMount(){
        axios.get("https://182.253.124.66:3000/users")
            .then( res => {
                const collection = res.data
                console.log(collection);
                this.setState({collection})
            })
            .catch(err => {
                console.log("API Error: " , err.message);
            });
    }

    handleSubmit () {
        const user = {
            nama: 'this.state.nama',
            email: 'this.state.email',
            nohp: 'this.state.nohp',
            password: 'this.state.password'
        }

        axios.post(`https://182.253.124.66:3000/users`, {user})
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.props.navigation.navigate("Login")
            })
            .catch(err => {
                console.log("API Error: " , err.message);
            });
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
                    <View>
                        {this.state.collection && this.state.collection.map((collections, index) => {
                            console.log(collections);
                            return(
                                <Text>{collections.nama}</Text>
                            )
                        })}
                    </View>
                    <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(50)}}>
                        <View>
                            <TextInput
                                value={this.state.nama}
                                onChangeText={this.handleNama}
                                placeholder="Nama"
                                underlineColorAndroid="white"
                                style={{width:normalize(280), color:'white'}}
                            />
                            <TextInput
                                value={this.state.email}
                                onChangeText={this.handleEmail}
                                placeholder="Email"
                                underlineColorAndroid="white"
                                style={{width:normalize(280), color:'white'}}
                            />
                            <TextInput
                                value={this.state.nohp}
                                onChangeText={this.handleNohp}
                                placeholder="Nomor Ponsel"
                                keyboardType="number-pad"
                                underlineColorAndroid="white"
                                maxLength={12}
                                style={{width:normalize(280), color:'white'}}
                            />
                            <TextInput
                                value={this.state.password}
                                onChangeText={this.handlePassword}
                                placeholder="Password"
                                secureTextEntry={true}
                                underlineColorAndroid="white"
                                style={{width:normalize(280), color:'white'}}
                            />

                            <Button full warning style={{backgroundColor:'#55BF3B', height:normalize(40), borderRadius:10}} onPress={this.handleSubmit}>
                                <Text style={{ color: 'white', fontFamily: 'RedHatDisplay-Regular', fontSize: normalize(20), fontWeight: 'bold' }}>DAFTAR</Text>
                            </Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
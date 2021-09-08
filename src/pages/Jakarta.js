import { Body, Header, Icon, Left } from 'native-base';
import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import normalize from 'react-native-normalize';

export default class Jakarta extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }

    render(){
        return(
            <View style={{backgroundColor:'#A746A3', height:'100%'}}>
                <Header transparent style={{backgroundColor:'#93108D', height:normalize(100), borderBottomRightRadius:50}}>
                <Left>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon type={"FontAwesome5"} name="chevron-left" />
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{fontFamily:'RedHatDisplay-Regular', color:'white', fontWeight:'100', fontSize:normalize(24)}}>Area Jakarta</Text>
                </Body>
                </Header>
                <ScrollView style={{paddingLeft:normalize(20), paddingRight:normalize(20)}}>
                    <View style={{paddingTop:normalize(25), paddingBottom:normalize(20)}}>
                        <View style={styles.theme1}>
                            <Text style={styles.text1}>
                            Data ini akan diteruskan kepada MRC yang berada
                            di wilayah Jakarta
                            </Text>
                        </View>
                        <View style={{paddingTop:normalize(25)}}>
                            <View style={styles.theme2}>
                                <View>
                                    <Text style={styles.text2}>Nama Lengkap</Text>
                                    <View style={styles.border1}>
                                        <TextInput
                                            style={{padding:normalize(5), paddingLeft:normalize(20)}}
                                        />
                                    </View>
                                </View>

                                <View style={{paddingTop:normalize(15)}}>
                                    <Text style={styles.text2}>Alamat</Text>
                                    <View style={styles.border2}>
                                        <TextInput
                                            multiline={true}
                                            numberOfLines={4}
                                            style={{padding:normalize(5), paddingLeft:normalize(20)}}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    theme1:{
        backgroundColor:'#93108D',
        height:normalize(70),
        borderRadius:20,
        padding:normalize(15)
    },
    text1:{
        fontFamily:'RedHatDisplay-Regular', 
        color:'white', 
        fontWeight:'100', 
        fontSize:normalize(18)
    },
    text2:{
        fontFamily:'RedHatDisplay-Regular', 
        color:'white', 
        fontWeight:'100', 
        fontSize:normalize(22)
    },
    border1:{
        backgroundColor:'white',
        width:normalize(300),
        height:normalize(40),
        borderRadius:10,
        marginTop:normalize(10)
    },
    border2:{
        backgroundColor:'white',
        width:normalize(300),
        height:normalize(100),
        borderRadius:10,
        marginTop:normalize(10)
    },
    theme2:{
        backgroundColor:'#93108D',
        height:normalize(500),
        borderRadius:20,
        padding:normalize(15)
    },
})
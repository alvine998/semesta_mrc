import AsyncStorage from "@react-native-community/async-storage";
import { Body, Button, Header, Icon, Left } from "native-base";
import React, {Component} from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";
import { bca } from "../assets";
import axios from "axios";
import * as ImagePicker from 'react-native-image-picker';

export default class Payment extends Component{
    constructor(props){
        super(props);
        this.state = {
            nama:'',
            alamat:'',
            nohp:'',
            tanggal:'',
            keluhan:'',
            waktu:'',
            singleFile:[],
            foto: null
        };
    }

    getDataPrev = async () => {
        await AsyncStorage.getItem('dataBooking')
        .then(
            req => JSON.parse(req)
        )
        .then(
            json => {
                        console.log(json)
                        this.setState({
                            nama: json.collection.nama,
                            alamat: json.alamat,
                            nohp: json.collection.nohp,
                            tanggal: json.tanggal,
                            keluhan: json.keluhan,
                            waktu: [json.hour, json.hour2, " : ", json.minute, json.minute2]
                        })
                }
        )
        .catch(
            error => console.log(error)
        )
    }

    componentDidMount(){
        this.getDataPrev();
    }

    // handleChoosePhoto(){
    //     const options = {
    //         noData: true,
    //     }
    //     ImagePicker.launchImageLibrary(options, foto => {
    //         const singleFile = foto.assets;
    //         console.log("ge", JSON.stringify(singleFile.fileName))
    //         this.setState({singleFile})
    //     })
    // }

    render(){
        const {nama, alamat, keluhan, tanggal, nohp, waktu, singleFile} = this.state;
        return(
            <View style={{backgroundColor:'#A746A3', height:'100%'}}>
                <Header transparent style={{backgroundColor:'#93108D', height:normalize(100), borderBottomRightRadius:50}}>
                <Left>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:'white'}}/>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{fontFamily:'RedHatDisplay-Regular', color:'white', fontWeight:'100', fontSize:normalize(24)}}>Pembayaran</Text>
                </Body>
                </Header>
                <ScrollView>
                    <View>
                        {/* Data Pemesanan */}
                        <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(20)}}>
                            <View style={styles.theme1}>
                                <Text style={styles.text1}>Data Pemesan</Text>
                                <View>
                                    <Text style={[styles.text2, {paddingTop:normalize(20)}]}>Nama : {nama}</Text>
                                    <Text style={styles.text2}>Alamat : {alamat}</Text>
                                    <Text style={styles.text2}>No Hp : {nohp}</Text>
                                    <Text style={styles.text2}>Tanggal : {tanggal}</Text>
                                    <Text style={styles.text2}>Waktu : {waktu}</Text>
                                    <Text style={styles.text2}>Keluhan : {keluhan}</Text>
                                </View>
                            </View>

                            <View style={{paddingTop:normalize(20)}} />
                            {/* Pembayaran */}
                            <View style={styles.theme2}>
                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                    <View style={styles.border}>
                                        <Image source={bca} style={{height:normalize(50), width:normalize(100)}} />
                                    </View>
                                    <Text style={styles.text2}>Ke Rekening : 5771159428</Text>
                                    <Text style={styles.text2}>a.n Denny Adrian</Text>
                                    <Text style={[styles.text2, {textAlign:'justify', paddingTop:normalize(20)}]}>
                                        Setelah melakukan pembayaran admin
                                        akan melakukan verifikasi pembayaran
                                        anda melalui whatsapp atau email.
                                        Pastikan nomor ponsel benar dan terhubung ke whatsapp
                                        dan alamat email yang benar.
                                    </Text>
                                    
                                    {/* Image Picker
                                    <View style={{paddingTop:normalize(20)}}>
                                        { singleFile != null ? (<Text>{singleFile.height}</Text> ) : null}
                                        <Button full primary onPress={() => this.handleChoosePhoto()}>
                                            <Text>Select</Text>
                                        </Button>
                                    </View> */}
                                </View>
                            </View>

                            <View style={{paddingLeft:normalize(30), paddingRight:normalize(30), paddingBottom:normalize(20), paddingTop:normalize(20)}}>
                                <Button onPress={() => this.props.navigation.navigate('BuktiPembayaran')} full style={{borderRadius:10, height:normalize(40), backgroundColor:'#55BF3B', width:normalize(300)}}>
                                    <Text style={styles.text4}>Selanjutnya</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text1:{
        fontFamily:'RedHatDisplay-Regular', 
        color:'white', 
        fontWeight:'100', 
        fontSize:normalize(24),
        textAlign:'center'
    },
    text2:{
        fontFamily:'RedHatDisplay-Regular', 
        color:'white', 
        fontWeight:'100', 
        fontSize:normalize(20),
        textAlign:'left'
    },
    theme1:{
        height:normalize(450),
        width:normalize(300),
        backgroundColor:'#93108D',
        borderRadius:20,
        padding:normalize(20)
    },
    theme2:{
        height:normalize(350),
        width:normalize(300),
        backgroundColor:'#93108D',
        borderRadius:20,
        padding:normalize(20)
    },
    border:{
        height:normalize(60),
        width:normalize(120),
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})
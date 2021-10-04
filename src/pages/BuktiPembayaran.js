import Clipboard from "@react-native-community/clipboard";
import { Button } from "native-base";
import React, {Component} from "react";
import { Image, Linking, ScrollView, Text, ToastAndroid, View } from "react-native";
import normalize from "react-native-normalize";
import { waiting } from "../assets";

export default class BuktiPembayaran extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    showToast(){
        ToastAndroid.show('Nomor Telepon Disalin', ToastAndroid.SHORT);
        Clipboard.setString('081223421842');
    }

    render(){
        return(
            <View style={{backgroundColor:'#A746A3', height:'100%'}}>
                <ScrollView>
                    <View style={{alignItems:'center', justifyContent:'center', paddingTop:normalize(100)}}>
                        <Image
                            source={waiting}
                            style={{height:normalize(300), width:normalize(250)}}
                        />
                        <View style={{paddingLeft:normalize(30), paddingRight:normalize(30)}}>
                            <Text style={{fontFamily:'RedHatDisplay-Regular', fontSize:normalize(24), color:'white'}}>Harap Menunggu Verifikasi Pembayaran Anda Ya</Text>
                            <Text style={{fontFamily:'RedHatDisplay-Regular', fontSize:normalize(20), color:'white'}}>Hubungi Nomor Ini Untuk Kirim Bukti Pembayaran 081223421842</Text>
                            <Text style={{fontFamily:'RedHatDisplay-Regular', fontSize:normalize(20), color:'white', textAlign:'center', paddingTop:normalize(10)}}>Atau</Text>
                            
                        </View>
                        <View style={{paddingTop:normalize(10), paddingBottom:normalize(20)}}>
                            <Button onPress={() => Linking.openURL(`https://wa.me/6281223421842?text=Halo+Saya+Mau+Kirim+Bukti+Transfer`)} full success style={{borderRadius:10, height:normalize(40), width:normalize(280), alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontFamily:'RedHatDisplay-Regular', fontSize:normalize(20), color:'white'}}>Whatsapp Disini</Text>
                            </Button>
                            <View style={{paddingTop:normalize(10)}}/>
                            <Button onPress={() => this.showToast()} full primary style={{borderRadius:10, height:normalize(40), width:normalize(280), alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontFamily:'RedHatDisplay-Regular', fontSize:normalize(20), color:'white'}}>Salin Nomor Telepon</Text>
                            </Button>
                            <View style={{paddingTop:normalize(20)}}/>
                            <Button onPress={() => this.props.navigation.push('Home')} full danger style={{borderRadius:10, height:normalize(40), width:normalize(280), alignItems:'center', justifyContent:'center'}}>
                                <Text style={{fontFamily:'RedHatDisplay-Regular', fontSize:normalize(20), color:'white'}}>Kembali</Text>
                            </Button>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>
        )
    }
}
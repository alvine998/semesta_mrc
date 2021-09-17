import { Button } from "native-base";
import React, {Component} from "react";
import { Image, ScrollView, Text, View } from "react-native";
import normalize from "react-native-normalize";
import { waiting } from "../assets";

export default class BuktiPembayaran extends Component{
    constructor(props){
        super(props);
        this.state={

        }
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
                        </View>
                        <View style={{paddingTop:normalize(30)}}>
                            <Button onPress={() => this.props.navigation.navigate('Home')} full danger style={{borderRadius:10, height:normalize(40), width:normalize(280), alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontFamily:'RedHatDisplay-Regular', fontSize:normalize(20), color:'white'}}>Kembali</Text>
                            </Button>
                        </View>
                    </View>
                    
                </ScrollView>
            </View>
        )
    }
}
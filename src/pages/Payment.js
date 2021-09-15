import AsyncStorage from "@react-native-community/async-storage";
import { Body, Header, Icon, Left } from "native-base";
import React, {Component} from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class Payment extends Component{
    constructor(props){
        super(props);
        this.state = {
            nama:'',
            alamat:'',
            nohp:'',
            tanggal:'',
            keluhan:''
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
                            keluhan: json.keluhan
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

    render(){
        const {nama, alamat, keluhan, tanggal, nohp} = this.state;
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
                                    <Text style={styles.text2}>Keluhan : {keluhan}</Text>
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
    }
})
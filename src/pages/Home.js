import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import normalize from 'react-native-normalize';
import { bandung, bannerpromo, bogor, depok, jakarta, jogja, logo, surabaya } from '../assets';
import {SliderBox} from 'react-native-image-slider-box';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            images:[
                "http://semestabertasbihgroup.com/wp-content/uploads/2021/06/8-1024x576.png",
                "http://semestabertasbihgroup.com/wp-content/uploads/2021/06/1-1024x576.png",
                "http://semestabertasbihgroup.com/wp-content/uploads/2021/06/3-1024x576.png"
            ]
        }
    }

    render(){
        const navigate = this.props;
        return(
            <View style={{backgroundColor:'#A746A3', height:'100%'}}>
                <ScrollView>
                    <View style={styles.theme1}>
                        <View style={styles.logoPosition}>
                            <Image source={logo} style={{width:normalize(300), height:normalize(300)}} />
                        </View>
                    </View>

                    <View style={{paddingTop:normalize(50)}}>
                        <SliderBox autoplay circleLoop images={this.state.images}/>
                    </View>
                    {/* Area Terapi MRC */}
                    <View style={styles.position2}>
                        <View style={styles.theme2}>
                            <View>
                                <Text style={styles.text1}>MAU TERAPI DIMANA ?</Text> 
                            </View>
                            <View style={styles.position3}>
                                <TouchableOpacity>
                                    <View style={styles.square1}>
                                        <Image source={jakarta} style={{width:normalize(60), height:normalize(80)}} />   
                                    </View>
                                    <Text style={styles.text2}>JAKARTA</Text> 
                                </TouchableOpacity>
                                <View style={{paddingRight:normalize(20)}} />
                                <TouchableOpacity>
                                    <View style={styles.square1}>
                                        <Image source={bogor} style={{width:normalize(60), height:normalize(80)}} />   
                                    </View>
                                    <Text style={styles.text2}>BOGOR</Text> 
                                </TouchableOpacity>
                                <View style={{paddingRight:normalize(20)}} />
                                <TouchableOpacity>
                                    <View style={styles.square1}>
                                        <Image source={depok} style={{width:normalize(60), height:normalize(80)}} />   
                                    </View>
                                    <Text style={styles.text2}>DEPOK</Text> 
                                </TouchableOpacity>
                            </View>
                            <View style={styles.position4}>
                                <TouchableOpacity onPress={() => Alert.alert("Belum Tersedia Di Bandung")}>
                                    <View style={styles.square1}>
                                        <Image source={bandung} style={{width:normalize(60), height:normalize(80)}} />   
                                    </View>
                                    <Text style={styles.text2}>BANDUNG</Text> 
                                </TouchableOpacity>
                                <View style={{paddingRight:normalize(20)}} />
                                <TouchableOpacity onPress={() => Alert.alert("Belum Tersedia Di Jogja")}>
                                    <View style={styles.square1}>
                                        <Image source={jogja} style={{width:normalize(60), height:normalize(80)}} />   
                                    </View>
                                    <Text style={styles.text2}>JOGJA</Text> 
                                </TouchableOpacity>
                                <View style={{paddingRight:normalize(20)}} />
                                <TouchableOpacity onPress={() => Alert.alert("Belum Tersedia Di Surabaya")}>
                                    <View style={styles.square1}>
                                        <Image source={surabaya} style={{width:normalize(60), height:normalize(80)}} />   
                                    </View>
                                    <Text style={styles.text2}>SURABAYA</Text> 
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Spesial Promo */}
                        <View style={{paddingTop:normalize(40)}}>
                            <Text style={styles.text3}>SPESIAL PROMO</Text>
                            <View style={{alignItems:'center', justifyContent:'center'}}>
                                <Image source={bannerpromo} style={{width:normalize(300), height:normalize(185)}} />
                            </View>
                        </View>
                    </View>
                    {/* copyright */}
                    <View>
                        <Text style={{textAlign:'center', color:'white', fontSize:normalize(12)}}>Copyright Semesta Group Bertasbih 2021</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    theme1:{
        height:normalize(220),
        width:'100%',
        borderBottomRightRadius:100,
        backgroundColor:'#93108D'
    },
    logoPosition:{
        padding:normalize(20),
        marginTop:normalize(-60),
        marginLeft:normalize(20)
    },
    theme2:{
        backgroundColor:'#93108D',
        borderRadius:20,
        height:normalize(300),
        width:'100%',
        padding:normalize(20),
    },
    position2:{
        paddingTop:normalize(50),
        paddingLeft:normalize(20),
        paddingRight:normalize(20),
        paddingBottom:normalize(20)
    },
    position3:{
        flexDirection:'row',
        padding:normalize(20),
        alignItems:'center',
        justifyContent:'center'
    },
    position4:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:normalize(15)
    },
    text1:{
        fontFamily:'RedHatDisplay-Regular',
        fontSize:normalize(24),
        color:'white',
        textAlign:'center'
    },
    square1:{
        height:normalize(70),
        width:normalize(70),
        backgroundColor:'#A746A3',
        alignItems:'center',
        justifyContent:'center'
    },
    text2:{
        fontFamily:'RedHatDisplay-Regular',
        fontSize:normalize(18),
        color:'white',
        textAlign:'center'
    },
    text3:{
        fontFamily:'RedHatDisplay-Bold',
        fontSize:normalize(24),
        color:'white',
        textAlign:'center'
    }
})
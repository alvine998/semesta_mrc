import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import normalize from 'react-native-normalize';
import { logo } from '../assets';
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

                    <View style={styles.position2}>
                        <View style={styles.theme2}>
                            <View >
                                <Text style={styles.text1}>MAU TERAPI DIMANA ?</Text> 
                            </View>
                            <View style={styles.position3}>
                                <View style={styles.square1}>

                                </View>
                                <View style={{paddingRight:normalize(20)}} />
                                <View style={styles.square1}>

                                </View>
                                <View style={{paddingRight:normalize(20)}} />
                                <View style={styles.square1}>

                                </View>
                            </View>
                            <View style={styles.position3}>
                                <View style={styles.square1}>

                                </View>
                                <View style={{paddingRight:normalize(20)}} />
                                <View style={styles.square1}>

                                </View>
                                <View style={{paddingRight:normalize(20)}} />
                                <View style={styles.square1}>

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
        height:normalize(280),
        width:'100%',
        padding:normalize(20)
    },
    position2:{
        paddingTop:normalize(50),
        paddingLeft:normalize(20),
        paddingRight:normalize(20)
    },
    position3:{
        flexDirection:'row',
        padding:normalize(20),
        alignItems:'center',
        justifyContent:'center'
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
        backgroundColor:'#A746A3'
    }
})
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { Body, Button, CheckBox, Header, Icon, Left, ListItem } from 'native-base';
import React, { Component } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import normalize from 'react-native-normalize';

export default class Depok extends Component{
    constructor(props){
        super(props);
        this.state={
            checkeds:false,
            nama:'',
            alamat:'',
            email:'',
            nohp:'',
            keluhan:'',
            values:'',
            collection:[],
            date:'',
            hour:'',
            hour2:'',
            minute:'',
            minute2:'',
            area:''
        };
    }

    getData = async () => {
        await AsyncStorage.getItem('emailkey')
        .then(
            (values, collection) => {
                console.log(values);
                this.setState({email: values})
                axios.get(`https://api.tutorialbyalvine.com/users/${values}`)
                .then(
                    res => {
                        collection = res.data;
                        console.log(collection);
                        this.setState({collection});
                    }
                ) .catch(err => {
                    console.log(err)
                })
            }
        )
    }

    componentDidMount(){
        this.getData();
    }

    setDataBooking = async () => {
        const dataBook = {
            alamat: this.state.alamat,
            keluhan: this.state.keluhan,
            collection: this.state.collection,
            tanggal: this.state.date,
            hour: this.state.hour,
            hour2: this.state.hour2,
            minute: this.state.minute,
            minute2: this.state.minute2,
            area: this.state.area
        }
        try{
            await AsyncStorage.setItem('dataBooking', JSON.stringify(dataBook))
        }
        catch(err){
            console.log(err);
        }
    }
    
    onNext(){
        if(!this.state.collection.nama){
            Alert.alert("Harap isi bagian nama")
        }
        else if(!this.state.collection.email){
            Alert.alert("Harap isi bagian email")
        }
        else if(!this.state.collection.nohp){
            Alert.alert("Harap isi bagian nomor ponsel")
        }
        else if(!this.state.keluhan){
            Alert.alert("Harap isi bagian keluhan")
        }
        else if(!this.state.alamat){
            Alert.alert("Harap isi bagian alamat")
        }
        else if(this.state.checkeds){
            this.props.navigation.navigate('BuktiPembayaran')
        }
        else {
            this.props.navigation.navigate('Payment')
        }
    }
    

    handleAlamat(event){
        this.setState({alamat: event})
    }

    handleEmail(event){
        this.setState({collection: event})
    }
    handleNohp(event){
        this.setState({collection: event})
    }
    handleKeluhan(event){
        this.setState({keluhan: event})
    }

    handleNama(event){
        this.setState({collection: event})
    }

    handleNumber(event){
        this.setState({hour2: event.replace(/[^0]/g, '')})
    }

    handleNumber2(event){
        this.setState({hour2: event.replace(/[^0-9]/g, '')})
    }

    handleNumber3(event){
        this.setState({hour: event.replace(/[^0-1]/g, '')})
    }

    handleNumber4(event){
        this.setState({hour: event.replace(/[^0-2]/g, '')})
    }

    handleHour(event){
        
        
    }

    render(){
        const {collection} = this.state;
        return(
            <View style={{backgroundColor:'#A746A3', height:'100%'}}>
                <Header transparent style={{backgroundColor:'#93108D', height:normalize(100), borderBottomRightRadius:50}}>
                <Left>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon type={"FontAwesome5"} name="chevron-left" style={{color:'white'}}/>
                    </TouchableOpacity>
                </Left>
                <Body>
                    <Text style={{fontFamily:'RedHatDisplay-Regular', color:'white', fontWeight:'100', fontSize:normalize(24)}}>Area Depok</Text>
                </Body>
                </Header>
                <ScrollView style={{paddingLeft:normalize(20), paddingRight:normalize(20)}}>
                    <View style={{paddingTop:normalize(25), paddingBottom:normalize(20)}}>
                        <View style={styles.theme1}>
                            <Text style={styles.text1}>
                            Data ini akan diteruskan kepada MRC yang berada
                            di wilayah Depok
                            </Text>
                        </View>
                        <View style={{paddingTop:normalize(25)}}>
                            <View style={styles.theme2}>
                                <View>
                                    <Text style={styles.text2}>Nama Lengkap</Text>
                                    <View style={styles.border1}>
                                        <TextInput
                                        value={collection.nama}
                                        onChangeText={this.handleNama.bind(this)}
                                            style={{padding:normalize(5), paddingLeft:normalize(20)}}
                                        />
                                    </View>
                                </View>

                                <View style={{paddingTop:normalize(15)}}>
                                    <Text style={styles.text2}>Alamat</Text>
                                    <View style={styles.border2}>
                                        <TextInput
                                            value={this.state.alamat}
                                            onChangeText={this.handleAlamat.bind(this)}
                                            multiline={true}
                                            numberOfLines={4}
                                            style={{padding:normalize(5), paddingLeft:normalize(20)}}
                                        />
                                    </View>
                                </View>

                                <View style={{paddingTop:normalize(15)}}>
                                    <Text style={styles.text2}>Email</Text>
                                    <View style={styles.border1}>
                                        <TextInput
                                            value={collection.email}
                                            onChangeText={this.handleEmail.bind(this)}
                                            style={{padding:normalize(5), paddingLeft:normalize(20)}}
                                        />
                                    </View>
                                </View>

                                <View style={{paddingTop:normalize(15)}}>
                                    <Text style={styles.text2}>Nomor Ponsel</Text>
                                    <View style={styles.border1}>
                                        <TextInput
                                            value={collection.nohp}
                                            onChangeText={this.handleNohp.bind(this)}
                                            maxLength={12}
                                            style={{padding:normalize(5), paddingLeft:normalize(20)}}
                                        />
                                    </View>
                                </View>

                                <View style={{paddingTop:normalize(15)}}>
                                    <Text style={styles.text2}>Keluhan</Text>
                                    <View style={styles.border2}>
                                        <TextInput
                                            value={this.state.keluhan}
                                            onChangeText={this.handleKeluhan.bind(this)}
                                            multiline={true}
                                            numberOfLines={4}
                                            style={{padding:normalize(5), paddingLeft:normalize(20)}}
                                        />
                                    </View>
                                </View>

                                <View style={{flexDirection:'row', paddingTop:normalize(20)}}>
                                    <CheckBox color="#A746A3" style={{fontSize:normalize(24)}} checked={this.state.checkeds ? true : false} onPress={() => this.setState({checkeds: !this.state.checkeds})} />
                                    <View style={{paddingLeft:normalize(20)}}/>
                                    <Text style={styles.text3}>Butuh saat ini juga</Text>
                                </View>

                                {this.state.checkeds ? 
                                    <View/>
                                    :
                                    <View style={styles.border2}>
                                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                            <Text style={styles.text5}>Tanggal :</Text>
                                            <DatePicker
                                                style={{width:normalize(180), marginTop:normalize(10)}}
                                                customStyles={{dateText:{
                                                    color:'black'
                                                }, dateInput:{
                                                    height:normalize(35),
                                                    borderColor:'#fff',
                                                }, placeholderText:{
                                                    color:'black'
                                                }
                                                }}
                                                date={this.state.date}
                                                mode="date"
                                                placeholder="Pilih Tanggal"
                                                format="DD-MM-YYYY"
                                                minDate="01-05-2016"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                onDateChange={(date) => {this.setState({date: date})}}
                                                showIcon={false}
                                                
                                            />
                                        </View>

                                        <View style={{flexDirection:'row', paddingLeft:normalize(30)}}>
                                            <Text style={[styles.text5, {paddingTop:normalize(20)}]}>Waktu :</Text>
                                            <View style={{flexDirection:'row', paddingLeft:normalize(50)}}>
                                                <TextInput
                                                    defaultValue="0"
                                                    style={{color:'black', textAlign:'center'}}
                                                    placeholderTextColor="black"
                                                    underlineColorAndroid="black"
                                                    maxLength={1}
                                                    keyboardType="numeric"
                                                    value={this.state.hour}
                                                    onChangeText={(event) => this.setState({hour: event.replace(/[^0-2]/g, '')})}
                                                />
                                                <TextInput
                                                    defaultValue="0"
                                                    style={{color:'black', textAlign:'center'}}
                                                    placeholderTextColor="black"
                                                    underlineColorAndroid="black"
                                                    maxLength={1}
                                                    keyboardType="numeric"
                                                    value={this.state.hour2}
                                                    onChangeText={this.state.hour == 2 ? 
                                                        this.handleNumber.bind(this) : this.handleNumber2.bind(this)}
                                                />
                                                <Text style={[styles.text5, {marginTop:normalize(8)}]}> : </Text>
                                                <TextInput
                                                    style={{color:'black', textAlign:'center'}}
                                                    placeholderTextColor="black"
                                                    underlineColorAndroid="black"
                                                    maxLength={1}
                                                    keyboardType="numeric"
                                                    value={this.state.minute}
                                                    onChangeText={(event) => {this.setState({minute: event.replace(/[^0-5]/g, '')})}}
                                                />
                                                <TextInput
                                                    style={{color:'black', textAlign:'center'}}
                                                    placeholderTextColor="black"
                                                    underlineColorAndroid="black"
                                                    maxLength={1}
                                                    keyboardType="numeric"
                                                    value={this.state.minute2}
                                                    onChangeText={(event) => this.setState({minute2: event.replace(/[^0-9]/g, '')})}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                }
                                

                                <View style={{paddingTop:normalize(20)}}>
                                    <Button onPress={() => {this.setDataBooking();this.onNext()}} full style={{borderRadius:10, height:normalize(40), backgroundColor:'#55BF3B'}}>
                                        <Text style={styles.text4}>Selanjutnya</Text>
                                    </Button>
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
    text3:{
        fontFamily:'RedHatDisplay-Regular', 
        color:'white', 
        fontWeight:'100', 
        fontSize:normalize(18)
    },
    text4:{
        fontFamily:'RedHatDisplay-Regular', 
        color:'white', 
        fontWeight:'bold', 
        fontSize:normalize(20)
    },
    text5:{
        fontFamily:'RedHatDisplay-Regular', 
        color:'black', 
        fontSize:normalize(20),
        paddingTop:normalize(10)
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
        height:normalize(150),
        borderRadius:10,
        marginTop:normalize(10)
    },
    theme2:{
        backgroundColor:'#93108D',
        height:normalize(920),
        borderRadius:20,
        padding:normalize(20)
    },
    
})
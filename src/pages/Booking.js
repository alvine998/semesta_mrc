import { Body, Header, Icon, Left } from "native-base";
import React, {Component} from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DatePicker from "react-native-datepicker";
import normalize from "react-native-normalize";
import DateTimePicker from '@react-native-community/datetimepicker';

export default class Booking extends Component{
    constructor(props){
        super(props);
        this.state={
            date:'',
            time:''
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
                    <Text style={{fontFamily:'RedHatDisplay-Regular', color:'white', fontWeight:'100', fontSize:normalize(24)}}>Jadwal Booking</Text>
                </Body>
                </Header>
                <ScrollView>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <View style={{paddingTop:normalize(30)}} />
                        <View style={styles.border1}>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Text style={styles.text1}>Tanggal :</Text>
                                <DatePicker
                                    style={{width:normalize(180), paddingLeft:normalize(20)}}
                                    customStyles={{dateText:{
                                        color:'white'
                                    }, dateInput:{
                                        height:normalize(40),
                                        borderColor:'#93108D',
                                    }}}
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
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                                <Text style={styles.text1}>Waktu :</Text>
                                <DateTimePicker
                                    value={this.state.time}
                                    mode="time"
                                    is24Hour={true}
                                    display="default"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    border1:{
        height:normalize(300),
        width:normalize(300),
        backgroundColor:'#93108D',
        borderRadius:20,
        padding:normalize(20)
    },
    text1:{
        fontFamily:'RedHatDisplay-Regular',
        color:'white',
        fontSize:normalize(20)
    }
})
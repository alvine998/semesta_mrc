import AsyncStorage from "@react-native-community/async-storage";
import { Body, Header, Icon, Left } from "native-base";
import React, {Component} from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import normalize from "react-native-normalize";

export default class Payment extends Component{
    constructor(props){
        super(props);
        this.state = {
            values:'',
            jsson:''
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
                            values: json.collection.nama,
                            jsson: json.alamat
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
        const {jsson, values} = this.state;
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
                        <Text>{values}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
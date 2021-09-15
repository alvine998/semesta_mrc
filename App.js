import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import Bekasi from './src/pages/Bekasi';
import Bogor from './src/pages/Bogor';
import Booking from './src/pages/Booking';
import Depok from './src/pages/Depok';
import Home from './src/pages/Home';
import Jakarta from './src/pages/Jakarta';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import SplashScreen from './src/pages/SplashScreen';

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Splash" component={SplashScreen}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
          {/* Area */}
          <Stack.Screen name="Jakarta" component={Jakarta}/>
          <Stack.Screen name="Bogor" component={Bogor}/>
          <Stack.Screen name="Depok" component={Depok}/>
          <Stack.Screen name="Bekasi" component={Bekasi}/>
          {/* Booking */}
          <Stack.Screen name="Booking" component={Booking}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
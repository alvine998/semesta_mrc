import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import Home from './src/pages/Home';
import SplashScreen from './src/pages/SplashScreen';

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Splash" component={SplashScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
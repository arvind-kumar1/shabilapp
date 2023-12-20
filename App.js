import 'react-native-gesture-handler';
import React, { Component } from 'react';
// import { View, Text } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import DrawerNavigator from './DrawerNavigator'
import Mainpage from './Mainpage';
import Adddata from './Screens/Adddata';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import CustomDrawer from './CustomDrawer';
import  Ionicons from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator()

function Root({navigation}) {
  return (
    
   
    <Drawer.Navigator  screenOptions={{
      headerShown: false 
    }} drawerContent={props => <CustomDrawer {...props} initialRouteName="Home"/>}
    
    >
       
      <Drawer.Screen name='Home' component={Mainpage} options={{drawerIcon : ({color}) => (
        <Ionicons name='home-outline' size={22} color={color}/>
      )}}/>
     
      
      <Drawer.Screen name='Profile' component={ProfileScreen} options={{drawerIcon : ({color}) => (
        <Ionicons name='person-outline' size={22} color={color}/>
      )}}/>
      <Drawer.Screen name="Add Location" component={Adddata} options={{drawerIcon : ({color}) => (
        <Ionicons name='location-outline' size={22} color={color}/>
      )}}/>
      
    </Drawer.Navigator>
   
  );
}

function App(){

  
    return (
     <NavigationContainer >
      <Stack.Navigator
      
      screenOptions={{
    headerShown: false
  }}>
    
         <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
        <Stack.Screen name='Add Location' component={Root}/>
       

        
       
      </Stack.Navigator>
      
     </NavigationContainer>
    );
  }


export default App;


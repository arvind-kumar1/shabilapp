import React, { useState } from 'react';
import { View, Text,SafeAreaView,Image, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

 const loginUser = () => {
    auth().signInWithEmailAndPassword('arvind@gmail.com', '123456')
    .then(() => {
      navigation.navigate('Add Location')
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    })
 }
  
    return (
     <SafeAreaView>
        <View style={{margin:10,marginTop:50}}>
            <Image source={require('./logo.png')} style={{height:100,width:100,alignSelf:'center'}}/>
            <Text style={{color:'black',fontWeight:'bold',fontSize:25,marginTop:10,alignSelf:'center'}}>
                Welcome Back
            </Text>
            <Text style={{fontSize:15,marginTop:5}}>
              Email
            </Text>
            <TextInput 
             value={email}
             onChangeText={(email) => setEmail(email)}
            mode= 'outlined' label="Enter your email address*" style={{backgroundColor:'#d2d4d2',borderRadius:10,borderColor:'transparent',marginTop:5}}/>
            <Text style={{fontSize:15,marginTop:15}}>
              Password
            </Text>
            <TextInput secureTextEntry 
             value={password}
             onChangeText={(password) => setPassword(password)}
            right={<TextInput.Icon icon="eye" />} mode= 'outlined' label="Enter your password*" style={{backgroundColor:'#d2d4d2',borderRadius:10,borderColor:'transparent',marginTop:5}}/>
            <Button  mode="contained" style={{backgroundColor:"#1989ac",marginTop:20,padding:3}}onPress={loginUser}>
                Log In
            </Button>
            <Button  mode="contained" style={{backgroundColor:"#1989ac",marginTop:20,padding:3,margin:20}} onPress={() => navigation.navigate('SignupScreen')}>
                Create an account
            </Button>
           
        </View>
     </SafeAreaView>
    );
  
    }
export default LoginScreen;
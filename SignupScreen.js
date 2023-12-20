import React, { useState } from 'react';
import { View, Text,SafeAreaView,Image } from 'react-native';
import { Button, TextInput, MD3LightTheme as DefaultTheme, } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignupScreen = ({navigation}) => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')



    const loginSystem = () => {
        

auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    firestore()
    .collection('Users')
    .add({
      name:name,
      email:email,
      password:password
      
    })
    .then(() => {
        navigation.navigate('Add Location')
    });
    
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });

    }
    

  
    return (
     <SafeAreaView>
        <View style={{margin:10,marginTop:50}}>
            <Image source={require('./logo.png')} style={{height:100,width:100,alignSelf:'center'}}/>
            <Text style={{color:'black',fontWeight:'bold',fontSize:25,marginTop:10}}>
                Register
            </Text>
            <TextInput mode= 'outlined' label="Full Name" 
            value={name}
            onChangeText={(name) => setName(name)}
            style={{backgroundColor:'#d2d4d2',borderRadius:10,borderColor:'transparent',marginTop:20}}/>
            <TextInput  mode= 'outlined' label="Email address*" 
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={{backgroundColor:'#d2d4d2',borderRadius:10,borderColor:'transparent',marginTop:10}}/>
            <TextInput secureTextEntry right={<TextInput.Icon icon="eye" />} mode= 'outlined' label="Password*"
             value={password}
             onChangeText={(password) => setPassword(password)}
            style={{backgroundColor:'#d2d4d2',borderRadius:10,borderColor:'transparent',marginTop:10}}/>
            <Button  mode="contained" style={{backgroundColor:"#1989ac",marginTop:20}} onPress={loginSystem}>
                Sign up
            </Button>
        </View>
     </SafeAreaView>
    );
  
    }
export default SignupScreen;
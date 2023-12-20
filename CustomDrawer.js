import React, { Component } from 'react';
import { View, Text, ImageBackground,Image } from 'react-native';
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
const CustomDrawer = props => {


 
    return (
        <View style={{flex:1}}>

        
      <DrawerContentScrollView {...props} >
       <View style={{alignItems:'center',height:200,backgroundColor:'white'}}>
       <Image source={require('./logo.png')} style={{height:100,width:100,alignSelf:'center',marginTop:20}}/>
       <Text style={{color:'black',fontWeight:'bold',fontSize:25,marginTop:10,alignSelf:'center',shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 3,
},
shadowOpacity:  0.17,
shadowRadius: 3.05,
elevation: 4}}>
                Shabil Sewa
            </Text>
       </View>
       
       <View style={{paddingTop:10}}>

       
       <DrawerItemList {...props}/>
       </View>
      </DrawerContentScrollView>
      </View>
    );
  
}

export default CustomDrawer;

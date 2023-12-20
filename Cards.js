import React, { Component } from 'react';
import { View, Text,ScrollView,Image,TouchableOpacity } from 'react-native';
import {Card,Title} from 'react-native-paper';

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <ScrollView horizontal={false}>
          <TouchableOpacity>
                   <Card style={{height:150,width:180,borderRadius:10,margin:10}}>
           <Text style={{fontSize:15,marginTop:10,fontWeight:'bold',alignSelf:'center'}}>
               {this.props.place}
           </Text>
           
           <View style={{flexDirection:'row',alignSelf:'center'}}>
           <Text style={{fontSize:15,marginTop:10,fontWeight:'bold',alignSelf:'center'}}>
               {this.props.name}
           </Text>
          
          
          
           </View>
         
       </Card>
       </TouchableOpacity>

        </ScrollView>
    );
  }
}

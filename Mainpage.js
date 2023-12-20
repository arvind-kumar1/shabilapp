
import React, {useState,useEffect } from 'react';
import {SafeAreaView,StyleSheet,Dimensions,ScrollView,Text,View } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker, Callout } from 'react-native-maps';
import firestore from '@react-native-firebase/firestore';
import { Card } from 'react-native-paper';



const Mainpage = ({ navigation }) => {
  const [region ,setRegion] = useState({
    latitude: 31.057402862391942,
    longitude: 74.82088766992092,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  })
  const [datas , setDatas] = useState([])
 
const [locationStatus,setLocationStatus] = useState('')
    useEffect(() => {
      
      firestore()
      .collectionGroup('allData')
  .get()
  .then(querySnapshot => {
   
    querySnapshot.forEach((doc) => {
      setDatas(datas => [...datas, doc.data()]);
      console.log(doc.data())
   })
  //   console.log('User exists: ', documentSnapshot.exists);

  //   if (documentSnapshot.exists) {
  //   let dataa = documentSnapshot.data()
  //     setDatas(datas => [...datas, dataa]);
      
  //     console.log('User data: ', documentSnapshot.data());
  //   }
  });
        // const requestLocationPermission = async () => {
        //   if (Platform.OS === 'ios') {
        //     getOneTimeLocation();
        //     subscribeLocationLocation();
        //   } else {
        //     try {
        //       const granted = await PermissionsAndroid.request(
        //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        //         {
        //           title: 'Location Access Required',
        //           message: 'This App needs to Access your location',
        //         },
        //       );
        //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //         //To Check, If Permission is granted
        //         getOneTimeLocation();
        //         subscribeLocationLocation();
        //       } else {
        //         setLocationStatus('Permission Denied');
        //       }
        //     } catch (err) {
        //       console.warn(err);
        //     }
        //   }
        // };
        // console.log(region)
        // requestLocationPermission();
        // return () => {
        //   Geolocation.clearWatch(watchID);
        // };
        
      

    
    
  
      }, []);
 
  
    


//  const getOneTimeLocation = () => {
//     setLocationStatus('Getting Location ...')
  
//       Geolocation.getCurrentPosition(
//         (position) => {
//             setLocationStatus('I am Here')
//           region.latitude = JSON.stringify(position.coords.latitude);
//           region.longitude = JSON.stringify(position.coords.longitude);
//          setRegion(region.latitude);
//          setRegion(region.longitude);
//         },
//         (error) => {
//             setLocationStatus(error.message);
//         },
//         {
//           enableHighAccuracy: true,
//           accuracy: {
//             android: 'high',
//             ios: 'bestForNavigation',
//           },
//           timeout: 15000,
//           maximumAge: 10000,
         
//         },
//       );
//     }
  // const subscribeLocationLocation = () => {
  //     watchID = Geolocation.watchPosition(
  //       (position) => {
  //         //Will give you the location on location change
  //         setLocationStatus('You are Here');
          
  //         console.log(position);
    
  //         //getting the Longitude from the location json        
  //         region.longitude =
  //           JSON.stringify(position.coords.longitude);
    
  //         //getting the Latitude from the location json
  //         region.latitude = 
  //           JSON.stringify(position.coords.latitude);
    
  //         //Setting Longitude state
  //         setRegion(region.latitude);
  //        setRegion(region.longitude);
  //       },
  //       (error) => {
  //           setLocationStatus(error.message);
  //       },
  //       {
  //         enableHighAccuracy: true,
  //         timeout: 15000,
  //         maximumAge: 10000,
  //         distanceFilter: 10,
  //       },
  //     );
  //   }; 
  

            return (

              
                 
          
     
          <SafeAreaView style={{...StyleSheet.absoluteFillObject
        }}>
         
             
        
            
          
              <MapView 
              initialRegion={region}
             
              onRegionChangeComplete={(region) => setRegion(region)}
              provider={ PROVIDER_GOOGLE }
              showsUserLocation={ true }
                loadingEnabled
               
                showsIndoors={false}
                showsTraffic={true}
                showsBuildings={true}
                showsScale={true}
                style={styles.map}
                
                >
              {datas.map((item,index) => {
             return (
                <Marker key={index}
                coordinate={item.location}>
                 <Callout>
                 <View style={{backgroundColor:"white",borderRadius:6,height:50,width:50}}>
                  <Text style={{alignSelf:"center",fontSize:25,fontWeight:'bold'}}>
                    {item.place}
                  </Text>
                  <Text style={{alignSelf:'center',fontSize:15}}>
                    {item.name}
                  </Text>
                 </View>
                 </Callout>
                  </Marker>
                
                
                )

                 
                 
               })}
             
              </MapView>
              <ScrollView>
                
           
           
              </ScrollView>
             
          
           
            
             
          </SafeAreaView>
        
            )
            
          
                
            
                }
export default Mainpage;
  
    const styles = StyleSheet.create({    
        map: {
            
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            flex: 1,
            ...StyleSheet.absoluteFillObject
        },
    });

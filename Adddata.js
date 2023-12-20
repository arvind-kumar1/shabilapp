
import  { useState,useEffect } from 'react';
import { TextInput,Button,Appbar} from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text,SafeAreaView,StyleSheet,PermissionsAndroid,Platform,ActivityIndicator,Dimensions } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { DrawerActions } from '@react-navigation/native'
// const [text1, setText1] = useState("");
// const [text2, setText2] = useState("");
const [selectedLocation, setSelectedLocation] = useState([0]);
const [locationStatus,setLocationStatus] = useState('')
const Adddata = ({navigation}) => {
 
    useEffect(() => {
        const requestLocationPermission = async () => {
          if (Platform.OS === 'ios') {
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                  title: 'Location Access Required',
                  message: 'This App needs to Access your location',
                },
              );
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                getOneTimeLocation();
                subscribeLocationLocation();
              } else {
                setLocationStatus('Permission Denied');
              }
            } catch (err) {
              console.warn(err);
            }
          }
        };
        console.log(region)
        requestLocationPermission();
        return () => {
          Geolocation.clearWatch(watchID);
        };
      }, []);
 
  
      const [region ,setRegion] = useState({
        latitude: 31.1471,
        longitude: 75.3412,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      })

 

    const handleSelectLocation = (event) => {
        const { coordinate } = event.nativeEvent;
        setSelectedLocation(coordinate);
      };
 const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...')
  
      Geolocation.getCurrentPosition(
        (position) => {
            setLocationStatus('I am Here')
          region.latitude = JSON.stringify(position.coords.latitude);
          region.longitude = JSON.stringify(position.coords.longitude);
         setRegion(region.latitude);
         setRegion(region.longitude);
        },
        (error) => {
            setLocationStatus(error.message);
        },
        {
          enableHighAccuracy: true,
          accuracy: {
            android: 'high',
            ios: 'bestForNavigation',
          },
          timeout: 15000,
          maximumAge: 10000,
         
        },
      );
    }
  const subscribeLocationLocation = () => {
      watchID = Geolocation.watchPosition(
        (position) => {
          //Will give you the location on location change
          setLocationStatus('You are Here');
          
          console.log(position);
    
          //getting the Longitude from the location json        
          const longitude =
            JSON.stringify(position.coords.longitude);
    
          //getting the Latitude from the location json
          const latitude = 
            JSON.stringify(position.coords.latitude);
    
          //Setting Longitude state
          setRegion(latitude);
         setRegion(longitude);
        },
        (error) => {
            setLocationStatus(error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
          distanceFilter: 10,
        },
      );
    }; 
 

  
    return (
      <SafeAreaProvider>
                 
      <Appbar.Header >
      
      <Appbar.Action icon="menu" onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>
      <Appbar.Content title="Home" />
    
  </Appbar.Header>
      <View style={{margin:10}}>
        <TextInput 
         label="Jithe Lgani Otho Da Name"
        //  value={text1}
        //  onChangeText={text1 => setText1(text1)}
        />
       <TextInput style={{marginTop:10}}
         label="Avda Name"
        //  value={text2}
        //  onChangeText={text2 => setText2(text2)}
        />

      </View>
      <View style={{flex:1,borderRadius:5}}>
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
                onPress={handleSelectLocation}
                >
               {selectedLocation && (
        <Marker
          coordinate={selectedLocation}
          title="Selected Location"
        />
      )}
                
              </MapView>
</View>
<Button icon="camera" mode="contained" style={{margin:10}}>
    Submit
  </Button>
    </SafeAreaProvider>
    );
  
}

export default Adddata;
const styles = StyleSheet.create({    
  map: {
      position: "absolute",
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      marginTop: 10,
      flex: 1,
      borderRadius:5,
   
   
      
  },
});

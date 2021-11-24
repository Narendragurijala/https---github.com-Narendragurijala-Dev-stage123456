/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const App = () => {
  const [coordinates] = useState([
    {
      latitude: 48.8587741,
      longitude: 2.2069771,
    },
    {
      latitude: 48.8323785,
      longitude: 2.3361663,
    },
  ]);  return (
    <View style={styles.MainContainer}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: coordinates[0].latitude,
          longitude: coordinates[0].longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
        <Polyline
          coordinates={coordinates}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
};
// const App = () => {
//   const [coordinates] = useState([
//     {
//       latitude: 48.8587741,
//       longitude: 2.2069771,
//     },
//     {
//       latitude: 48.8323785,
//       longitude: 2.3361663,
//     },
//   ]);
//   return (
//     <View style={styles.MainContainer}>
//       <MapView
//         style={styles.mapStyle}
//         initialRegion={{
//           latitude: coordinates[0].latitude,
//           longitude: coordinates[0].longitude,
//           latitudeDelta: 0.0622,
//           longitudeDelta: 0.0121,
//         }}>
//         <MapViewDirections
//           origin={coordinates[0]}
//           destination={coordinates[1]}
//           apikey={'AIzaSyCSPfSL5_Gs0AJCj39Liw7IDC3kij9DAkc'} // insert your API Key here
//           strokeWidth={4}
//           strokeColor="#111111"
//         />
//         <Marker coordinate={coordinates[0]} />
//         <Marker coordinate={coordinates[1]} />
//       </MapView>
//     </View>
//   );
// };

//  export default class App extends Component {
//    render() {
//      return (
//        <View style={styles.MainContainer}>
//          <MapView
//            style={styles.mapStyle}
//            showsUserLocation={false}
//            zoomEnabled={true}
//            zoomControlEnabled={true}
//            initialRegion={{
//              latitude: 28.579660,
//              longitude: 77.321110,
//              latitudeDelta: 0.0922,
//              longitudeDelta: 0.0421,
//            }}>

//            <Marker
//              coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
//              title={"JavaTpoint"}
//              description={"Java Training Institute"}
//            />
//          </MapView>

//        </View>
//      );
//    }
//  }
export default App;
const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

// import React from 'react';
// // Import required components
// import {SafeAreaView, StyleSheet, View} from 'react-native';

// // Import Map and Marker
// import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <MapView
//           style={styles.mapStyle}
//           provider={PROVIDER_GOOGLE}
//           initialRegion={{
//             latitude: 37.78825,
//             longitude: -122.4324,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           }}
//           customMapStyle={mapStyle}>
//           <Marker
//             draggable
//             coordinate={{
//               latitude: 37.78825,
//               longitude: -122.4324,
//             }}
//             onDragEnd={
//               (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
//             }
//             title={'Test Marker'}
//             description={'This is a description of the marker'}
//           />
//         </MapView>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#6b9a76'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{color: '#38414e'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#17263c'}],
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   mapStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

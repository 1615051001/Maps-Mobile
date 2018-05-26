import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.108984, 
          longitude: 115.080921 
        },
        title: 'Edutel Undiksha',
        subtitle: 'Jatayu Street No 5, 81116 Singaraja,Indonesia, Singaraja,Buleleng,Bali, Indonesia,81116'
      },
      {
        key:2,
        latlng: {
          latitude:-8.127874,  
          longitude: 115.061165
        },
        title: 'Puri Bagus Lovina',
        subtitle: 'Jalan Raya Singaraja Seririt Desa Pemaron Lovina Singaraja, Singaraja, Buleleng,Bali, Indonesia,81151'
      },
      {
        key:3,
        latlng: {
          latitude:-8.115341, 
          longitude: 115.080696
        },
        title: 'Grand Wijaya',
        subtitle: 'Jalan Jendral Sudirman No.74, Singaraja - Bali, Singaraja, Buleleng, Bali, Indonesia,81116'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.102539, 
          longitude: 115.090775
        },
        title: 'POP Hotel Hardys Singaraja Square',
        subtitle: 'Jalan Surapati No. 12-14, Singaraja, Buleleng, Bali, Indonesia,81113'
      },
      {
        key:5,
        latlng: {
          latitude:-8.110197, 
          longitude: 115.087489
        },
        title: 'Hotel Sentral Bali',
        subtitle: 'Jalan Jenderal A.Yani N.48, Singaraja - Bali, Singaraja, Buleleng, Bali, Indonesia,81116'
      },
      {
        key:4,
        latlng: {
          latitude:-8.133094, 
          longitude: 115.057057 
        },
        title: 'Puri Saron Baruna Beach Cottages',
        subtitle: 'Desa Pemaron, Singaraja, Buleleng, Bali, Indonesia,81151'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Hotel Singaraja
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Wandi Septiari </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#FF6600',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

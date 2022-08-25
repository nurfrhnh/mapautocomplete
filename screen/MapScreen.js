import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Map from '../components/Map';
import MapView from 'react-native-maps';

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Map Screen</Text>
            <View>
                <Map />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MapScreen;

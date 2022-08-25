import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { selectOrigin } from '../slices/navSlices';

const Map = () => {
    const origin = useSelector(selectOrigin)

    return ( <MapView style = { tw `flex-1` }
        mapType = "mutedStandard"
        initialRegion = {
            {
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        } >
        </MapView>
    );
};

export default Map

const styles = StyleSheet.create({


})
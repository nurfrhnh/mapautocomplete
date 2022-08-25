import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from "@env";
import { setDestination, setOrigin  } from '../slices/navSlices';

export const HomeScreen = () => {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
            <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: "contain",
                }}
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
                }}
            />

            <GooglePlacesAutocomplete
                placeholder='Enter Location'
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}
                onPress={(data, details = null) => {
                    dispatch (
                        setOrigin ({
                            location: details.geometry.location,
                            description: data.description,
                        })
                    );
                    console.log(data);
                    console.log(tails);
                }}
                fetchDetails={true}
                //enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: "en",
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}/>

           <NavOptions />
         </View>
      </SafeAreaView>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue"
    },
});

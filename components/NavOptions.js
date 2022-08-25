import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: "001",
        title: "Get a Ride",
        image: "https://static.vecteezy.com/system/resources/thumbnails/003/694/243/small/car-icon-in-flat-style-simple-traffic-icon-free-vector.jpg",
        screen: "MapScreen",
    },
    {
        id: "002",
        title: "Order Food",
        image:"https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];

const NavOptions = () => {
    const navigation= useNavigation();

    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                <View>
                    <Image style={{ width: 120, height: 120, resizeMode: "contain"}}
                            source={{uri: item.image}} />
                    <Text>{item.title}</Text>
                    <Icon 
                        style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                        name='arrowright' 
                        color="white" type="antdesign" />
                </View>
            </TouchableOpacity>
        )}
        />
    );
};

export default NavOptions;

const styles = StyleSheet.create({
    text: {
        justifyContent: "center",
        alignContent: "center"

    }
    
})
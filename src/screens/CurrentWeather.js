import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = () => {
    const { container, temp, feels, highLow, highLowWrapper, bodyWrapper, description, message, wrapper } = styles;
    return (
        <SafeAreaView style={wrapper}>
            <View style={container}>
                <Feather name="sun" size={100} color="black" />
                <Text style={temp}>6</Text>
                <Text style={feels}>Feels like 5</Text>
                <RowText messageOne="High: 8" messageTwo="Low: 6" containerStyles={highLowWrapper} messageOneStyles={highLow} messageTwoStyles={highLow} />
            </View>
            <RowText
                messageOne="Its Sunny"
                messageTwo={weatherType.Thunderstorm.message}
                containerStyles={bodyWrapper}
                messageOneStyles={description}
                messageTwoStyles={message}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    temperature: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black'
    },
    hiLow: {
        color: 'black',
        fontSize: 20
    },
    hiLowWrapper: {
        flexDirection: 'row'
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40
    },
    description: {
        fontSize: 43
    },
    message: {
        fontSize: 25
    }
})

export default CurrentWeather;
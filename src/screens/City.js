import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, ImageBackground, StatusBar, View } from 'react-native'
import IconText from '../components/IconText';
import moment from 'moment';

const City = ({ weatherData }) => {
    const { container, cityName, countryName, cityText, populationWrapper, rowLayout, populationText, riseSetText, riseSetWrapper, imageLayout } = styles
    const { name, country, population, sunrise, sunset } = weatherData
    return (

        <SafeAreaView style={container} edges={[]}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={imageLayout}>
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]} >

                    <IconText iconName={"user"} size={50} iconColor={'red'} bodyText={`Population: ${population}`} bodyTextStyles={populationText} />
                </View>

                <View style={[riseSetWrapper, rowLayout]}>

                    <IconText iconName={"sunrise"} size={50} iconColor={'white'} bodyText={moment(sunrise).format('h:mm:ss a')} bodyTextStyles={riseSetText} />


                    <IconText iconName={"sunset"} size={50} iconColor={'white'} bodyText={moment(sunset).format('h:mm:ss a')} bodyTextStyles={riseSetText} />

                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0
        marginTop: 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    }
})
export default City
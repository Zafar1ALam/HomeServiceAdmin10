import React from 'react';

import { View, StyleSheet, Image, Text } from 'react-native'
import STYLES from '../STYLES';


const ServiceBox = props => {
    return (
        <View style={[{

            alignItems: 'center',
            paddingVertical: '5%',
            height: '100%',


            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            borderRadius: 6, borderColor: '#707070'
        }, props.style]}>
            <Image source={props.source} style={{
                height: 20, width: 20, resizeMode: 'cover',

            }} />

            <Text style={STYLES.textfont11gibsoncolorFFA900}>{props.service}</Text>
        </View>
    );
};



export default ServiceBox;


const style = StyleSheet.create({
    header: {
        flex: 0.33,
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        backgroundColor: '#FFA900'
    },
    content: {
        flex: 0.33,
        paddingVertical: '2%',
        paddingHorizontal: '5%',
    }

});
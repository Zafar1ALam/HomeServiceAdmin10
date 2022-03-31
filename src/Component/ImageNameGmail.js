import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import STYLES from '../STYLES'




const ImageNameGmail = props => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row' }}
            onPress={props.onPress}>

            <Image source={require('../Images/humanbeing.png')}
                style={STYLES.humanbeingimagestyle} />
            <View style={{ marginLeft: '3%', justifyContent: 'space-between' }}>
                <Text style={{
                    fontSize: 24, color: '#FFFFFF'
                    //  fontfamily:'gibson' semibold
                }} >{props.name}</Text>
                <Text style={{
                    fontSize: 14, color: '#FFFFFF'
                    //    fontfamily:'gibson' regular
                }} >{props.gmail}</Text>
            </View>

        </TouchableOpacity>
    );
};



export default ImageNameGmail;

const style = StyleSheet.create({
    header: {

    },

});
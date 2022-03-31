import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import STYLES1 from '../STYLES1';
const Button1 = props => {
    return (
        <TouchableOpacity style={[style.touchableopacity, props.style]} onPress={props.onPress}>

            <Text style={[STYLES1.fontSize15_FFFFFF_GibsonSemiBold,
            { textAlign: "center" }]}>{props.text}</Text>
        </TouchableOpacity>
    );
};



export default Button1;
const style = StyleSheet.create({
    touchableopacity: {
        marginBottom: '5%', marginHorizontal: '5%',
        borderRadius: 12, backgroundColor: '#FFA900', height: 60,
        justifyContent: 'center'
    },

});

//////
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const ButtonCancel = props => {
    return (
        <TouchableOpacity style={[style.touchableopacity, props.style
        ]}
            onPress={props.onPress}>

            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};



export default ButtonCancel;
const style = StyleSheet.create({
    touchableopacity: {
        marginBottom: '5%',// marginHorizontal: '5%',
        borderRadius: 12, backgroundColor: '#78849E',
        height: 60, justifyContent: 'center'
    },
    text: {
        fontSize: 14, textAlign: "center",
        //  fontFamily:'GIBSON' SEMIBOLD
        color: '#454F63'
    }
});
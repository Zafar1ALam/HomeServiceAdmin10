import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonApply = props => {
    return (
        <TouchableOpacity style={[style.touchableopacity, props.style]} onPress={props.onPress}>

            <Text style={style.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};



export default ButtonApply;
const style = StyleSheet.create({
    touchableopacity: {
        marginBottom: '5%',// marginHorizontal: '5%',
        borderRadius: 12, backgroundColor: '#FFA900', height: 60, justifyContent: 'center'
    },
    text: {
        fontSize: 14, textAlign: "center",
        //FONTFAMILY:GIBSON SEMIBOLD
        color: '#FFFFFF'
    }
});
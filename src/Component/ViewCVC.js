import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import STYLES1 from '../STYLES1';
const ViewCVC = props => {
    return (
        <View style={style.viewstyle}>
            <Text style={STYLES1.fontSize11_FFFFFF_GibsonRegular}>
                {props.text1}</Text>
            <TextInput
                onChangeText={(text) => props.onChangeText(text)}
                placeholderTextColor={'#FFFFFF'}
                placeholder={props.placeholder}
                maxLength={3}
                keyboardType='numeric'
                style={STYLES1.fontSize14_FFFFFF_GibsonSemiBold} />
        </View>
    );
};



export default ViewCVC;

const style = StyleSheet.create({
    viewstyle: {
        flex: 0.3,
        borderRadius: 8,
        justifyContent: 'space-evenly',
        paddingTop: '3%',
        paddingHorizontal: '4%',
        backgroundColor: '#FFA900'
    },

});

////////////
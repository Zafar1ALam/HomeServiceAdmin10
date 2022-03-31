import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import STYLES1 from '../STYLES1';
const Viewcardnumbername = props => {
    return (
        <View style={style.viewstyle}>
            <Text style={STYLES1.fontSize11_FFFFFF_GibsonRegular}>
                {props.text1}</Text>
            <TextInput maxLength={props.maxLength}
                placeholderTextColor={'#FFFFFF'}
                placeholder={props.placeholder}
                style={STYLES1.fontSize14_FFFFFF_GibsonSemiBold}
                keyboardType={props.keyboardType}
                onChangeText={(text) => { props.onChangeText(text) }} />
        </View>
    );
};



export default Viewcardnumbername;

const style = StyleSheet.create({
    viewstyle: {
        flex: 0.6,
        borderRadius: 8,
        paddingTop: '2%',
        justifyContent: 'space-evenly',
        paddingHorizontal: '4%',
        backgroundColor: '#FFA900'
    },

});


/////////
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import STYLES from '../STYLES';
const Textleftsidebuttonreightside = props => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={STYLES.textfont19gibson454F63}>{props.texttext}</Text>
            <TouchableOpacity style={{
                backgroundColor: "#FFA900", alignItems: "center",
                padding: "2%", borderRadius: 12
            }} onPress={props.onPress}>
                <Text style={STYLES.textfont15gibsonwhiteopacityfull}>{props.textbutton}</Text>
            </TouchableOpacity>
        </View>
    );
};



export default Textleftsidebuttonreightside;

const style = StyleSheet.create({
    header: {
        flex: 0.33,
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        backgroundColor: '#FFA900'
    },


});
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { SvgXml } from 'react-native-svg';

import STYLES1 from '../STYLES1'
import svgs from '../svgs';
const CircleTickTextSuccessful = props => {
    return (
        <View style={style.viewstyle}>
            <View style={{
                height: 80, width: 80, borderRadius: 153,
                backgroundColor: '#FFA900', justifyContent: 'center',
                alignItems: "center", marginBottom: '3%'
            }}>



                <SvgXml xml={svgs.tick} />


            </View>
            <Text style={STYLES1.fontSize40_454F63_GibsonSemiBold}>Successful</Text>
        </View>
    );
};



export default CircleTickTextSuccessful;

const style = StyleSheet.create({
    viewstyle: {
        alignItems: "center"
    },

});



///////
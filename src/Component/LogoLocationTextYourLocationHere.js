import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { SvgXml } from 'react-native-svg'
import svgs from '../svgs';
import Text1 from './Text1'
import STYLES from '../STYLES';

const LogoLocationTextIinputYourLocationHere = props => {
    return (
        <TouchableOpacity style={style.viewstyle} onPress={props.onPress}>

            <SvgXml xml={svgs.locationlogo} style={{ marginRight: '15%' }} />
            <Text1 text={props.text}
                style={
                    STYLES.textfont16gibson78849E
                } />

        </TouchableOpacity>
    );
};



export default LogoLocationTextIinputYourLocationHere;

const style = StyleSheet.create({
    viewstyle: {

        backgroundColor: 'white',
        height: 60,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '5%'

    },

});
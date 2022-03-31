import React from 'react';
import { Surface, } from 'react-native-paper';
import { TouchableOpacity, Text, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import STYLES1 from '../STYLES1';
const TextInput1 = props => {
    return (
        <Surface style={{
            elevation: 5, shadowColor: '#455B63', borderRadius: 12,
        }}>
            <TextInput style={[style.input,
            STYLES1.fontSize15_120_132_158_056_GibsonSemiBold]} onPressIn={props.onPress}

                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                placeholderTextColor='rgba(120,132,158,0.56)'
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
            />
        </Surface>
    );
};



export default TextInput1;
const style = StyleSheet.create({
    input: {

        height: 60,
        borderRadius: 12,
        paddingLeft: '5%',
        backgroundColor: '#FFFFFF',


    },

});
/////
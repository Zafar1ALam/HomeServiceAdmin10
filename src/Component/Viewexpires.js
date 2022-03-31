import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import STYLES1 from '../STYLES1';
import { cc } from '../Context'

const Viewexpires = props => {
    const { onChangeTextCreditCardExpires } = useContext(cc);
    const [stateMonth, setStateMonth] = useState('')
    const [stateYear, setStateYear] = useState('')

    const [stateMonthYear, setStateMonthYear] = useState('');

    const mergeText = (text) => {
        setStateYear(text)
        setStateMonthYear(stateMonth.concat(stateYear))
        //  console.log(stateMonthYear)
        // if (stateMonthYear.length == 4) 

        // const myTimeout = setTimeout(() => {
        //     console.log(stateMonthYear)
        //     console.log('asdf')
        // }, 20000);
        // if (stateMonthYear.length == 4)
        //     clearTimeout(myTimeout);
    }
    console.log(stateMonthYear)

    return (
        <View style={style.viewstyle}>
            <Text style={STYLES1.fontSize11_FFFFFF_GibsonRegular}>
                {props.text1}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                    onChangeText={(text) => setStateMonth(text)}
                    placeholderTextColor={'#FFFFFF'}
                    placeholder="MM"
                    maxLength={2}
                    keyboardType='numeric'
                    style={STYLES1.fontSize14_FFFFFF_GibsonSemiBold} />
                <Text style={STYLES1.fontSize14_FFFFFF_GibsonSemiBold}>/</Text>
                <TextInput
                    onChangeText={(text) => mergeText(text)}
                    placeholderTextColor={'#FFFFFF'}
                    placeholder="YY"
                    keyboardType='numeric'
                    style={STYLES1.fontSize14_FFFFFF_GibsonSemiBold}
                    maxLength={2} />
            </View>
        </View>
    );
};



export default Viewexpires;

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
//not use 
import React, { useState } from 'react';

import {
    View, ScrollView,
    StyleSheet, TextInput, Text
} from 'react-native'

import STYLES1 from '../../STYLES1';

import TextArea from '../../Component/TextArea';
import { cc } from '../../Context'
import ButtonCancel from '../../Component/ButtonCancel';


import { SvgXml } from 'react-native-svg'
import svgs from '../../svgs';

import ButtonApply from '../../Component/ButtonApply';

import CountryNamePicker from '../../Component/CountryNamePicker';
import ViewCardNumberName from '../../Component/Viewcardnumbername';



import ViewCVC from '../../Component/ViewCVC';
const Payment = ({ route, navigation }) => {
    const [stateCountryName, setStateCountryName] = useState('');
    const [stateAddress, setStateAddress] = useState('');
    const [stateCreditCardNo, setstateCreditCardNo] = useState('');
    const [stateCreditCardName, setstateCreditCardName] = useState('');
    const [stateExpires, setstateExpires] = useState('');
    const [stateCVC, setstateCVC] = useState('');
    const [stateMonth, setStateMonth] = useState('')
    const [stateYear, setStateYear] = useState('')



    const funcCountryNameSelect = (country) => {
        console.log(country)
        setStateCountryName(country)
    }

    const onChangeTextAddress = (text) => {
        console.log(text)
        setStateAddress(text)
    }

    const onChangeTextCreditCardNo = (text) => {
        setstateCreditCardNo(text)
    }
    const onChangeTextCreditCardName = (text) => {
        setstateCreditCardName(text)
    }

    const onChangeTextCreditCardCVC = (text) => {
        console.log(text)
        setstateCVC(text)
    }


    const mergeText = (text) => {

        var a = stateMonth.concat(text)

        console.log(a)


        setstateExpires(a)

    }
    const Apply = () => {
        console.log(`fullname: ${fullname},
        username:${username},
        email: ${email},
        password: ${password},
        phone: ${phone},            
        cardnumber: ${stateCreditCardNo},            
        expires: ${stateExpires}        
        `)


        fetch('https://mtechub-project1.herokuapp.com/signup/user', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fullname": fullname,
                "username": username,
                "email": email,
                "password": password,
                "phone": phone,
                "cardnumber": stateCreditCardNo,
                "expires": stateExpires
            })
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.success) {
                    console.log(json)
                    navigation.navigate("Successful")
                } else {
                    console.log('qwerty')
                }
            }
            )
            .catch((error) => {
                console.error(error);

            })
        // navigation.navigate("Successful")

    }

    const { fullname
        , username
        , email
        , password
        , phone
        , role } = route.params;
    console.log(`fullname: ${fullname},
        username:${username},
            email: ${email},
            password: ${password},
            phone: ${phone},            
            "Role": ${role}`)
    return (
        <ScrollView>
            <View style={[STYLES1.container, STYLES1.containerpadding, {


            }]}>
                <View style={{
                    flex: 0.4, //backgroundColor: 'red',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flex: 0.5,// backgroundColor: "green"
                    }}>
                        <SvgXml xml={svgs.leftarrowpayment} onPress={() => { navigation.goBack() }}
                        />
                        <Text style={STYLES1.fontSize40_454F63_GibsonSemiBold}>Payment</Text>

                    </View>
                    <View style={{
                        flex: 0.5, paddingHorizontal: '3%',
                        justifyContent: 'space-between'
                    }} >
                        <View style={{

                            flexDirection: 'row', justifyContent: 'space-evenly',
                            flex: 0.45
                        }}>
                            <ViewCardNumberName text1="Card number"
                                placeholder="0123 4567 8910 1112"
                                onChangeText={onChangeTextCreditCardNo}
                                maxLength={16}
                                keyboardType='numeric'
                            />

                            <View style={style.viewstyle}>
                                <Text style={STYLES1.fontSize11_FFFFFF_GibsonRegular}>
                                    Expires</Text>

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

                        </View>
                        <View style={{
                            flexDirection: 'row',
                            flex: 0.45, justifyContent: 'space-evenly',
                        }}>
                            <ViewCardNumberName text1="Name"
                                onChangeText={onChangeTextCreditCardName}
                                placeholder="JOHN DOE" />
                            <ViewCVC text1="CVC"
                                placeholder="000"

                                onChangeText={onChangeTextCreditCardCVC}
                            />
                        </View>
                    </View>

                </View>
                <View style={{
                    flex: 0.4,
                    justifyContent: "space-evenly"
                }}>
                    <cc.Provider value={{ funcCountryNameSelect }} >
                        <CountryNamePicker />

                    </cc.Provider>



                    <TextArea placeholder="Address"
                        onChangeText={onChangeTextAddress}
                    />
                </View>
                <View style={{
                    flex: 0.4, //: 'red',
                    justifyContent: "flex-end",
                }}>
                    <View style={{
                        flexDirection: "row",// backgroundColor: 'green',
                        flex: .4, justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                        <ButtonCancel text="CANCEL" style={{ flex: .45, }} />
                        <ButtonApply text="APPLY" style={{ flex: .45 }}
                            onPress={() => { Apply() }} />
                    </View>
                </View>

            </View>
        </ScrollView >
    );
};



export default Payment;

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
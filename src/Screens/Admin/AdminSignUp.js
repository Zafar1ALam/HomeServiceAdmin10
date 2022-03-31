import React, { useState, useEffect, } from 'react';
import Text1 from '../../Component/Text1';
import STYLES from '../../STYLES';
import {
    View, Dimensions, Image, Text,
    ScrollView, ImageBackground, StyleSheet, StatusBar,
} from 'react-native'
import TextInput1 from '../../Component/TextInput1';
import Button1 from '../../Component/Button1';

import CountryCodeWithPhoneNo, { setPhoneNo } from '../../Component/CountryCodeWithPhoneNo'


import { RadioButton } from 'react-native-paper';


import Password from '../../Component/Password';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { cc } from '../../Context'
import STYLES1 from '../../STYLES1';


const AdminSignUp = ({ navigation }) => {
    const [validation, setValidation] = React.useState({
        isValidFullName: true,
        isValidUserName: true,
        isValidEmail: true,
        isValidPassword: true,
        isValidPhone: true,


    })
    const [data, setData] = React.useState({
        stateFullName: '',
        stateUserName: '',
        stateEmail: '',
        statePassword: '',
        stateRole: 'driver',
        statePhoneNo: '',
    });
    const [secureTextEntry, setSecureTextEntry] = React.useState({
        pwd: true,
        confrm_pwd: true
    });
    const handleValidEmail = (val) => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (reg.test(val)) {
            return true;
        }
        else {
            return false;
        }
    }
    const validateData = () => {
        console.log('a')
        if (data.stateFullName === '') {
            setValidation({
                ...validation,
                isValidFullName: false
            })
            return;
        }
        else if (data.stateUserName === '') {
            setValidation({
                ...validation,
                isValidUserName: false
            })
            return;
        }
        else if (!handleValidEmail(data.stateEmail) || data.stateEmail === '') {
            setValidation({
                ...validation,
                isValidEmail: false
            })
            return;
        }
        else if (data.statePassword === '') {
            setValidation({
                ...validation,
                isValidPassword: false
            })
            return;
        }


        // else if (data.statePhoneNo === '') {
        //     setValidation({
        //         ...validation,
        //         isValidPhone: false
        //     })
        //     return;
        // }
        else {
            navigation.navigate('Payment', {
                fullname: data.stateFullName,
                username: data.stateUserName,
                email: data.stateEmail,
                password: data.statePassword,
                phone: data.statePhoneNo,
                role: data.stateRole,
            });
        }
    }





    const [displayFullNameError, setDisplayFullNameError] = useState('none');
    const [displayUserNameError, setDisplayUserNameError] = useState('none');
    const [displayEmptyEmailError, setDisplayEmptyEmailError] = useState('none');
    const [displayInValidEmailError, setDisplayInValidEmailError] = useState('none');
    const [displayPasswordError, setDisplayPasswordError] = useState('none');
    const [displayPhoneNoError, setDisplayPhoneNoError] = useState('none');




    // const checkEmail = () => {
    //     // console.log('pppppppppp')
    //     var validator = require("email-validator");
    //     if (validator.validate(stateEmail)) {
    //         setDisplayInValidEmailError('none')
    //         setDisplayEmptyEmailError('none')
    //     }
    //     if (validator.validate(stateEmail) == false && stateEmail.length != 0) {
    //         // console.log('gggggggg')
    //         // console.log(displayEmptyEmailError.length)
    //         setDisplayInValidEmailError('flex')
    //         setDisplayEmptyEmailError('none')

    //     }
    // }

    // const saveToAsyncStorage = async (data) => {
    //     console.log("saveToAsyncStorage")
    //     // console.log(data)
    //     try {
    //         const jsonSetValue = JSON.stringify(data)
    //         await AsyncStorage.setItem('responseDataBaseSignUp', jsonSetValue)
    //     } catch (e) {
    //         console.log(e)
    //     }
    //     try {
    //         const jsonGetValue = await AsyncStorage.getItem('responseDataBaseSignUp')
    //         jsonGetValue != null ? console.log(JSON.parse(jsonGetValue))
    //             : null
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // const sendData = () => {




    //     console.log(`fullname: ${stateFullName},
    //     username:${stateUserName},
    //         email: ${stateEmail},
    //         password: ${statePassword},
    //         phone: ${statePhoneNo},


    //         "Role": ${stateRole}`)
    //     console.log(statePhoneNo + "phone no send data")



    //     if (stateFullName.length != 0) {
    //         setDisplayFullNameError('none')
    //         console.log('fullnamenone')
    //     }
    //     if (stateUserName.length != 0) {
    //         setDisplayUserNameError('none')
    //         console.log('usernamenone')
    //     }
    //     if (stateEmail.length != 0) {
    //         setDisplayEmptyEmailError('none')
    //         //  setDisplayInValidEmailError('none')
    //         console.log('emailnone')
    //     }
    //     if (statePassword.length != 0) {
    //         setDisplayPasswordError('none')
    //         console.log('passwordnone')
    //     }
    //     if (statePhoneNo.length != 0) {
    //         setDisplayPhoneNoError('none')
    //         console.log('phonenonone')
    //     }


    //     console.log(statePhoneNo)
    //     if (stateFullName.length === 0) {
    //         setDisplayFullNameError('flex')
    //         console.log('fullname')
    //     }
    //     if (stateUserName.length === 0) {
    //         setDisplayUserNameError('flex')
    //         console.log('username')
    //     }
    //     if (stateEmail.length === 0) {
    //         setDisplayEmptyEmailError('flex')
    //         setDisplayInValidEmailError('none')
    //         console.log('email')
    //     }
    //     if (statePassword.length === 0) {
    //         setDisplayPasswordError('flex')
    //         console.log('password')
    //     }
    //     if (statePhoneNo.length === 0) {
    //         setDisplayPhoneNoError('flex')
    //         console.log('phoneno')
    //     }



    //     //checkEmail()
    //     // }
    //     if (true
    //         //  stateFullName.length != 0 && stateUserName.length != 0 && stateEmail.length != 0
    //         //     && statePassword.length != 0 && statePhoneNo.length != 0 && displayInValidEmailError === 'none'
    //     ) {
    //         navigation.navigate('Payment', {
    //             fullname: data.stateFullName,
    //             username: data.stateUserName,
    //             email: data.stateEmail,
    //             password: data.statePassword,
    //             phone: data.statePhoneNo,
    //             role: data.stateRole,
    //         });
    //     }







    // }

    const passwordComeFromChildComponent = (password) => {
        console.log(password)
        setData({ ...data, statePassword: password })
        // setStatePassword(password)
    }
    const phoneNoComeFromChildComponent = (phoneNo) => {
        console.log(phoneNo)
        setData({ ...data, statePhoneNo: phoneNo })
        // setStatePhoneNo(phoneNo)
    }
    return (
        <ScrollView>
            <View style={[STYLES1.container, STYLES1.containerpadding]}>

                <View style={{ flex: 0.65, justifyContent: 'space-evenly' }}>
                    <TextInput1 placeholder="Full Name" onChangeText={(text) => {
                        setData({ ...data, stateFullName: text })
                        setValidation({ ...validation, isValidFullName: true })
                    }} />


                    {!validation.isValidFullName ? <Text style={{ fontSize: 15, color: 'red' }}>Full Name cannot be empty</Text> : null}


                    <TextInput1 placeholder="Username" onChangeText={(text) => {
                        setData({ ...data, stateUserName: text })
                        setValidation({ ...validation, isValidUserName: true })
                    }} />
                    {!validation.isValidUserName ? <Text style={{ fontSize: 15, color: 'red' }}>UserName cannot be empty</Text> : null}
                    <TextInput1 placeholder="Email" onChangeText={(text) => {
                        setData({ ...data, stateEmail: text })
                        setValidation({ ...validation, isValidEmail: true })
                    }} />
                    {!validation.isValidEmail ? <Text style={{ fontSize: 15, color: 'red' }}>Invalid Email</Text> : null}


                    <cc.Provider value={{
                        passwordComeFromChildComponent,
                        displayPasswordError,
                        phoneNoComeFromChildComponent,
                        displayPhoneNoError
                    }}>
                        <Password onChangeText={(text) => {
                            setData({ ...data, statePassword: text })
                            setValidation({ ...validation, isValidPassword: true })
                        }} />
                        {!validation.isValidPassword ? <Text style={{ fontSize: 15, color: 'red' }}>Invalid Email</Text> : null}
                        <CountryCodeWithPhoneNo />

                    </cc.Provider>









                </View>
                <View style={{
                    flex: 0.35, // backgroundColor: 'red',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        justifyContent: 'space-between',

                    }}>

                        <Text style={[STYLES1.fontSize20_454F63_GibsonSemiBold,
                        { marginBottom: '5%' }]}>I am a :</Text>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',

                        }}>
                            <RadioButton color="#FFA900"
                                value="driver"
                                status={data.stateRole === 'driver' ? 'checked' : 'unchecked'}
                                onPress={() => { setData({ ...data, stateRole: 'driver' }), console.log(stateRole) }}
                            />
                            <Text style={STYLES1.fontSize20_454F63_GibsonSemiBold}>Driver
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RadioButton color="#FFA900"
                                value="customer"
                                status={data.stateRole === 'customer' ? 'checked' : 'unchecked'}
                                onPress={() => { setData({ ...data, stateRole: 'customer' }), console.log(stateRole) }}
                            />
                            <Text style={STYLES1.fontSize20_454F63_GibsonSemiBold}>Customer
                            </Text>
                        </View>


                    </View>
                    <Button1 text="CONTINUE" //onPress={() => { navigation.navigate("Payment") }}
                        onPress={() => { validateData() }}
                    />
                </View>


            </View>

        </ScrollView>
    );
};


export default AdminSignUp;




const style = StyleSheet.create({


    containerstylephoneinput: {
        borderColor: 'grey',// borderWidth: 1,
        // backgroundColor: 'red',
        height: 60, width: 'auto',
        paddingLeft: 0,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000000'
    },
    textinputstylephoneno: {

        //   backgroundColor: 'blue'
    },
    textcontainerstylephoneno: {
        justifyContent: 'center',

        paddingTop: '1%', borderRadius: 10, marginLeft: 0,
        paddingBottom: '1%',
        //  backgroundColor: 'green'
    },
});
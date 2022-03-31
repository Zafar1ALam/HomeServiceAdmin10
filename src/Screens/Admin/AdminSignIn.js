import React, { useState, useEffect, } from 'react';

import STYLES1 from '../../STYLES1';
import {
    View, Text,
    TouchableOpacity, ScrollView
} from 'react-native'
import TextInput1 from '../../Component/TextInput1';
import Button1 from '../../Component/Button1';
import Password from '../../Component/Password';
import { cc } from '../../Context'





const AdminSignIn = ({ navigation }) => {
    const [validation, setValidation] = React.useState({

        isValidEmail: true,
        isValidPassword: true,



    })
    const [data, setData] = React.useState({

        stateEmail: '',
        statePassword: '',

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


    const sendData = () => {

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

        else {
            fetch('https://mtechub-project-cheers.herokuapp.com/api/user/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Email: data.stateEmail,
                    Password: data.statePassword
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.success) {

                    }
                }
                    //  console.log(data)

                )
                .catch((error) => {
                    console.error(error);
                })
        }




    }




    const passwordComeFromChildComponent = (password) => {
        console.log(password)
        setData({ ...data, statePassword: password })
        setValidation({ ...validation, isValidPassword: true })
    }


    return (
        <ScrollView>
            <View style={[STYLES1.container, STYLES1.containerpadding, {
                justifyContent: 'space-between',
            }]}>
                <View style={{
                    flex: 0.6, justifyContent: 'space-evenly',
                    marginTop: '5%'
                }}>
                    <TextInput1 placeholder="Email"
                        onChangeText={(text) => {
                            setData({ ...data, stateEmail: text })
                            setValidation({ ...validation, isValidEmail: true })
                        }} />
                    {!validation.isValidEmail ? <Text style={{ fontSize: 15, color: 'red' }}>Invalid Email</Text> : null}



                    <cc.Provider value={{
                        passwordComeFromChildComponent: passwordComeFromChildComponent,

                    }}>
                        <Password
                        />
                        {!validation.isValidPassword ? <Text style={{ fontSize: 15, color: 'red' }}>Password  CanNot Empty</Text> : null}
                    </cc.Provider>
                    <TouchableOpacity style={{
                        height: 60,
                        borderRadius: 12,
                        backgroundColor: '#FFFFFF',
                        justifyContent: 'center', alignItems: 'center',
                        elevation: 5, shadowColor: '#455B63',

                    }}>
                        <Text style={STYLES1.fontSize12_120_132_158_057_GibsonSemiBold}>FORGOT PASSWORD</Text>

                    </TouchableOpacity>

                </View>

                <Button1 text="CONTINUE"
                    onPress={() => { sendData() }} />




            </View>
        </ScrollView >
    );
};


export default AdminSignIn;

import React, { useState, useContext } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    StatusBar,
    TouchableOpacity,
    Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { cc } from '../Context';


const CountryCodeWithPhoneNo = (props) => {
    const { phoneNoComeFromChildComponent, displayPhoneNoError } = useContext(cc);
    const [value, setValue] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [formattedValue, setFormattedValue] = useState('');
    const [valid, setValid] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <>

            <StatusBar barStyle="dark-content" />

            <PhoneInput placeholder="Phone No"
                containerStyle={style.containerstylephoneinput}
                //codeTextStyle={{ backgroundColor: "yellow" }}
                textInputStyle={style.textinputstylephoneno}
                textContainerStyle={style.textcontainerstylephoneno}
                // ref={phoneInput}
                defaultValue={value}
                defaultCode="PK"
                layout="first"
                // onChangeText={(text) => {
                //     setValue(text);
                //     console.log(text + "text")

                // }}
                // onChangeCountry={(text => {
                //     console.log(text.name + "name")
                // })}


                onChangeFormattedText={(text) => {
                    //  setFormattedValue(text);
                    //  console.log(text + "text")
                    // console.log(formattedValue + "formattesvalue")
                    phoneNoComeFromChildComponent(text)
                    // setCountryCode(phoneInput.current?.getCountryCode() || '');
                    // console.log(phoneInput.current?.getCountryCode() || '')
                }}
                countryPickerProps={{ withAlphaFilter: true }}
                disabled={disabled}
                withDarkTheme
                withShadow
                autoFocus
            />
            <Text style={{ fontSize: 15, color: 'red', display: displayPhoneNoError }}>Please Enter Phone No</Text>

        </>

    );
};

const style = StyleSheet.create({


    containerstylephoneinput: {

        // backgroundColor: 'red',
        height: 60, width: 'auto',
        paddingLeft: 0,
        borderRadius: 12,
        elevation: 5,
        shadowColor: '#000000'
    },
    textinputstylephoneno: {

        //   backgroundColor: 'blue'
    },
    textcontainerstylephoneno: {
        justifyContent: 'center',

        paddingTop: '1%', borderRadius: 12, marginLeft: 0,
        paddingBottom: '1%',
        //  backgroundColor: 'green'
    },
});

export default CountryCodeWithPhoneNo;


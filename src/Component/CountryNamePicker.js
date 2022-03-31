import React, { useState, useContext } from 'react'
import {
    Text,
    StyleSheet,
    PixelRatio,
    Switch,
    Button, View,
    ScrollView,
} from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { Surface, } from 'react-native-paper';
import STYLES1 from '../STYLES1';
import { cc } from '../Context';

const CountryNamePicker = () => {
    const { funcCountryNameSelect } = useContext(cc);
    const [countryCode, setCountryCode] = useState()
    const [country, setCountry] = useState()
    const [withCountryNameButton, setWithCountryNameButton] = useState(
        true
    )
    const [withFlagButton, setWithFlagButton] = useState(true)
    const [withCallingCodeButton, setWithCallingCodeButton] = useState(
        true
    )
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(true)
    const [withCallingCode, setWithCallingCode] = useState(true)
    const [withModal, setWithModal] = useState(true)
    ////
    const [visible, setVisible] = useState(false)
    const [dark, setDark] = useState(false)
    const [fontScaling, setFontScaling] = useState(true)
    const [disableNativeModal, setDisableNativeModal] = useState(false)
    const onSelect = (country) => {
        setCountryCode(country.cca2)
        console.log(country.cca2)
        console.log(country.name)
        funcCountryNameSelect(country.name)
        /// setCountry(country.name)

    }

    const switchVisible = () => setVisible(!visible)
    return (

        <Surface style={{

            elevation: 5, shadowColor: '#455B63', borderRadius: 12,
        }}>
            <CountryPicker
                containerButtonStyle={STYLES1.viewcountrynamepicker}

                {...{
                    //country,
                    countryCode,
                    withFilter,
                    withFlag,
                    withFlagButton,
                    withCallingCodeButton,
                    withCountryNameButton,
                    withAlphaFilter,
                    withCallingCode,
                    withModal,
                    withFlagButton,
                    onSelect,
                    dark,
                    //visible: true,



                    onClose: () => setVisible(false),
                    onOpen: () => setVisible(true),
                }}
            />
        </Surface>

    )

}



export default CountryNamePicker;
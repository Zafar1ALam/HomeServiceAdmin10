import React from 'react';

import { View } from 'react-native'

import CircleTickTextSuccessful from '../../Component/CircleTickTextSuccessful';
import Button1 from '../../Component/Button1';
import STYLES1 from '../../STYLES1';

const Successful = ({ navigation }) => {
    return (
        <View style={[STYLES1.container, STYLES1.containerpadding, {


        }]}>
            <View style={{ flex: 0.55, justifyContent: 'flex-end' }}>

                <CircleTickTextSuccessful />
            </View>
            <View style={{ flex: 0.55, justifyContent: 'flex-end' }}>

                <Button1 text="Go to Home"// onPress={() => { navigation.navigate("MainYourLocationHere") }} 
                />
            </View>




        </View>
    );
};



export default Successful;
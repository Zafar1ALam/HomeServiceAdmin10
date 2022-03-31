import React from 'react';

import STYLES1 from '../../STYLES1'
import { View, Text, ImageBackground } from 'react-native'

import Button1 from '../../Component/Button1';

const WelcomeToApp = ({ navigation }) => {
    return (
        <View style={STYLES1.container}>
            <ImageBackground source={require('../../Images/BackgroundImage.png')} style={{
                resizeMode: "cover", //justifyContent: 'center', alignItems: 'center',
                flex: 1,


            }} >
                <View style={{
                    justifyContent: 'flex-end', flex: 0.6,

                }}>
                    <Text style={[STYLES1.fontSize52_FFFFFF_GibsonSemiBold,
                    { textAlign: 'center' }]} >Welcome to App</Text>
                    <Text style={[STYLES1.fontSize14_FFFFFF_GibsonRegular,
                    { textAlign: 'center' }]} >Your subtitle here</Text>

                </View>
                <View style={{
                    justifyContent: 'flex-end', flex: 0.4,

                }}>
                    <Button1 text="GET STARTED" onPress={() => { navigation.navigate("TabNavigation") }} />
                </View>






            </ImageBackground>


        </View >


    );
};



export default WelcomeToApp;


/////////
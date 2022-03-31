import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SignIn from '../Screens/Admin/AdminSignIn'
import SignUp from '../Screens/Admin/AdminSignUp';
const Tab = createMaterialTopTabNavigator();

const TabNavigation = props => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="SignIn" component={SignIn}
                screenOptions={{
                    tabBarIndicatorContainerStyle: {
                        backgroundColor: 'red'
                    }
                }} />
            <Tab.Screen name="SignUp" component={SignUp} />
        </Tab.Navigator>
    );
}

export default TabNavigation;
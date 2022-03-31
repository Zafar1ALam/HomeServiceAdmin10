import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeToApp from '../Screens/Admin/WelcomeToApp'

import AdminProvideServices from '../Screens/Admin/AdminProvideServices';
import TabNavigation from './TabNavigation'
import Payment from '../Screens/Customer/Payment';
import Successful from '../Screens/Customer/Successful';
const Stack = createNativeStackNavigator();
const Routes = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeToApp">
                <Stack.Screen name="WelcomeToApp" component={WelcomeToApp} options={{
                    headerShown: false,
                }} />


                <Stack.Screen name="TabNavigation" component={TabNavigation} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="AdminProvideServices" component={AdminProvideServices} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Payment" component={Payment} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="Successful" component={Successful} options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};



export default Routes;
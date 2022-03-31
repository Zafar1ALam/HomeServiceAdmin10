/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
import App from './App';
import { name as appName } from './app.json';
import CountryNamePicker from './src/Component/CountryNamePicker';
import AdminProvideServices from './src/Screens/Admin/AdminProvideServices';
import AdminSignIn from './src/Screens/Admin/AdminSignIn';
import MainYourLocationHere from './src/Screens/Customer/MainYourLocationHere';
import Payment from './src/Screens/Customer/Payment'
import Successful from './src/Screens/Customer/Successful';

AppRegistry.registerComponent(appName, () => App
);

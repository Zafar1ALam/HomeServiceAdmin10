import React, { useState } from 'react';

import { View, StyleSheet, FlatList, Text } from 'react-native'
import STYLES from '../../STYLES'
import LogoLocationTextYourLocationHere from '../../Component/LogoLocationTextYourLocationHere'

import ImageNameGmail from '../../Component/ImageNameGmail'
import Textleftsidebuttonreightside from '../../Component/Textleftsidebuttonreightside';
import ServiceBox from '../../Component/ServiceBox';

const MainYourLocationHere = ({ navigation }) => {
    const [flatList, setFlatList] = useState([{
        id: 1,
        orderno: "#1234556",
        subtotal: 1000
    },
    {
        id: 2,
        orderno: "#1234556",
        subtotal: 1000
    },
    ])
    return (
        <View style={[STYLES.container]}>
            <View style={style.header}>
                <LogoLocationTextYourLocationHere text="Your location Here"
                    onPress={() => { navigation.navigate("FlatListYourLocationHere") }} />
                <View style={{ justifyContent: "center", flex: 1, paddingLeft: '2%' }}>
                    <ImageNameGmail
                        name="Jhon Deo" gmail="@jhondeo"
                        onPress={() => navigation.navigate("MyProfile")} />
                </View>
            </View>
            <View style={style.content}>
                <Textleftsidebuttonreightside texttext="Choose Urgent Service"
                    onPress={() => { navigation.navigate("ServiceNameHere") }}
                    textbutton="See All"
                />
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around',

                }}>
                    <ServiceBox style={{ flex: 0.3 }} source={require('../../Images/service1logo.png')}
                        service="Service 1" />
                    <ServiceBox style={{ flex: 0.3 }} source={require('../../Images/service1logo.png')}
                        service="Service 2" />
                    <ServiceBox style={{ flex: 0.3 }} source={require('../../Images/service1logo.png')}
                        service="Service 3" />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <ServiceBox style={{ flex: 0.3 }} source={require('../../Images/service1logo.png')}
                        service="Service 4" />
                    <ServiceBox style={{ flex: 0.3 }} source={require('../../Images/service1logo.png')}
                        service="Service 5" />
                    <ServiceBox style={{ flex: 0.3 }} source={require('../../Images/service1logo.png')}
                        service="Service 6" />
                </View>


            </View>
            <View style={style.footer}>
                <View >
                    <Textleftsidebuttonreightside
                        texttext="Orders in Progress"
                        textbutton="See All" onPress={() => { navigation.navigate("OrderHistory") }} />
                </View>
                <View>
                    <FlatList
                        data={flatList}
                        renderItem={({ item }) => {
                            console.log(item.userName)
                            console.log(item.id)
                            return (
                                <View style={{
                                    backgroundColor: '#FFFFFF',
                                    borderRadius: 14,
                                    paddingHorizontal: '4%',
                                    height: 80,
                                    marginBottom: '2%',
                                    borderColor: '#707070',
                                    borderWidth: 1,
                                    justifyContent: 'space-evenly'
                                }} >
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={style.textfullopacity}>Order No:</Text>
                                        <Text style style={style.textfullopacity}>{item.orderno}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={style.texthalfopacity}>Subtotal</Text>
                                        <Text style={style.texthalfopacity}>{item.subtotal}</Text>
                                    </View>
                                </View>
                            )
                        }}
                        keyExtractor={(item) => item.id}


                    />
                </View>
            </View>





        </View>
    );
};



export default MainYourLocationHere;


const style = StyleSheet.create({
    header: {
        flex: 0.28,
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        backgroundColor: '#FFA900'
    },
    content: {
        flex: 0.33,
        //  backgroundColor: 'red',
        paddingVertical: '2%', justifyContent: "space-evenly",
        paddingHorizontal: '5%',
    },
    footer: {
        flex: 0.33,// backgroundColor: 'red',
        // paddingVertical: '2%',
        justifyContent: "space-evenly",
        paddingHorizontal: '5%',
    },
    textfullopacity: {
        fontSize: 18, fontWeight: "bold",
        color: 'rgba(74,75,77,1)',
    },
    texthalfopacity: {
        fontSize: 18, fontWeight: "bold",
        color: 'rgba(74,75,77,.52)',
        //color: '#4A4B4D'
    },

});
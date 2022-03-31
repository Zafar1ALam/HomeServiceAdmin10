import React, { useState } from 'react';

import { View, StyleSheet, Text, FlatList, ScrollView } from 'react-native'
import STYLES from '../../STYLES'
import ImageNameGmail from '../../Component/ImageNameGmail'
import TextInput1 from '../../Component/TextInput1';
import Button1 from '../../Component/Button1';

const AdminProvideServices = ({ navigation }) => {
    const [flatList, setFlatList] = useState([{
        id: 1,
        name: "#1234556",
        price: 1000
    },
    {
        id: 2,
        name: "#1234556",
        price: 1000

    },
    {
        id: 3,
        name: "#1234556",
        price: 1000



    },
    {
        id: 4,
        name: "#1234556",
        price: 1000



    },
    ])
    return (
        <ScrollView>
            <View style={[STYLES.container]}>
                <View style={{ flex: 1 }}>
                    <View style={style.header}>

                        <View style={{ justifyContent: "center", flex: 1, paddingLeft: '2%' }}>
                            <ImageNameGmail
                                name="Jhon Deo" gmail="@jhondeo"
                                onPress={() => navigation.navigate("MyProfile")} />
                        </View>

                    </View>
                    <View style={style.content}>
                        <Text style={STYLES.textfont19gibson454F63}>All Services </Text>
                        <View style={{ flex: 0.7 }}>
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
                                                <Text style={style.textfullopacity}>Name</Text>
                                                <Text style style={style.textfullopacity}>{item.name}</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={style.texthalfopacity}>Price</Text>
                                                <Text style={style.texthalfopacity}>{item.price}</Text>
                                            </View>


                                        </View>
                                    )
                                }}
                                keyExtractor={(item) => item.id}


                            />
                        </View>
                        <Text style={STYLES.textfont19gibson454F63}>Add Services </Text>
                        <TextInput1 placeholder="Services" />




                    </View>
                    <View style={style.footer}>

                        <Button1 text="Add" />
                    </View>

                </View>



            </View>
        </ScrollView>
    );
};



export default AdminProvideServices;


const style = StyleSheet.create({
    header: {
        flex: 0.18,
        paddingVertical: '2%',
        paddingHorizontal: '5%',
        backgroundColor: '#FFA900'
    },
    content: {
        flex: 0.53,
        //  backgroundColor: 'red',
        paddingVertical: '2%', justifyContent: "space-evenly",
        paddingHorizontal: '5%',
    },
    footer: {
        flex: 0.30, //backgroundColor: 'red',
        // paddingVertical: '2%',
        justifyContent: 'flex-end',
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
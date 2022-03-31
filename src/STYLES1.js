import { StyleSheet, Dimensions } from "react-native";

const STYLES1 = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        // backgroundColor: "yellow",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height

    },
    containerpadding: {
        paddingHorizontal: '5%',
        paddingVertical: '5%',

    },
    fontSize52_FFFFFF_GibsonSemiBold: {
        fontSize: 52,

        color: '#FFFFFF',
        //   fontFamily: GibsonSemiBold
    },
    fontSize40_454F63_GibsonSemiBold: {
        fontSize: 40,

        color: '#454F63',
        //   fontFamily: GibsonSemiBold
    },
    fontSize20_454F63_GibsonSemiBold: {
        fontSize: 20,

        color: '#454F63',
        //   fontFamily: GibsonSemiBold
    },
    fontSize15_120_132_158_056_GibsonSemiBold: {
        fontSize: 15,
        color: 'rgba(120,132,158,0.56)',
        //   fontFamily: GibsonSemiBold
    },////
    fontSize15_FFFFFF_GibsonSemiBold: {
        fontSize: 15,
        //FONTFAMILY:GIBSON SEMIBOLD
        color: '#FFFFFF'
    },
    fontSize14_FFFFFF_GibsonRegular: {
        fontSize: 14,
        color: '#FFFFFF'
        //   fontFamily: GibsonRegular
    },
    fontSize14_FFFFFF_GibsonSemiBold: {
        fontSize: 14,
        color: '#FFFFFF'
        //   fontFamily: GibsonSEMIBOLD
    },
    fontSize12_120_132_158_057_GibsonSemiBold: {
        fontSize: 12,
        color: 'rgba(120,132,158,0.57)',
        //   fontFamily: GibsonSemiBold
    },
    fontSize11_FFFFFF_GibsonRegular: {
        fontSize: 11,
        color: '#FFFFFF'
        //   fontFamily: GibsonRegular
    },
    viewcountrynamepicker: {
        paddingVertical: '5%',
        paddingHorizontal: '5%',
        // borderWidth: 1,
        borderRadius: 12,
        //fontSize: 35,
        // color: 'rgba(120,132,158,0.56)',


    },

})
export default STYLES1;
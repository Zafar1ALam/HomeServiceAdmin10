import React from 'react'
import { View } from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input'



const CreditCardInput1 = ({ navigation }) => {
    const _onChange = (form) => console.log(form);
    return (
        // <CreditCardInput
        //     inputContainerStyle={{
        //         borderWidth: 1,
        //         marginRight: '2%'
        //     }}

        // // autoFocus={true}
        // // labels={{ number: "Card number", expiry: "Expires", name: "Name", cvc: "CVC" }}
        // // onChange={_onChange} cardScale={0}
        // // //requiresCVC={false}
        // // requiresCVC={true}// requiresName={true}
        // // allowScroll={true} 
        // />
        <LiteCreditCardInput onChange={this._onChange} />
    );
};


export default CreditCardInput1;
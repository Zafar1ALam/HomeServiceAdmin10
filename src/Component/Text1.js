import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native'

const Text1 = props => {
    return (
        <Text style={props.style}>{props.text}</Text>
    );
};



export default Text1;
import React from 'react';
import { TextInput } from 'react-native';
import STYLES from '../STYLES'
import { Surface } from 'react-native-paper';

const TextArea = props => {
    return (
        <Surface style={{ elevation: 5, shadowColor: '#455B63', borderRadius: 12, }}>
            <TextInput style={STYLES.textarea} placeholder={props.placeholder}
                multiline={true}
                onChangeText={(text) => { props.onChangeText(text) }}
                numberOfLines={6} />
        </Surface>
    );
};



export default TextArea;
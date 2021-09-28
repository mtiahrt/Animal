import React from 'react'
import { Text, View } from 'react-native';

function Dog(props) {
    return (
        <View>
            <Text>Dog component! The Route is {props.route.name} screen</Text>
        </View>
    )
}

export default Dog

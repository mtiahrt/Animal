import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';


function Dog({ navigation, route }) {
    return (
        <View>
            <Text>Dog component! The Route is {route.params.name} screen</Text>
        </View>
    )
}

export default Dog

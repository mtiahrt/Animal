import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function CssColorItem({title, color}) {
    return (
        <View style={{...styles.item, ...{backgroundColor: color} }}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
      height: 150,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
    title: {
      fontSize: 32,
    },
  });


export default CssColorItem;

//react hook form
//Yup.js for form validation
//React navagation => using a tabulated page  
//React native paper => UI component
//redux-saga
//pull down repo and walk thourgh readMe.mp
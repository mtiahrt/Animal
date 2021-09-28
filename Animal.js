import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';


function Animal({ navigation }) {
    const handleButtonPressCat = () => {
        navigation.navigate('Cat', {name: 'Meow'})
    }
    const handleButtonPressDog = () => {
        navigation.navigate('Dog', {name: 'Woofy'})
    }
    const handleButtonPressCssColors = () => {
        navigation.navigate('CssColors', {name: 'Pretty'})
    }
    const handleButtonPressHookForm = () => {
        navigation.navigate('HookForm', {name: "Sweet Form"})
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Aminal App!!</Text>
            <Image source={{uri: 'https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg'}} 
              style={{width: 200, height: 200}}/>
              <Pressable style={styles.button} onPress={handleButtonPressCat}>
                  <Text>Go to the Cat screen</Text>
              </Pressable>
            <Pressable style={styles.button} onPress={handleButtonPressDog}>
                  <Text>Go to the Dog screen</Text>
              </Pressable>
            <Pressable style={styles.button} onPress={handleButtonPressCssColors}>
                  <Text>Go to the Css screen</Text>
              </Pressable>
            <Pressable style={styles.button} onPress={handleButtonPressHookForm}>
                  <Text>Go to the Hook Form</Text>
              </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
        alignItems: 'center',
        margin: 12,
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'lightblue',
      },
      text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        margin: 15,
        color: 'gray',
      },
  });

export default Animal

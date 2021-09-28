import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';


function Cat({ navigation }) {
    const handleButtonPress = () => {
        navigation.navigate('Dog', {name: 'Woofy'})
      }
      const clearExistingText = e => {
        console.log(e.defaultValue); 
        this.defaultValue = '';
      }
      const logo = {
        uri: 'https://reactnative.dev/img/tiny_logo.png',
        width: 64,
        height: 64
      };

    return (
        <View style={styles.container}>
          <ScrollView>
            <Text style={styles.textHeader}>Kitty App</Text>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>I added this text... I added some</Text>
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} 
              style={{width: 200, height: 200}}/>
            <StatusBar style="auto" />
            <TextInput onFocus={clearExistingText} style={{height: 40, borderColor:'black', borderWidth: 1}}
              placeholder="Add your Kitty's name here"></TextInput>
            <TextInput style={{height: 40, borderColor:'black', borderWidth: 1}}
              defaultValue="Value"></TextInput>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Image source={logo}></Image>
            <Text style={styles.textBody}>This is React Native!!!</Text>
            <Button onPress={handleButtonPress} title="Go to Dog screen"></Button>
          </ScrollView>
        </View>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {marginTop: 40, height: 100, fontSize: 50},
  textBody: {marginTop: 10, height: 50, fontSize: 20}
})

export default Cat

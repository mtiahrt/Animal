import React from 'react'
import { StyleSheet, SafeAreaView, VirtualizedList, StatusBar, Text, View } from 'react-native';
import CssColorItem from './CssColorItem';
import data from './cssColorsData.json'


const CssColors = () => {
    const getItemCount = (data) => data.length
    const getItem = (data, i) => data[i];
    return (
        <SafeAreaView style={styles.container}>
            <VirtualizedList
                data={data}
                initialNumToRender={4}
                renderItem={ ({ item }) => <CssColorItem title={item.colorName} color={item.value}/> }
                keyExtractor={item => item.key}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </SafeAreaView>
    )
}

export default CssColors;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    }
});
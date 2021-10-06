import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const Notification = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#333" barStyle="dark-content" />

            <Text></Text>
        </View>
    )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        flex: 1,justifyContent:'center',alignItems:'center',backgroundColor:"#333"
    }
})

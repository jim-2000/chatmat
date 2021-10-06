import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#333" barStyle="dark-content" />

            <Text>ChatScreen</Text>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,justifyContent:'center',alignItems:'center',backgroundColor:"#333"
    }
})

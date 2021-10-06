import React,{useContext} from 'react'
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../Navigations/AuthProvider';

const Home = () => {
    const {Logout,user} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#333" barStyle="dark-content" />
            <Text style={{fontSize:30}}>Well come page{user.uid} </Text>
            <Button title="logout" color="red" onPress={()=> Logout()} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,justifyContent:'center',alignItems:'center',backgroundColor:"#333"
    }
})

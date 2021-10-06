import React, { useState,useContext } from 'react'
import { StyleSheet, View,StatusBar, ScrollView,Alert, TouchableOpacity } from 'react-native'
import { Text,Image } from 'react-native-elements';
import FormButton from '../Widgets/FormButton';
import FormInput from '../Widgets/FormInput';
import SocialButton from '../Widgets/SocialButton';
import { AuthContext } from '../Navigations/AuthProvider';

const LoginScreen = ({navigation}) => {
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const {Loging,GoogleLogedIn,FacebookLogin} = useContext(AuthContext);
  





    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="light-content" />
            <Image source={require("../assets/rn-social-logo.png")} style={styles.logo} />
            <Text style={styles.text}>RN Social App</Text>
            <FormInput 
             iconType="mail"
             labelValue={email} 
             placeholderText="Email" 
             keyboardType="email-address"
             autoCapitalize="none"
             autoCorrect={false}
             onChangeText={(usermail)=>setemail(usermail)}
            />
            <FormInput 
                iconType="lock" 
                placeholderText="password" 
                secureTextEntry={true}
                onChangeText={(userpassword)=>setPassword(userpassword)}
                labelValue={password} 

            />
            <FormButton buttonTitle="Log in" 
                onPress={()=>Loging(email,password)}
            />

            <TouchableOpacity style={styles.forgotButton}>
                <Text style={styles.navButtonText}>Forget password</Text>
            </TouchableOpacity>

            <SocialButton 
                buttonTitle="Sign in with facebook"
                iconName="facebook"
                Iconcolor="#4867aa"
                backbuttoncolor="#e6eaf4"
                IconSize={24}
                onPress={()=>FacebookLogin()}
              
            />

            <SocialButton 
                buttonTitle="Sign in with Google"
                iconName="google"
                Iconcolor="#de4d41"
                backbuttoncolor="#f5e7ea"
                IconSize={24}
                onPress={()=>GoogleLogedIn()}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={()=>navigation.navigate("signup")}>
                <Text style={styles.navButtonText}>Don't have an account? Create new account</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}





export default LoginScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
      },
      logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
      },
      navButton: {
        marginTop: 15,
      },
      forgotButton: {
        marginVertical: 35,
      },
      navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
      },
})

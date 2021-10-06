import React, { useContext, useState } from 'react'
import { StyleSheet, View,StatusBar, ScrollView,Alert, TouchableOpacity } from 'react-native'
import { Text,Image } from 'react-native-elements';
import { AuthContext } from '../Navigations/AuthProvider';
import FormButton from '../Widgets/FormButton';
import FormInput from '../Widgets/FormInput';
import SocialButton from '../Widgets/SocialButton';

const SignupScreen = ({navigation}) => {
  const {Register,GoogleLogedIn} = useContext(AuthContext)


    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [confrimpassword, setConfirmPassword] = useState("")
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StatusBar backgroundColor="#ddd" barStyle="dark-content" />
            <Text style={styles.text}>Create New Account</Text>
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
              <FormInput 
                iconType="lock" 
                placeholderText="confirm password" 
                secureTextEntry={true}
                onChangeText={(userpasswordconfirm)=>setConfirmPassword(userpasswordconfirm)}
                labelValue={confrimpassword} 

            />
            <FormButton buttonTitle="Sign Up" 
                onPress={()=>Register(email,password)}
            />

        <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
            </Text>
            <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Terms of service
                </Text>
            </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                  Privacy Policy
                </Text>
      </View>

            <SocialButton 
                buttonTitle="Sign in with facebook"
                iconName="facebook"
                Iconcolor="#4867aa"
                backbuttoncolor="#e6eaf4"
                IconSize={24}
                onPress={()=>{}}
            />

            <SocialButton 
                buttonTitle="Sign in with Google"
                iconName="google"
                Iconcolor="#de4d41"
                backbuttoncolor="#f5e7ea"
                IconSize={24}
                onPress={()=>GoogleLogedIn()}
            />

            <TouchableOpacity style={styles.navButton} onPress={()=>navigation.navigate("login")}>
                <Text style={styles.navButtonText}>Have an account? Sign In</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default SignupScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor:"#ddd",
        flex: 1,    
      },    
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#de4d41',
        fontWeight:"bold"
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
        color: '#4897cc',
        fontFamily: 'Lato-Regular',
      },
      textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },
      color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
})

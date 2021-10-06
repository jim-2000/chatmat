import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../Screen/OnboardingScreen';
import LoginScreen from '../Screen/LoginScreen';
import { StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from '../Screen/SignupScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
const AppStack = createNativeStackNavigator();
const AuthStack = () => {
  const [isFirstLaunch, setisFirstLaunch] = useState(null)
  let routeName ;
  useEffect(()=>{
    AsyncStorage.getItem('alradyLaunched').then(value=>{
      if (value == null ) {
        AsyncStorage.setItem('alradyLaunched','true');
        setisFirstLaunch(true);
      }else{
        setisFirstLaunch(false);
      }
    });
    //
    GoogleSignin.configure({
      webClientId: '773350376458-ug4dmupoucc25jqqid80k37a9ulpmadf.apps.googleusercontent.com',
    });



  },[])
 //
if (isFirstLaunch == null) {
  return null;
}else if (isFirstLaunch == true) {
 routeName = 'Onboarding';
}else{
 routeName = 'login';
}

//

return (

      <AppStack.Navigator
      initialRouteName={routeName}
      screenOptions={{
        headerShown:false,
        headerTitle:"",
        headerTitleStyle:{
            color: '#2e64e5',
            fontFamily: 'Kufam-SemiBoldItalic',
            fontSize: 18,
        },
        headerStyle:{
            shadowColor: '#fff',
            elevation: 0,
        },   
      }}

      >
        <AppStack.Screen name="Onboarding" component={OnboardingScreen}  />
        <AppStack.Screen name="login" component={LoginScreen} />
        <AppStack.Screen name="signup" component={SignupScreen} />
      </AppStack.Navigator>
 
  )
}
export default AuthStack;
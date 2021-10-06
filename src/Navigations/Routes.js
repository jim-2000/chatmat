import React ,{useContext,useState,useEffect } from 'react'
import { ActivityIndicator, StatusBar } from 'react-native'
import {NavigationContainer  } from '@react-navigation/native'
//
import { AuthContext } from '../Navigations/AuthProvider'
import auth from '@react-native-firebase/auth';
//
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'



const Routes = ()=>{
    const {user,setUser} = useContext(AuthContext)
    const [iniallizing, setIniallizing] = useState(true)

    const onAuthStateChanged = (user)=>{
        setUser(user);
        if (setIniallizing) setIniallizing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;

        GoogleSignin.configure({
            webClientId: '773350376458-ug4dmupoucc25jqqid80k37a9ulpmadf.apps.googleusercontent.com',
          });
    }, [])

    if(iniallizing) return (
        <ActivityIndicator size="small" color="red" />
    );

    return (
        <NavigationContainer>
         <StatusBar backgroundColor="white"  barStyle="dark-content" />
            { user ? <HomeStack/>  : <AuthStack />}
        </NavigationContainer>
    )
}

export default Routes;
import React, { useEffect, useState } from 'react';
import {NavigationContainer  } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from './src/Screen/OnboardingScreen';
import LoginScreen from './src/Screen/LoginScreen';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Provider from './src/Navigations';

const AppStack = createNativeStackNavigator();
const App = () => {
/*
 import com.facebook.FacebookSdk;
import com.facebook.appevents.AppEventsLogger;
 

      
Et655zi+7VO46oPzGAfSYOWkICk=

*/
 return <Provider />

};

export default App;
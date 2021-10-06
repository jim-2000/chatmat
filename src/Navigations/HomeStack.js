import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import OnboardingScreen from '../Screen/OnboardingScreen';
import LoginScreen from '../Screen/LoginScreen';
import { Animated, StatusBar, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignupScreen from '../Screen/SignupScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../Screen/Home'
import ChatScreen from '../Screen/ChatScreen';
import Notification from '../Screen/Notification';

const Tab = createBottomTabNavigator();

//
const HomeStack = () => {

  const getTebBarVisible = (route)=>{
    const routename = route.state ? route.state.routes[route.state.index].name : '';
    if (routename ==  "Chat") {
      return false;
    }
    return true;
  }

 //

return (

      <Tab.Navigator 
     
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
        

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
           
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox-ellipses-outline' : 'chatbox-outline';
          }
          else if (route.name === 'Notification') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },  
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#2e64e5',
        headerShown:true,
        tabBarStyle:{
          backgroundColor:"#fff",
          position:'absolute',
          bottom:30,
          marginHorizontal:10,
          borderRadius:10,
          height: 60,
          shadowColor:"#000",
          shadowOpacity:0.7,
          shadowOffset:{
            height: 10,
            width: 10,
          },
        },
        tabBarLabelPosition:"beside-icon",
        tabBarShowLabel:false, 
        headerTitleAlign:"center",
        headerStyle:{
          backgroundColor:"#333",
          elevation:0,          
        },  
        headerTitleStyle:{color:"#fff",fontSize:20,textTransform:"uppercase"},
        headerRight:()=>(
        <View style={{marginRight:10}}>
          <Ionicons name="notifications" size={24} color="white" />
        </View>
      ),   
      headerLeft:()=>(
        <View style={{marginLeft:10}}>
          <Ionicons name="list" size={24} color="white" />
        </View>
      ),   
      })
      
      }
      >
      <Tab.Screen name="Home" 
        component={Home}
              
      />      
      <Tab.Screen name="Chat" 
        component={ChatScreen}
           
      />
      <Tab.Screen name="Notification" 
          component={Notification}           
      />

       
      </Tab.Navigator>
 
  )
}
export default HomeStack;
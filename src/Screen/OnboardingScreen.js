import React, { useState } from 'react'
import {  StyleSheet,  Button,  Image, View, StatusBar } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
//

// const skip = ({...props})=>(
//     <Button 
//     title="Skip"
//     color="#000"
//     {...props}
//     />
// );
// const Next = ({...props})=>(
//     <Button 
//     title="Next"
//     color="#000"
//     {...props}
//     />
// );

//
const OnboardingScreen = ({navigation}) => {


    return (

       <View style={{flex:1}}>
           <StatusBar barStyle="dark-content" backgroundColor="#333" />
            <Onboarding
                // SkipButtonComponent={skip}
                // NextButtonComponent={Next}
                onSkip={()=>navigation.replace("login")}
                onDone={()=>navigation.replace("login")}
                pages={[
                            {
                            backgroundColor: 'orange',
                            image: <Image source={require('../assets/onboarding-img1.png')} />,
                            title: 'Chat Mat',
                            subtitle: 'Datting With your Friends ',
                            },
                            {
                                backgroundColor: '#333333',
                                image: <Image source={require('../assets/onboarding-img2.png')} />,
                                title: 'The zero cuppon',
                                subtitle: 'Done with React Native Onboarding Swiper',
                            },
                            {
                                backgroundColor: 'skyblue',
                                image: <Image source={require('../assets/onboarding-img3.png')} />,
                                title: 'Be come a Lover',
                                subtitle: 'Loveing you like a loseing a game',
                            },

                        ]}
                />
       </View>

    )
}

export default OnboardingScreen

const styles = StyleSheet.create({})

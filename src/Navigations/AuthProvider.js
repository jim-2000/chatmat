import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
//
export const AuthContext = createContext();
//

//
export const AuthProvider = ({children})=>{
    //

    const [user, setUser] = useState(null);
    // loging function
    const Loging = async (email,password)  => {
        try {
           await auth().signInWithEmailAndPassword(email,password);
        } catch (e) {
            console.log(e);
        }
    }
    // Register function
        const Register = async (email,password)  => {
            try {
               await auth().createUserWithEmailAndPassword(email,password);
            } catch (e) {
                console.log(e);
            }
        }
    // logout function
      const Logout = async ()  => {
        try {
           await auth().signOut();
        } catch (e) {
            console.log(e);
        }
    }
    // google Login
        const GoogleLogedIn = async ()=>{
            try {
                const { idToken } = await GoogleSignin.signIn();

                // Create a Google credential with the token
                const googleCredential = auth.GoogleAuthProvider.credential(idToken);
              
                // Sign-in the user with the credential
                return auth().signInWithCredential(googleCredential);
            } catch (error) {
                console.log(error);
            }
        }
    // facebook login
    const FacebookLogin= async ()=>{
            try {
                // Attempt login with permissions
                const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

                if (result.isCancelled) {
                    throw 'User cancelled the login process';
                }

                // Once signed in, get the users AccesToken
                const data = await AccessToken.getCurrentAccessToken();

                if (!data) {
                    throw 'Something went wrong obtaining access token';
                }

                // Create a Firebase credential with the AccessToken
                const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

                // Sign-in the user with the credential
                return auth().signInWithCredential(facebookCredential);
            } catch (error) {
                console.log(error);
            }
    }
    //
    return (
        <AuthContext.Provider
        value={{
        user,
        setUser,
        Register,
        Loging,
        Logout,
        GoogleLogedIn,
        FacebookLogin

        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
//
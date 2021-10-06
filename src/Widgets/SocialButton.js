import React from 'react'
import { TouchableOpacity,Text,StyleSheet,View } from 'react-native'
import { widowheight } from '../utils/Dimentions';
import Icon from 'react-native-vector-icons/FontAwesome';


const SocialButton = ({buttonTitle,iconName, IconSize,Iconcolor, backbuttoncolor,...rest}) => {
    const bgcolor = backbuttoncolor;
    return (
        <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:bgcolor}]} {...rest}>
            <View style={styles.iconwrapper}>
                <Icon                    
                    name={iconName}
                    size={IconSize}
                    color={Iconcolor}   
                    style={styles.icon}                 
                />
            </View>
            <View style={styles.btntextwrapper}>
                  <Text style={[styles.buttonText,{color:Iconcolor}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width: '100%',
        height: widowheight/15,
        backgroundColor:'#2e64e5',
        padding: 10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:3,
        flexDirection:'row'
    },
    iconwrapper:{
        width: 30,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        fontWeight:'bold'
    },
    btntextwrapper:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color: '#ffffff',
        fontFamily:'Lato-Regular',
    }
})

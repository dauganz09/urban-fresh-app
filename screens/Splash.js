import { StyleSheet, Text, View,ImageBackground, SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import bg from '../assets/images/kiwi.png'
import logo from '../assets/images/logo.png'

const Splash = ({navigation}) => {
  return (
    <ImageBackground
        source={bg}
        resizeMode='cover'
        style={{
            flex:1
        }}
    >
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={logo}
            />
            <View style={styles.btnBox}>
                <Text style={styles.heading}>Quick delivery at your doorstep</Text>
                <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Loading')} style={styles.btn}>
                <Text style={styles.btn_text}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ImageBackground>
  
  )
}

export default Splash

const styles = StyleSheet.create({
    container : {
        flex :1,
        display :'flex',
        alignItems: 'center',
        justifyContent :'flex-end',
        position : 'relative'
        
    },
    logo : {
        width : 100,
        height : 100,
        position : 'absolute',
        top : 10,
        right : 10
    },
    btnBox: {
        display : 'flex',
        justifyContent : 'flex-start',
        alignItems : 'center',
        gap : 20,
        backgroundColor : '#21C622',
        width : 300,
        height : 250,
        borderRadius : 15,
        marginBottom : 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        padding : 20
    },
    heading : {
        color :'white',
        fontSize : 30,
        fontWeight : 'bold',
        textAlign: 'center',
        lineHeight : 30
    },
    body : {
        color : '#3E3627',
        fontSize : 12,
        lineHeight : 12,
        textAlign : 'center'
    },
    btn : {
        display : 'flex',
        alignItems:'center',
        justifyContent :'center',
        backgroundColor : 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        width : 180,
        borderRadius : 20,
        height : 50
    },
    btn_text : {
        color : '#3E3627',
        fontWeight : 'bold'
    }
})
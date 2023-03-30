import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import landing from '../assets/images/landing-bg.jpg'
import logoText  from '../assets/images/text-logo-white.png'
import fb from '../assets/images/fb.png'
import google from '../assets/images/google.png'
import twitter from '../assets/images/twitter.png'


const Landing = ({navigation}) => {
  return (
    <ImageBackground
        source={{
            uri : landing
        }}
        resizeMode = 'cover'
        style={{
            flex :1
        }}
    >
        <SafeAreaView style={styles.container} >
            <Image
                source={logoText}
                style={styles.logoStyles}
            />
            <View  style={styles.btnBox}>
                <TouchableOpacity onPress={()=>navigation.navigate('RegisterPanel')}  style={styles.btn}>
                    <Text style={styles.btnText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={styles.btn}>
                    <Text style={styles.btnText}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.socialBtns}>
                     <TouchableOpacity>
                        <Image 
                            source={fb}
                            
                            style={styles.fbStyles}
                            
                        />
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Image 
                            source={google}
                            
                            style={styles.gStyles}
                            
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image 
                            source={twitter}
                            
                            style={styles.tStyles}
                            
                        />
                        </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>


    </ImageBackground>
    
  )
}

export default Landing

const styles = StyleSheet.create({
    container : {
        flex :1,
        display : 'flex',
        alignItems :'center',
        justifyContent : 'flex-start',
        paddingTop : 50,
       
        
    },
    fbStyles : {
        height:30,
        width :30
    },
    gStyles : {
        height:30,
        width :30
    },
    tStyles : {
        height:30,
        width :30
    },
    logoStyles :{
        width : 300,
        height : 200,
                   
    },  
    btnBox:{
        width : 300,
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'flex-end',
        gap : 20,
        flex :1,
        paddingBottom : 50
        
    },
    btn : {
        width : 170,
        height : 50,
        backgroundColor :'white',
        borderRadius : 20,
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'center'
    },
    btnText : {
        fontWeight : 'bold',
        fontSize : 16,
        color : '#3E3627'

    },
    socialBtns : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        width : 200,
       
    }
})
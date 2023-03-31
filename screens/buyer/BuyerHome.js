import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Pressable, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../utils/constants'
import Header from '../../components/Header'
import bg from '../../assets/images/seller.jpg'
import Icon from 'react-native-vector-icons/Entypo';
import wholesale from '../../assets/images/wholesale.png'
import retailer from '../../assets/images/retailer.png'



const BuyerHome = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <ImageBackground
          source={bg}
          resizeMode="cover"
          style={styles.imgBG}
        >
          <View style={styles.userBanner}>
              <Text style={styles.heading}>Welcome, User</Text>
              <View style={styles.location}>
                <Icon name="location" size={20} color="black" />
                <Text style={styles.text}> lorem asdfasdfasdf asdfasdfasdfa asdf asdf asdfasdfasdfasdfasdfadsf</Text>
              </View>
          </View>
         
        </ImageBackground>
        <View style={styles.optionBox}>
            <TouchableOpacity onPress={()=>console.log('Wholesale')} style={styles.box}>
                  <Text style={styles.boxTitle}>Wholesaler</Text>
                  <Image 
                  source={wholesale}
                  style={styles.boxImage}
                  />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('Wholesale')}  style={styles.box}>
            <Text style={styles.boxTitle}>retailer</Text>
            <Image 
                  source={retailer}
                  style={styles.boxImage} />
            </TouchableOpacity>

          </View>
        
    </SafeAreaView>
  )
}

export default BuyerHome

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    },
    imgBG : {
      width : '100%',
      height : 145,
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
      paddingHorizontal : 15,
      paddingVertical : 20
    },
    userBanner : {
      height : 90,
      width : '100%',
      backgroundColor : "white",
      borderRadius : 5,
      paddingVertical:10,
      paddingHorizontal :20,
      gap : 10
    },
    location : {
      display : 'flex',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'center',
      width : '100%',
      gap : 10
    },
    heading : {
      fontSize :24,
      fontWeight : 'bold',
      color : colors.primary
    },
    text : {
      fontSize : 12,
      lineHeight : 12
    },
    optionBox : {
      height : 190,
      width : '100%',
      display : 'flex',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-evenly',
     
    },
    box : {
      height : 155,
      width : 157,
      border : '1px solid black',
      border : `3px ${colors.primary} solid`,
      borderRadius : 5,
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
      padding : 20,
      gap : 10
    },
    boxTitle : {
       fontWeight : 'bold',
       fontSize : 20,
       textTransform : 'uppercase',
    },
    boxImage : {
      height : 85,
      width : 85,
    }
})
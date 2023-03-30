import { StyleSheet, Text, View,SafeAreaView,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import logoNeon from '../assets/images/logo-neon-green.png'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const SellerRegistration = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon name="arrowleft" size={30} color='#21C622' />
            </TouchableOpacity>
           
        </View>
        <View>
            <Text style={styles.title}>Sign up as a Seller</Text>
        </View>

    

      <Image
        source={{uri : logoNeon}}
        resizeMode = 'contain'
        style={styles.image}
        />
      
       
     
    </SafeAreaView>
  )
}

export default SellerRegistration

const styles = StyleSheet.create({
    container: {
        overflow : 'hidden',
        flex: 1,
        position : 'relative',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor : "white"
      },
     image : {
      height : 350,
      width : 350,
      zIndex : 1000,
      position : 'absolute',
      bottom : -60,
      right : -65
     },
     header : {
        width : '100%',
        paddingVertical : 30,
        paddingHorizontal : 20,
        height : 10,
        flexDirection : 'row',
        alignItems  : 'center',
        justifyContent : 'flex-start',
     },
     title : {
        fontWeight : 'bold',
        fontSize : 29,
        lineHeight : 30,

     }
})
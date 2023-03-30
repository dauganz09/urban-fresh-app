import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import {useWindowDimensions} from 'react-native';
import React from 'react'
import logoNeon from '../assets/images/logo-neon-green.png'
import PanelCard from '../components/PanelCard';
import buyer from '../assets/images/buyer.jpg'
import seller from '../assets/images/seller.jpg'

const RegisterPanel = ({navigation}) => {
    const {height, width} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>

    <View style={[styles.panelBox,{marginTop : height * .15,width : '100%'}]}>
                <Text style={styles.heading}>Register New Account As</Text>

                <PanelCard title='Buyer'  image={buyer} link='BuyerRegistration' text='Lorem ipsum dolor sit amet consectetur. Pellentesque etiam fringilla nisi ornare. Egestas nam nulla proin mattis ut nibh.'/>
                <PanelCard title='Seller' image={seller} link='SellerRegistration' text='Lorem ipsum dolor sit amet consectetur. Pellentesque etiam fringilla nisi ornare. Egestas nam nulla proin mattis ut nibh.' />

    </View>

      <Image
        source={{uri : logoNeon}}
        resizeMode = 'contain'
        style={styles.image}
        />
      
       
     
    </SafeAreaView>
  )
}

export default RegisterPanel

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
     panelBox :{
        paddingHorizontal : 30,
        alignItems : 'center',
        justifyContent : 'center',
     },
     heading:{
        textAlign: 'center',
        width : '100%',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
       lineHeight: 30,
       color : '#3E3627',
       marginBottom : 10
     }
      
})
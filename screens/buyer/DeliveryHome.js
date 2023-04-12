import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/constants'
import Header from '../../components/Header'



const DeliveryHome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header onPress={()=>navigation.goBack()} />
      <View style={styles.cartBox}>
          
          <Text style={styles.title}>Delivery Status</Text>
          
      </View>
    </SafeAreaView>
  )
}

export default DeliveryHome

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    },
    cartBox : {
        height :70,
        width : '100%',
        flexDirection : 'row',
       
        alignItems : 'center'
        
    },
    title : {
      textAlign : 'center',
        flex  :1,
        fontSize : 24,
        fontWeight:'bold',
        color : colors.primary,
        lineHeight : 20

    },
})
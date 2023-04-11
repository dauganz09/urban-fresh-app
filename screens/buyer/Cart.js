import { Pressable, SafeAreaView, StyleSheet, Text, View,ScrollView,Image,useWindowDimensions, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Header from '../../components/Header'
import { colors } from '../../utils/constants'
import fallback from '../../assets/images/fallback.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign'
import ProductCard from '../../components/ProductCard'
import CartItem from '../../components/CartItem'
import Button from '../../components/Button'



const Cart = ({navigation}) => {

    const [isDeleting,setIsDeleting] =useState(false)

    
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={()=>navigation.goBack()}/>
        <View style={styles.cartBox}>
          <View style={{width:30,marginHorizontal : 20}}></View>
            <Text style={styles.title}>Cart</Text>
            {isDeleting  && <TouchableOpacity onPress={()=>setIsDeleting(!isDeleting)}>
                <Icon2 name="close" size={30} color='black' style={{marginHorizontal:20}}/>
              </TouchableOpacity> }
             { !isDeleting && <TouchableOpacity onPress={()=>setIsDeleting(!isDeleting)}>
                <Icon name="edit" size={30} color='black' style={{marginHorizontal:20}}/>
              </TouchableOpacity>}
             
              
        </View>
        <ScrollView style={{flex : 1}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
              <CartItem isDeleting={isDeleting}/>
              <CartItem isDeleting={isDeleting}/>
              <CartItem isDeleting={isDeleting}/>
              <CartItem isDeleting={isDeleting}/>
        </ScrollView>

        <View style={styles.btnBox}>
       { !isDeleting && <Button width={200} textColor="white" text="Go to Payment" color={colors.primary}/>}
        </View>
      </SafeAreaView>
  
  )
  }
export default Cart

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        position : 'relative'
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
    contentContainer : {
      alignItems : 'center',
      gap : 10
    },
    btnBox : {
      position : 'absolute',
      bottom : 0,
      right : 0,
      height : 80,
      width : '100%',
      flexDirection :'row',
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : 'white'
    }
})
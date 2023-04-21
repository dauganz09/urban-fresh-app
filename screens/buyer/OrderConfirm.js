import { Pressable, SafeAreaView, StyleSheet, Text, View, ScrollView, Image, useWindowDimensions, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import Header from '../../components/Header'
import { colors } from '../../utils/constants'
import fallback from '../../assets/images/fallback.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign'
import ProductCard from '../../components/ProductCard'
import { useToast } from 'react-native-toast-notifications'
import Button from '../../components/Button'
import useStore from '../../utils/appStore'
import CartItemO from '../../components/CartItemO'



const OrderConfirm = ({ navigation }) => {

  const [isDeleting, setIsDeleting] = useState(false)
  const fetchCart = useStore((state) => state.fetchCart)
  const getTotalPrice = useStore((state) => state.getTotalPrice)
  const cart = useStore((state) => state.cart)
  const storeid = useStore((state) => state.storeid)
  const totalPrice = useStore((state) => state.totalPrice)
  const loading = useStore((state) => state.loading)
  const setCurrentStore = useStore((state) => state.setCurrentStore)
  const addOrders = useStore((state) => state.addOrders)
  const toast = useToast()  


  useLayoutEffect(() => {
      fetchCart()
      getTotalPrice()
      console.log(cart)

      

  }, [])

  const ConfirmOrder =()=>{
    console.log('Order confirmed')
    addOrders(cart,storeid)
    toast.show('Orders Confirmed and Sent to Store!!',{
        type: "success",
        placement: "bottom",
        duration: 2000,
        offset: 30,
        animationType: "slide-in",
      })    
      navigation.navigate("BuyerHome");
  }

  console.log(cart.length >0)
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.goBack()} />
     
      <View style={styles.cartBox}>
       
     
        <View style={{ width: 30, marginHorizontal: 20 }}></View>
        <Text style={styles.title}>Order Confirmation</Text>
       
      </View>
      <ScrollView style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {loading && <ActivityIndicator style={styles.indicator} animating={loading} size="large" color='#21C622' />}

        {
          cart.length == 0 ? <Text>No Items on Cart!</Text>
            :
            // <CardItemO cart={cart} setIsDeleting={setIsDeleting} isDeleting={isDeleting} />
            <CartItemO cart={cart} setIsDeleting={setIsDeleting} isDeleting={isDeleting} />

            
        }
         <View style={{flexDirection : 'row',alignItems :'center',justifyContent:'center',width:'100%'}}>
        <Text style={styles.title}>Total Price: {totalPrice}</Text>
        </View>
      </ScrollView>
     

      <View style={styles.btnBox}>
        {(!isDeleting && cart.length > 0) ? <Button width={200} onPress={ConfirmOrder}  textColor="white" text="Confirm Order" color={colors.primary} /> :<Text></Text>}
      </View>
    </SafeAreaView>

  )
}



export default OrderConfirm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative'
  },
  cartBox: {
    height: 70,
    width: '100%',
    flexDirection: 'row',

    alignItems: 'center'

  },
  title: {
    textAlign: 'center',
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    lineHeight: 20

  },
  contentContainer: {
    alignItems: 'center',
    gap: 10
  },
  btnBox: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: 80,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  indicator: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-start',
    left: 0,
    right: 0,
    top: 100,

  },
})
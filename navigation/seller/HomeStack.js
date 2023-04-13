import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyerHome from '../../screens/buyer/BuyerHome';
import SellerList from '../../screens/buyer/SellerList';
import SellerProfile from '../../screens/buyer/SellerProfile';
import ProductDetail from '../../screens/buyer/ProductDetail';
import Cart from '../../screens/buyer/Cart';
import Favorites from '../../screens/buyer/Favorites';
import SellerHome from '../../screens/seller/SellerHome';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
  <Stack.Navigator initialRouteName='SellerHome'>
  <Stack.Screen name="SellerHome" component={SellerHome} options={{headerShown : false}}/>

  
    

 </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
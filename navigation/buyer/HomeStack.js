import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyerHome from '../../screens/buyer/BuyerHome';
import SellerList from '../../screens/buyer/SellerList';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
  <Stack.Navigator initialRouteName='SellerList'>
  <Stack.Screen name="BuyerHome" component={BuyerHome} options={{headerShown : false}}/>
   <Stack.Screen name="SellerList" component={SellerList} options={{headerShown : false}}/>    
  
    

 </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from '../../utils/constants';

import SalesHome from '../../screens/seller/SalesHome';
import UnpaidOrders from '../../screens/seller/UnpaidOrders';

const Stack = createNativeStackNavigator();

export default function SalesStack() {
  return (
  <Stack.Navigator initialRouteName='SalesHome'>
  <Stack.Screen name="SalesHome" component={SalesHome} options={{
        title : 'Sales',
        headerStyle :{backgroundColor : colors.primary},
        headerTitleStyle : {color : 'white',fontSize : 24,fontWeight : 'bold'},
        headerTitleAlign : 'left',
        headerTintColor: 'white',}}/>
   <Stack.Screen name="UnpaidOrders" component={UnpaidOrders} options={{
        title : 'Unpaid Orders',
        headerStyle :{backgroundColor : colors.primary},
        headerTitleStyle : {color : 'white',fontSize : 24,fontWeight : 'bold'},
        headerTitleAlign : 'left',
        headerTintColor: 'white',}}/>
  {/* <Stack.Screen name="AddProduct" component={AddProduct} options={{
        title : 'Profile',
        headerStyle :{backgroundColor : colors.primary},
        headerTitleStyle : {color : 'white'},
        headerTitleAlign : 'left',
        headerTintColor: 'white',}}/>
        <Stack.Screen name="EditProduct" component={EditProduct} options={{
        title : 'Edit Profile',
        headerStyle :{backgroundColor : colors.primary},
        headerTitleStyle : {color : 'white'},
        headerTitleAlign : 'left',
        headerTintColor: 'white',}}/> */}

  
    

 </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
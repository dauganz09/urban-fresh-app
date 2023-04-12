import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeliveryHome from '../../screens/buyer/DeliveryHome';

const Stack = createNativeStackNavigator();

const DeliveryStack = () => {
  return (
    <Stack.Navigator initialRouteName='DeliveryHome'>
      <Stack.Screen name="DeliveryHome" component={DeliveryHome} options={{headerShown : false}}/>
     
      
  
   </Stack.Navigator>
  )
}

export default DeliveryStack

const styles = StyleSheet.create({})
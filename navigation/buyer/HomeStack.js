import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyerHome from '../../screens/buyer/BuyerHome';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
  <Stack.Navigator initialRouteName='Profile'>
    <Stack.Screen name="BuyerHome" component={BuyerHome} options={{headerShown : false}}
       
         />
    

 </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})
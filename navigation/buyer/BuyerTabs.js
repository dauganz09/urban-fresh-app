import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeStack from './HomeStack';
import { colors } from '../../utils/constants';
import TransactionStack from './TransactionStack';
import DeliveryStack from './DeliveryStack';
import AccountStack from './AccountStack';


const Tab = createBottomTabNavigator();

let iconName,iconColor;
export default function BuyerTabs() {
  return (
    
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: colors.primary,
          tabBarIcon: ({ focused, color, size }) => {
            
            if (route.name === 'HomeStack') {
              iconName = 'home-outline';
                iconColor = focused ? 'black' : colors.primary 
            } else if (route.name === 'TransactionStack') {
              iconName = 'newspaper-outline';
                iconColor = focused ? 'black' : colors.primary 
            }else if(route.name === 'DeliveryStack'){
                return <MaterialCommunityIcons name="truck-fast-outline" color={focused ? 'black' : colors.primary } size={size} />
            }
            
            else {
              iconName = 'person-outline';
              iconColor = focused ? 'black' : colors.primary 
            } 
            return <Ionicons name={iconName} size={size} color={iconColor} />;
          },
        })}
       >
        <Tab.Screen name="HomeStack" component={HomeStack} options = {{ tabBarLabel: 'Home',headerShown: false,tabBarLabelStyle : {fontSize: 10}}}  />
        <Tab.Screen name="TransactionStack" component={TransactionStack} options = {{ tabBarLabel: 'Transactions',headerShown: false,tabBarLabelStyle : {fontSize: 10}}}  />
        <Tab.Screen name="DeliveryStack" component={DeliveryStack} options = {{ tabBarLabel: 'Delivery',headerShown: false,tabBarLabelStyle : {fontSize: 10}}}  />
        <Tab.Screen name="AccountStack" component={AccountStack} options = {{ tabBarLabel: 'Account',headerShown: false,tabBarLabelStyle : {fontSize: 10}}}  />

      </Tab.Navigator>
     
    
  )
}

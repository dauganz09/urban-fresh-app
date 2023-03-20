import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();


export default function Dashboard() {
  return (
    
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else {
              iconName = focused ? 'person' : 'person-outline';
            } 
            return <Ionicons name={iconName} size={size} color="#4649FF" />;
          },
        })}
       >
        <Tab.Screen name="HomeStack" component={HomeStack} options = {{ tabBarLabel: 'Home',headerShown: false}}  />
        <Tab.Screen name="ProfileStack" component={ProfileStack} options = {{ tabBarLabel: 'Profile',headerShown: false }}/>
        
      </Tab.Navigator>
     
    
  )
}

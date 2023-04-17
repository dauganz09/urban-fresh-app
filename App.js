import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Dashboard from './screens/Dashboard';
import { ToastProvider } from 'react-native-toast-notifications'
import Splash from './screens/Splash';
import Loading from './screens/Loading';
import Landing from './screens/Landing';
import RegisterPanel from './screens/RegisterPanel';
import BuyerRegistration from './screens/BuyerRegistration';
import SellerRegistration from './screens/SellerRegistration';
import RegisterSuccess from './screens/RegisterSuccess';
import BuyerTabs from './navigation/buyer/BuyerTabs';
import SellerTabs from './navigation/seller/SellerTabs';



const Stack = createNativeStackNavigator();



export default function App() {

  


  
  return (
    <ToastProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
       <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
       <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}} />
      
       <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
       <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
       <Stack.Screen name="RegisterPanel" component={RegisterPanel} options={{headerShown: false}} />
       <Stack.Screen name="BuyerRegistration" component={BuyerRegistration} options={{headerShown: false}} />
       <Stack.Screen name="SellerRegistration" component={SellerRegistration} options={{headerShown: false}} />
       <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} options={{headerShown: false}} />
       <Stack.Screen name="BuyerTabs" component={BuyerTabs} options={{headerShown: false}} />
       <Stack.Screen name="SellerTabs" component={SellerTabs} options={{headerShown: false}} />

       
      <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}}    /> 
      
     
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
      {/* <Stack.Screen name="AddVaccine" component={AddVaccine}  /> */}

      
    </Stack.Navigator>
  </NavigationContainer>
  </ToastProvider>
  );
}


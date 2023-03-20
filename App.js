import React,{useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Signup from './screens/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Dashboard from './screens/Dashboard';
import { ToastProvider } from 'react-native-toast-notifications'
import Splash from './screens/Splash';
import Loading from './screens/Loading';
import Landing from './screens/Landing';


const Stack = createNativeStackNavigator();



export default function App() {

  const [islogin, setIslogin] = useState(false)

useEffect(()=>{
  AsyncStorage.getItem('user_id').then(value => {
    if(value !== null || value !== undefined){
      setIslogin(true)
      console.log(value)
    }
  }).catch(err => {});
  

},[])


  
  return (
    <ToastProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
       <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
       <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}} />
      
       <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
     
     
      <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown: false}}    /> 
      
     
      <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
      {/* <Stack.Screen name="AddVaccine" component={AddVaccine}  /> */}

      
    </Stack.Navigator>
  </NavigationContainer>
  </ToastProvider>
  );
}


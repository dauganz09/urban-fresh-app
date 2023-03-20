import { SafeAreaView,Text,Image, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo1 from '../assets/logo_caring.png';
import logo2 from '../assets/storelogo.png';


export default function Profile() {

  const [fullname,setFullname] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('fullname').then(value => {
      if(value !== null || value !== undefined){
        setFullname(value)
        console.log(value)
      }
    }).catch(err => {});

    AsyncStorage.getItem('email').then(value => {
      if(value !== null || value !== undefined){
        setEmail(value)
        console.log(value)
      }
    }).catch(err => {});

    AsyncStorage.getItem('pass').then(value => {
      if(value !== null || value !== undefined){
        setPassword(value)
        console.log(value)
      }
    }).catch(err => {});
  
    
  }, [])
  
  

  return (
    <SafeAreaView style={{flex : 1}}>
      <View style={{display: 'flex',flexDirection : 'row',justifyContent:'center',alignItems:'center'}}>
       <Image 
        source = {'https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_960_720.png'}
        style = {{width : 200, height : 200}}
         />
         </View>
         <View style={{width: '100%',height: 10,backgroundColor: 'black',marginBottom: 10}}></View>
         <View style={{width: '100%',display: 'flex',flexDirection : 'row',justifyContent:'space-evenly',alignItems:'center',marginBottom:10,gap :10}}>
            <Text style={{fontSize: 20}}>Name: </Text>
            <Text style={{fontSize: 20}}>{fullname}</Text>
          </View>

          <View style={{width: '100%',display: 'flex',flexDirection : 'row',justifyContent:'space-evenly',alignItems:'center',marginBottom:10}}>
            <Text style={{fontSize: 20}}>Email: </Text>
            <Text style={{fontSize: 20}}>{email}</Text>
          </View>
          <View style={{width: '100%',display: 'flex',flexDirection : 'row',justifyContent:'space-evenly',alignItems:'center',marginBottom:10}}>
            <Text style={{fontSize: 20}}>Password: </Text>
            <Text style={{fontSize: 20}}>{password}</Text>
          </View>
          <View style={{width: '100%',display: 'flex',flexDirection : 'row',justifyContent:'space-evenly',alignItems:'center',marginBottom:10,marginTop:20}}>
          <Image 
            source = {logo2}
            style = {{width : 180, height : 180,}}
         />

<Image 
            source = {logo1}
            style = {{width : 180, height : 180,}}
         />
          </View>
    </SafeAreaView>
  )
}

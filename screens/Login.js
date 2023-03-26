import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image} from 'react-native'
import Checkbox from 'expo-checkbox';
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {axios1} from '../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import bg from '../assets/logo_caring.png';
import { useToast } from "react-native-toast-notifications";
import Input from '../components/Input';
import Button from '../components/Button';
import logoNeon from '../assets/images/logo-neon-green.png'



export default function Login({navigation}) {
    const toast = useToast();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isChecked, setChecked] = useState(false);


    
  

    const userLogin = async () => {
        const res = axios1.post('login', {
            email,
            password
        });
        const result = await res;
        console.log(result);
       
        if(!result.data == false){
          toast.show("Login Successfully!", {
            type: "success",
            placement: "bottom",
            duration: 2000,
            offset: 30,
            animationType: "slide-in",
          });
            const {data} = result;
            
              console.log(data);
            AsyncStorage.setItem('user_id',data.user_id);
            AsyncStorage.setItem('fullname',data.fullname);
            AsyncStorage.setItem('email',data.email);

            AsyncStorage.setItem('pass',data.cpass);
            AsyncStorage.setItem('isLogin',"1");

            
            navigation.navigate('Dashboard')
           
        }else{
          toast.show("Invalid Credentials!", {
            type: "danger",
            placement: "bottom",
            duration: 2000,
            offset: 30,
            animationType: "slide-in",
          });
        }

    }

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('empid', jsonValue)
        } catch (e) {
          // saving error
        }
      }

      



  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri : logoNeon}}
        resizeMode = 'contain'
        style={styles.image}
        />
      
       <View style={styles.loginBox}>
          <View style={styles.header}>
          <Text style={styles.heading}>Log in to lorem ipsum dolor</Text>
              <Text style={styles.smallText}>Address Line lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Text>
          </View>
             
        
          <Input type='text' placeholder='Username' placeholderTextColor='black' />
          <Input type='text' placeholder='Password' secureTextEntry={true} placeholderTextColor='black'  />
          <View style={styles.remember}>
          <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#21C622' : undefined}
        />
              <Text>Keep me signed in</Text>
          </View>
          <View style={styles.newUser}>
          <Text>New user?</Text><TouchableOpacity onPress={()=>navigation.navigate('RegisterPanel')}><Text style={styles.link}>Create an account</Text></TouchableOpacity>
          </View>
          
          <Button text='Log in' width={150} color='#21C622' textColor='white'/>
          
       </View>
      
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        overflow : 'hidden',
        flex: 1,
        position : 'relative',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor : "white"
      },
      header : {
         width : '100%',
         display :'flex',
         alignItems: 'flex-start',
         justifyContent : 'center',
         gap : 10,
         marginBottom : 10,
      },
      loginBox : {
        display : 'flex',
        alignItems:'center',
        justifyContent : 'center',
        marginTop : 150,
        width : 300
      },
      heading : {
        width : 250,
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 29,
       lineHeight: 30,
       color : '#3E3627'
      },
      smallText :{
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: 12,
        lineHeight: 12,
        textTransform: 'uppercase',
        color : '#21C622',
        marginVertical : 8
      },
     remember : {
      display : 'flex',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'center',
      width : '100%',
      gap: 5
     },
     checkbox : {
      height : 12,
      width : 12,
     },
     newUser : {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap : 5,
        width : '100%',
        marginVertical : 5
     },
     link : {
      color : '#264CD0'
     },
     image : {
      height : 350,
      width : 350,
      zIndex : 1000,
      position : 'absolute',
      bottom : -60,
      right : -65
     }
      
    
    })
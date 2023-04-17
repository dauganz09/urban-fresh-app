import { StyleSheet, Text, View,TextInput, TouchableOpacity,Image,ActivityIndicator} from 'react-native'
import Checkbox from 'expo-checkbox';
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {axios1} from '../utils/axios';
import bg from '../assets/logo_caring.png';
import { useToast } from "react-native-toast-notifications";
import Input from '../components/Input';
import Button from '../components/Button';
import logoNeon from '../assets/images/logo-neon-green.png'
import { doc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from '../utils/firebaseConfig';
import { FIREBASE_AUTH } from '../utils/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import useStore from '../utils/appStore';



export default function Login({navigation}) {
    const toast = useToast();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isChecked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false)
    const setUser = useStore((state)=>state.setUser)
    const user = useStore((state)=>state.user)

    


    useEffect(() => {
      console.log(logoNeon)
    
     
      
    },[])
    
  

    const userLogin = async  () => {
      console.log('Login')
        if(email =='' || email.indexOf('@') == -1 || password=='') {
          toast.show('Fill up empty fields!!',{
            type: "danger",
            placement: "bottom",
            duration: 2000,
            offset: 30,
            animationType: "slide-in",
          })
          return;
        }
        setLoading(true)
        signInWithEmailAndPassword(FIREBASE_AUTH,email, password)
        .then(cred=>{
          console.log(cred)
          if(cred.user.emailVerified==false){
            toast.show('Please verify your email first!!!',{
              type: "danger",
              placement: "bottom",
              duration: 2000,
              offset: 30,
              animationType: "slide-in",
            })
            return;
          }else{
           
              const docRef = doc(FIRESTORE_DB, "users",cred.user.uid);
               getDoc(docRef).then(docSnap=> 
                {console.log("Document data:", docSnap.data())
                setUser({...docSnap.data(),userid : cred.user.uid})
                console.log(user)
                toast.show('Login Successfully!!!',{
                  type: "success",
                  placement: "bottom",
                  duration: 2000,
                  offset: 30,
                  animationType: "slide-in",
                })
                setLoading(false)
                if(docSnap.data().userType === 1){
                  navigation.navigate('BuyerTabs');
                }else{
                  navigation.navigate('SellerTabs');
                }
              })
               .catch(err=>{
                console.log(err)
                toast.show('Error logging in!!!',{
                  type: "danger",
                  placement: "bottom",
                  duration: 2000,
                  offset: 30,
                  animationType: "slide-in",
                })
              })
             
          }
      
         
        })
        .catch(err=>{
          console.log(err.code)
          if(err.code=="auth/user-not-found"){
            toast.show('User not found!!! Please check your credentials!',{
              type: "danger",
              placement: "bottom",
              duration: 2000,
              offset: 30,
              animationType: "slide-in",
            })
          }else if(err.code==="auth/wrong-password"){
            toast.show('Password is incorrect!!',{
              type: "danger",
              placement: "bottom",
              duration: 2000,
              offset: 30,
              animationType: "slide-in",
            })
          }
        })
        .finally(()=>setLoading(false))

            
           
       

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
      {loading && <ActivityIndicator style={styles.indicator} animating={loading} size="large" color='#21C622'/>}
      <Image
        source={logoNeon}
        resizeMode = 'contain'
        style={styles.image}
        />
      
       <View style={styles.loginBox}>
          <View style={styles.header}>
          <Text style={styles.heading}>Log in to lorem ipsum dolor</Text>
              <Text style={styles.smallText}>Address Line lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam</Text>
          </View>
             
        
          <Input type='text' placeholder='Email Address' placeholderTextColor='black' onChangeText={(text)=>setEmail(text)} value={email} />
          <Input type='text' placeholder='Password' secureTextEntry={true} placeholderTextColor='black' onChangeText={(text)=>setPassword(text)} value={password}  />
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
          
          <Button onPress={userLogin} text='Log in' width={150} color='#21C622' textColor='white'/>
          
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
      indicator : {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-start',
        left: 0,
        right: 0,
        top: 100,
       
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
       
        fontSize: 29,
       lineHeight: 30,
       color : '#3E3627'
      },
      smallText :{
        fontStyle: 'normal',
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
      zIndex : 1,
      position : 'absolute',
      bottom : -60,
      right : -65
     }
      
    
    })
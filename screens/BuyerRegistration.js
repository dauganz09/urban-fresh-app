import { StyleSheet, Text, View,SafeAreaView,Image, TouchableOpacity,Modal } from 'react-native'
import React,{useState} from 'react'
import logoNeon from '../assets/images/logo-neon-green.png'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';
import Checkbox from 'expo-checkbox';
import Spacer from '../components/Spacer';
import { useToast } from "react-native-toast-notifications";

const BuyerRegistration = () => {
    const toast = useToast();
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(false);
    const [isCheckedP, setCheckedP] = useState(false);
    const [showt,setShowt] = useState(false);
    const [showp,setShowp] = useState(false);
    const [user,setUser] = useState({
      fullname : '',
      emailadd: '',
      pass : '',
      cpass: '',
      mobile : '',
      address: ''

    })

    const handleSubmit = () => {
      if(user.pass !== user.cpass){
        toast.show("Passwords don't match!!!", {
          type: "danger",
          placement: "bottom",
          duration: 2000,
          offset: 30,
          animationType: "slide-in",
        });
        return;
      }
    }
    
  return (
    <SafeAreaView style={[styles.container]}>
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon name="arrowleft" size={30} color='#21C622' />
            </TouchableOpacity>
           
        </View>
        <View style={styles.titleBox}>
            <Text style={styles.title}>Sign up as a Buyer</Text>
        </View>
        <Input type="text" placeholder='Full name' onChangeText={(text)=>setUser({...user,['fullname']:text})} value={user.fullname} />
        <Input type="text" placeholder='Email address' onChangeText={(text)=>setUser({...user,['emailadd']:text})} value={user.emailadd} />
        <Input type="text" placeholder='Password' secureTextEntry={true} onChangeText={(text)=>setUser({...user,['pass']:text})} value={user.pass}/>
        <Input type="text" placeholder='Confirm Password' secureTextEntry={true} onChangeText={(text)=>setUser({...user,['cpass']:text})} value={user.cpass}/>
        <Input type="text" inputmode='numeric' placeholder='Mobile no.' onChangeText={(text)=>setUser({...user,['mobile']:text})} value={user.value} />
        <Input type="text" placeholder='Complete Address' multiline={true} numberOfLines={10} height={105} onChangeText={(text)=>setUser({...user,['address']:text})} value={user.address} />
        <Spacer height={12}/>
        <View style={styles.remember}>
          <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#21C622' : undefined}
        />
              <Text>I have read the</Text>
              <TouchableOpacity><Text style={styles.link}>Terms & Conditions</Text></TouchableOpacity>
          </View>

          <View style={styles.remember}>
          <Checkbox
          style={styles.checkbox}
          value={isCheckedP}
          onValueChange={setCheckedP}
          color={isCheckedP ? '#21C622' : undefined}
        />
              <Text>I agree to the</Text>
              <TouchableOpacity><Text style={styles.link}>Privacy Policy</Text></TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSubmit} style={[styles.button,{width :150,backgroundColor : '#21C622'}]}>
      <Text style={[styles.btnText,{color : 'white'}]}>Create Account</Text>
    </TouchableOpacity>


      <Image
        source={{uri : logoNeon}}
        resizeMode = 'contain'
        style={styles.image}
        />
        <Modal
            visible={showt}
        >
            <Text>MOdal</Text>
        </Modal>
       
     
    </SafeAreaView>
  )
}

export default BuyerRegistration

const styles = StyleSheet.create({
    container: {
        overflow : 'hidden',
        flex: 1,
        position : 'relative',
        alignItems: 'center',
        backgroundColor : 'white',
        justifyContent: 'flex-start',
        width : "100%",
        paddingHorizontal : 30,
        border : '1px solid black'
      },
     image : {
      height : 350,
      width : 350,
      
      position : 'absolute',
      bottom : -100,
      right : -90
     },
     header : {
        width : '100%',
        paddingVertical : 30,
        paddingHorizontal : 30,
        height : 10,
        flexDirection : 'row',
        alignItems  : 'center',
        justifyContent : 'flex-start',
     },
     title : {
        fontWeight : 700,
        fontSize : 29,
        lineHeight : 30,
        color : '#3E3627',
        width : '100%',
        textAlign : 'left',
       

     },
     titleBox:{
        width : '100%',
        paddingHorizontal : 30,
        marginBottom : 30
        
     },
     remember : {
        zIndex : 2000,
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
       link : {
        color : '#264CD0'
       },
       button : {
        zIndex : 10,
        marginVertical : 20,
        height : 50,
        borderRadius : 30,
        display : 'flex',
        alignItems: 'center',
        justifyContent : 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        padding : 20
    },
    btnText : {
        fontWeight : 700
    }
})
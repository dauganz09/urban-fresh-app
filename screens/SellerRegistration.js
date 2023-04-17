import { StyleSheet, Text, View,SafeAreaView,Image, TouchableOpacity,Modal,ActivityIndicator} from 'react-native'
import React,{useState} from 'react'
import logoNeon from '../assets/images/logo-neon-green.png'
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/Input';
import Checkbox from 'expo-checkbox';
import Spacer from '../components/Spacer';
import { useToast } from "react-native-toast-notifications";
//firebase
import { createUserWithEmailAndPassword, sendEmailVerification }  from 'firebase/auth';
import { FIRESTORE_DB } from '../utils/firebaseConfig';
import { FIREBASE_AUTH } from '../utils/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { SelectList } from 'react-native-dropdown-select-list'

const SellerRegistration = () => {
    
    const toast = useToast();
    const navigation = useNavigation()
    const [isChecked, setChecked] = useState(false);
    const [isCheckedP, setCheckedP] = useState(false);
    const [showt,setShowt] = useState(false);
    const [showp,setShowp] = useState(false);
    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState({
      pic : '',
      storename : '',
      emailadd: '',
      pass : '',
      cpass: '',
      mobile : '',
      block: '',
      barangay : '',
      city : '',
      province : '',
      zipcode : '',
      userType : null

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

      if(user.fullname =="" || user.emailaddress == "" || user.pass == "" || user.mobile == "" || user.address==""){
        toast.show("Please fill up empty fields!!", {
          type: "danger",
          placement: "bottom",
          duration: 2000,
          offset: 30,
          animationType: "slide-in",
        });

        return;
      }
      setLoading(true)
      createUserWithEmailAndPassword(FIREBASE_AUTH,user.emailadd, user.pass)
      .then((userCredential)=>{
         
          setDoc(doc(FIRESTORE_DB,'users',userCredential.user.uid),{
             
             pic : user.pic,
             storename : user.storename,
             email : user.emailadd,
             cpass : user.pass,
             mobile: user.mobile,
             block: user.block,
             barangay : user.barangay,
             city : user.city,
             province : user.province,
             zipcode : user.zipcode,
             userType: Number(user.userType)
            
          })
          .then((res)=>{
              sendEmailVerification(FIREBASE_AUTH.currentUser)
              setLoading(false)
              navigation.navigate('RegisterSuccess')
               
              
          })
          .catch(err => console.error(err))
      })
      .catch((err)=>{
        console.log(err)
      });
    }

    const data = [
      {key:2, value:'Retailer',},
      {key:3, value:'Wholesaler'},
     
  ]
  const onChangeType = async (val)=>{
    setUser({...user,['userType']:val})
    console.log(user)
  }

  return (
    <SafeAreaView style={[styles.container]}>
      {loading && <ActivityIndicator style={styles.indicator} animating={loading} size="large" color='#21C622'/>}
        <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Icon name="arrowleft" size={30} color='#21C622' />
            </TouchableOpacity>
           
        </View>
        <View style={styles.titleBox}>
            <Text style={styles.title}>Sign up as a Seller</Text>
        </View>
        <SelectList boxStyles={styles.select} dropdownStyles={styles.dropdown} defaultOption={{key : 2,value : 'Retailer'}} setSelected={onChangeType} save="key"  search={false} data={data} placeholder="Retailer or Wholesaler"  />
        <Input type="text" placeholder='Store Name' onChangeText={(text)=>setUser({...user,['storename']:text})} value={user.storename} />
        <Input type="text" placeholder='Email address' onChangeText={(text)=>setUser({...user,['emailadd']:text})} value={user.emailadd} />
        <Input type="text" placeholder='Password' secureTextEntry={true} onChangeText={(text)=>setUser({...user,['pass']:text})} value={user.pass}/>
        <Input type="text" placeholder='Confirm Password' secureTextEntry={true} onChangeText={(text)=>setUser({...user,['cpass']:text})} value={user.cpass}/>
        <Input type="text" inputmode='numeric' placeholder='Mobile no.' onChangeText={(text)=>setUser({...user,['mobile']:text})} value={user.value} />
        <Input type="text" placeholder='Complete Address' multiline={true} numberOfLines={10} height={105} onChangeText={(text)=>setUser({...user,['block']:text})} value={user.address} />
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

export default SellerRegistration

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
      indicator : {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'flex-start',
        left: 0,
        right: 0,
        top: 100,
       
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
        fontWeight : 'bold',
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
    },
    select : {
      border : '2px #21C622 solid',
      outlineStyle : 'none',
      width : 294,
      borderRadius : 10,
      backgroundColor : 'transparent',
      paddingHorizontal :20,
      marginVertical : 10
  },
  dropdown : {
    border : '2px #21C622 solid',
    outlineStyle : 'none',
  }
})
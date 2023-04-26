import { SafeAreaView, StyleSheet, Text, View,ImageBackground, TextInput,useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import userplaceholder from '../../assets/images/user.png'
import { colors } from '../../utils/constants'
import Button from '../../components/Button'
import useStore from '../../utils/appStore'
import { FIREBASE_AUTH } from '../../utils/firebaseConfig';
import  Icon  from 'react-native-vector-icons/AntDesign'

const ProfileView = ({navigation}) => {
    const user = useStore((state)=>state.user)


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgBox}>
                <ImageBackground
                    source={userplaceholder}
                    resizeMode="cover"
                    style={{
                        width : 100,
                        height : 100,
                        borderRadius : 50,
                        position : 'relative'
                    }}
                > <TouchableOpacity style={styles.icon}>
                    <Icon  name="edit" size={30} color={colors.primary} />
                </TouchableOpacity></ImageBackground>
               
      </View>
      <Input label="Name" text={`${user.fname} ${user.lname}`} />
      <Input label="Email" text={user.email}  isVerified/>
      <Input label="Password" text={user.cpass} isPassword isModify/>
      <Input label="Mobile Number" text={user.mobile} isVerified/>
      <Input label="Address" text={`${user.block} ${user.barangay} ${user.city} ${user.province}`} multiline/>

      <View style={styles.footer}>
            <Button onPress={()=>navigation.navigate('UpdateProfile')} color={colors.primary} text="Update Profile" textColor="white"/>
      </View>
    </SafeAreaView>
  )
}

const Input =({label,text,isVerified,isModify,isPassword,multiline})=>{
    const {width} = useWindowDimensions()

    const convertText=(text)=>{
        const array = text.split("")
        const newText = array.map((i)=>"*").join("")
        return newText
    }
    return (
    <View style={[styles.input,{width : width * .95,height : multiline ? 90 : 60}]}>
        <View style={{flex : 1}}>
            <Text style={styles.label}>{label}</Text>
            {isPassword ? <Text style={styles.txtbox}>{convertText(text)}</Text> :
            <Text style={styles.txtbox}>{text}</Text>}
        </View>
           { isModify && <TouchableOpacity style={styles.modify}>
                <Text style={styles.modifyText}>Modify</Text>
            </TouchableOpacity>}
            {
                isVerified &&
            <Text style={styles.verified}>Verified</Text>
            }
            
       
    </View>
    )
}

export default ProfileView

const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor : 'white',
        paddingHorizontal : 10,
        position : 'relative'
    },
    imgBox :{
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        paddingHorizontal :20,
        paddingVertical : 20,
        
    },
    icon :{
        position : 'absolute',
        bottom : 0,
        right : 10
    },
    input :{
        marginVertical : 0,
        marginHorizontal : 'auto',
        
        borderColor : '#AFAFAF',
        borderStyle :'solid',
        borderWidth : 1,
        paddingVertical : 5,
        paddingHorizontal : 10,
        borderRadius : 10,
        alignItems : 'center',
        flexDirection : 'row',
        marginBottom : 10

       
    },
    label : {
        fontSize : 14,
        color : '#656565',
        lineHeight : 16,
        marginBottom : 5
    },
    txtbox : {
       
        fontSize : 16,
        fontWeight : 'bold',
        lineHeight : 16,
        color : colors.headerText

    },
    verified : {
        fontSize : 14,
        lineHeight:16,
        fontWeight : 'bold',
        color : colors.primary,
        paddingHorizontal : 20
    },
    space : {
        paddingHorizontal : 20
    },
    modify : {
        width : 84,
        height : 30,
        borderRadius : 15,
        backgroundColor : colors.primary,
        alignItems : 'center',
        justifyContent : 'center'
    },
    modifyText :{
        color : 'white',
        fontSize : 14,
        lineHeight : 14,
        fontWeight : 'bold'
    },
    footer : {
       
        width : '100%',
        paddingBottom : 10,
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row'
    }
})
import { StyleSheet, Text, View,SafeAreaView,useWindowDimensions, TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../utils/constants'
import Button from '../../components/Button'

const UpdateProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
            showsHorizontalScrollIndicator={false}
        >
        <View style={styles.header}>
            <Text style={styles.headerText}>Complete Name</Text>
            <View style={styles.line}></View>
      </View>
      <Input label="Firstname" text="Juan" />
      <Input label="Lastname" text="Dela Cruz" />
      <View style={styles.header}>
            <Text style={styles.headerText}>Email Address</Text>
            <View style={styles.line}></View>
      </View>
      <Input label="Email Address" text="mail@gmail.com" />
      <View style={styles.header}>
            <Text style={styles.headerText}>Mobile Number</Text>
            <View style={styles.line}></View>
      </View>
      <Input label="Mobile Number" text="09162158998" isVerify />
      <View style={styles.header}>
            <Text style={styles.headerText}>Address</Text>
            <View style={styles.line}></View>
      </View>
      <Input label="Street Name Building, House no"/>
      <Input label="Barangay"/>
      <Input label="City/Town"/>
      <Input label="Provice"/>
      <Input label="Zip Code"/>
      </ScrollView>
      <View style={styles.footer}>
            <Button onPress={()=>navigation.navigate('UpdateProfile')} color={colors.primary} text="Update Profile" textColor="white"/>
      </View>
    </SafeAreaView>
    
  )
}

const Input =({label,text,isVerify,isPassword,multiline})=>{
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
        
            <TextInput secureTextEntry={isPassword} style={styles.txtbox} value={text}/>
        </View>
           { isVerify && <TouchableOpacity style={styles.modify}>
                <Text style={styles.modifyText}>Send Code</Text>
            </TouchableOpacity>}
         
            
       
    </View>
    )
}



export default UpdateProfile



const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor : 'white',
        paddingHorizontal : 10,
        position : 'relative',

        paddingTop : 10
    },
    header : {
        
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        gap :20,
        paddingHorizontal : 20,
        marginBottom :10
    },
    headerText : {
        fontSize : 16,
        fontWeight : 'bold',
        color : colors.primary,
    },
    line : {
        flex :1,
        borderBottomStyle : 'solid',
        borderBottomWidth : .5,
        borderBottomColor : 'black'
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
        marginBottom : 15

       
    },
    label : {
        fontSize : 14,
        color : '#656565',
        lineHeight : 16,
        marginBottom : 5
    },
    txtbox : {
        outlineStyle : 'none',
        fontSize : 16,
        fontWeight : 'bold',
        lineHeight : 16,
        color : colors.headerText

    },
    modify : {
        width : 90,
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
        position : 'static',
        bottom : 0,
        right : 0,
        width : '100%',
        paddingBottom : 10,
        alignItems : 'center',
        justifyContent : 'center',
        flexDirection : 'row',
        backgroundColor : 'white'
    }
})
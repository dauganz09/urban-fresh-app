import { SafeAreaView, StyleSheet, Text, View,Image, TextInput,useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import userplaceholder from '../../assets/images/user.png'
import { colors } from '../../utils/constants'

import Header from '../../components/Header'

const TransactionHome = ({navigation}) => {
    const [transactions,setTransactions] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
        <Header onPress={()=>navigation.goBack()} />
        
        <View style={styles.cartBox}>
          
            <Text style={styles.title}>Order History</Text>
            
        </View>
       {
        transactions && 
        <Text style={styles.infoText}>No Current Orders</Text>
       }
    </SafeAreaView>
  )
}

const OrderCard =({status})=>{

    const getColor=(status)=>{
        if(status=="Delivered"){
            return colors.primary
        }else if(status=="Pending"){
            return colors.mango
        }else{
            return colors.headerText
        }
    }
    const {width} = useWindowDimensions()
    return (
        <View style={[styles.card,{width : width * .90}]}>
            <View style={styles.info}>
                <Text style={styles.name}>Seller Name</Text>
                <Text style={styles.date}>Date, Month, Year</Text>
                    <View style={styles.indicator}>
                        <View style={[styles.dot,{backgroundColor: getColor(status)}]}></View>
                        <Text style={styles.status}>{status}</Text>
                    </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.name}>PHP 0.00</Text>
                <Text style={styles.date}>0 Items</Text>
                  
            </View>
        </View>
    )
}

export default TransactionHome

const styles = StyleSheet.create({
    container :{
        flex :1,
        backgroundColor : 'white',
        paddingHorizontal : 10,
        position : 'relative'
    },
    cartBox : {
        height :70,
        width : '100%',
        flexDirection : 'row',
       
        alignItems : 'center'
        
    },
    title : {
      textAlign : 'center',
        flex  :1,
        fontSize : 24,
        fontWeight:'bold',
        color : colors.primary,
        lineHeight : 20

    },
    infoText : {
        textAlign : 'center',
        flex  :1,
        fontSize : 20,
        fontWeight:'bold',
        color : colors.headerText,
        lineHeight : 20,
        width : '100%',
    },
    card : {
        marginVertical : 0,
        marginHorizontal : 'auto',
        borderColor : '#AFAFAF',
        borderStyle :'solid',
        borderWidth : 1,
        paddingVertical : 10,
        paddingHorizontal : 10,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row',
        marginBottom : 10
    },
    info : {
        justifyContent : 'flex-start',
        alignItems : 'flex-start'
    },
    name : {
        fontSize : 14,
        lineHeight : 16,
        color : colors.headerText,
        fontWeight : 'bold'
    },
    date : {
        fontSize : 12,
        lineHeight : 16,
        color :colors.headerText
    },
    indicator : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        width : '100%',
        gap : 5
    },
    dot : {
        width :14,
        height : 14,
        borderRadius : 50

    },
    status : {
        fontSize :12,
        lineHeight : 14,
        colors: colors.headerText,
        fontWeight : 'bold'
    }
   
})
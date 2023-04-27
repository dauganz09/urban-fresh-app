import { StyleSheet, Text, View,useWindowDimensions,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import fallback from '../assets/images/fallback.png'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from '../utils/constants'

const FavItem = ({isDeleting,store,fav_items}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
            <Text>{store}</Text>
            <View style={styles.line}></View>
      </View>
      <View style={styles.contentContainer}>
        {
            fav_items.map((fv,i)=>(
                <FavProduct key={i} {...fv} isDeleting={isDeleting}/>
            ))
        }
      
       
      </View>
    </View>
  )
}



const FavProduct = ({isDeleting,desc,name,pic,price}) =>{
    const {width} = useWindowDimensions()
    return (
        <View style={[styles.card2,{width : width * .95}]}>
        <Image 
            source={pic[0] || fallback}
            resizeMode='cover'
            style={{
                height : 90,
                width : 90
            }}
        />
        <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <Text style={styles.price}>Php {price}</Text>
        </View>
        <View style={styles.heart}>
            {
                isDeleting ? <Icon name="delete" size={30} color="#FF0000" /> : null
               
            }
        </View>
    </View>
    )
}

export default FavItem

const styles = StyleSheet.create({
    card :{
        width : '100%',
        paddingHorizontal :20,
       
    },
    card2 : {
        height : 120,
        padding: 15,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10
        
    },
    header : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        gap :20
    },
    line : {
        flex :1,
        borderBottomStyle : 'solid',
        borderBottomWidth : .5,
        borderBottomColor : 'black'
    },
    info : {
        flex : 1
    },
    name : {
        color : colors.headerText,
        fontSize : 14,
        lineHeight : 20,
        fontWeight : 'bold',
    },
    desc : {
        color : 'black',
        fontSize : 14,
        lineHeight : 14,
       
    },
    price : {
        color : 'black',
        fontSize : 14,
        lineHeight : 20,
    },
    heart : {
        
        height : 90,
        width : 80,
        alignItems : 'flex-end',
        justifyContent : 'space-evenly',
    },
   actions : {
    backgroundColor : '#E5E5E5',
    borderRadius : 5,
    width : 80,
    height : 30,
    flexDirection : 'row',
    alignItems :'center',
    justifyContent : 'space-evenly',
    gap:5

   },
   num :{
    fontSize : 20,
    fontWeight : 'bold',
   },
   contentContainer : {
    alignItems : 'center',
    gap : 10
  }
})
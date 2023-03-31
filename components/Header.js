import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/constants'
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native';

const Header = ({onPress}) => {
  return (
    <View style={styles.header}>
    
      {onPress && <Pressable onPress={onPress}><Icon2 name="arrow-back" size={25} color="white" /></Pressable>}
      <View style={styles.search}>
          <Icon name="search" size={20} color ="white" />
          <TextInput style={styles.input} placeholder="Search" placeholderTextColor="white" />
      </View>
      <Icon name="heart" size={20} color ="white" />
      <Icon name="shopping-cart" size={20} color ="white" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header : {
        display : 'flex',
        height : 60,
        backgroundColor : colors.primary,
        width : '100%',
        flexDirection : 'row',
        gap : 10,
        alignItems : 'center',
        justifyContent : 'center',
        paddingHorizontal : 20

    },
    search : {
      display : 'flex',
      flexDirection : 'row',
      alignItems: 'center',
      justifyContent : 'flex-start',
      flex:1,
     
      backgroundColor :'#3E3627',
      border : '1px solid  #FFFFFF',
      borderRadius : 7,
      gap:10,
      paddingHorizontal : 10,
      paddingVertical : 5
      
    },
    input : {
      flex :1,
      height : '100%',
      outlineStyle : 'none',
      color : '#FFFFFF',
    }
})
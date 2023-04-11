import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/constants'
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({onPress,hasSearch=true}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
    
      {onPress && <Pressable onPress={onPress}><Icon2 name="arrow-back" size={25} color="white" /></Pressable>}
     {hasSearch ? 
     <View style={styles.search}>
          <Icon name="search" size={20} color ="white" />
          <TextInput style={styles.input} placeholder="Search" placeholderTextColor="white" />
      </View> :
       <View style={styles.spacer}>
       
        </View>
      
      }
      <TouchableOpacity onPress={()=>navigation.navigate('Favorites')}>
      <Icon name="heart" size={20} color ="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
      <Icon name="shopping-cart" size={20} color ="white" />
      </TouchableOpacity>
     
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
        gap : 20,
        alignItems : 'center',
        justifyContent : 'center',
        paddingHorizontal : 25

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
    spacer : {
      flex:1,
    },
    input : {
      flex :1,
      height : '100%',
      outlineStyle : 'none',
      color : '#FFFFFF',
    }
})
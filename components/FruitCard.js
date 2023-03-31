import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/constants'

const FruitCard = ({item}) => {

    console.log(item.image)
  return (
    <TouchableOpacity style={[styles.fruitBox,{backgroundColor : item.color ? item.color : 'white' }]}>
      <Text style={styles.name}>{item.fruit}</Text>
      <Image 
        source={item.image}
        style={styles.img}
        />
    </TouchableOpacity>
  )
}

export default FruitCard

const styles = StyleSheet.create({
    fruitBox : {
        width : 90,
        height : 85,
        borderRadius:5,
        marginHorizontal : 8,
        padding: 8,
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        position : 'relative'
    },
    name : {
        fontSize: 12,
        lineHeight : 18,
        color : colors.headerText,
        fontWeight : 'bold',
        fontStyle : 'normal'
    },
    img : {
        height : 70,
        width : 70,
        position : 'absolute',
        bottom : 0,
        right : 0
    }
})
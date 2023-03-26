import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const Input = (props) => {
  return (
    <View>
      <TextInput {...props} style={[styles.input,{height : props.height ?  props.height : 42}]} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input : {
        border : '2px #21C622 solid',
        outlineStyle : 'none',
        width : 294,
        borderRadius : 10,
        backgroundColor : 'transparent',
        paddingHorizontal :20,
        marginVertical : 10
    }

})
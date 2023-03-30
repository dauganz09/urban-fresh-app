import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/constants'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header : {
        height : 60,
        backgroundColor : colors.primary,
        width : '100%'
    }
})
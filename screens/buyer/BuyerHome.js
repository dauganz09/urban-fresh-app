import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/constants'
import Header from '../../components/Header'

const BuyerHome = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        
    </SafeAreaView>
  )
}

export default BuyerHome

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    }
})
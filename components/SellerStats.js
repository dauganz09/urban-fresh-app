import { StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import React from 'react'

const stats = [
    {
    number : 0,
    name : 'To Ship'
},
{
    number : 0,
    name : 'Cancelled'
},
{
    number : 0,
    name : 'Return'
},{
    number : 0,
    name : 'Review'
},
]

const SellerStats = () => {
    const {width} = useWindowDimensions()
   

  return (
    <View style={[styles.card,{width : width * .9}]}>
      <Text style={styles.title}>Order Status</Text>
      <View style={styles.statBox}>

        {
            stats ? 
            stats.map((stat,i)=>(
                <View key={i} style={styles.stat}>
                <Text style={styles.number}>{stat.number}</Text>
                <Text style={styles.name}>{stat.name}</Text>
              </View>
            )) :
            <Text style={{width : '100%',textAlign : 'center',fontSize : 20 }}>No Stat Available</Text>
        }

        </View>
     
  </View>
  )

    }

export default SellerStats

const styles = StyleSheet.create({
    card : {
        height : 100,
        backgroundColor : 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        marginVertical : 0,
        marginHorizontal : 'auto',
        marginVertical : 10,
        paddingVertical : 5,
        paddingHorizontal : 15,
},
stat : {
    alignItems : 'center',
    justifyContent : 'center',
},
statBox : {
    width : '100%',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
    paddingHorizontal : 30
},
title : {
    fontSize : 14,
    fontWeight : 'bold',
    color : 'black'
},
number : {
    fontSize : 24,
   
    color : 'black'
}

})
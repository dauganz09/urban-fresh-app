import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View,useWindowDimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo';
import { colors } from '../utils/constants';


const SellerCard = ({image,name,onPress}) => {
    const {width} = useWindowDimensions();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card,{ width : width -20,}]}>
      <Image 
        source={image}
        style={styles.cardImg}
        resizeMode='cover'
      />
      <View style={styles.cardBody}>
         <Text style={styles.sellerName}>{name}</Text>
         <View style={styles.address}>
                <Icon name="location" size={18} color={colors.headerText} />
                <Text style={styles.addText}>sadfasdf sdsadfasdfasdfasdfsadfasdfasdfaf</Text>
         </View>
      </View>
    </TouchableOpacity>
  )
}

export default SellerCard

const styles = StyleSheet.create({
    card : {
        height : 70,
        flexDirection :'row',
        alignItems : 'center',
        justifyContent : 'center',
        marginVertical : 0,
        marginHorizontal : 'auto',
        gap: 15,
        paddingHorizontal:10
    },
    cardImg : {
        height : 70,
        width : 70,
        borderRadius : 8

    },
    cardBody : {
        flex :1,
        height : 70,
        justifyContent : 'flex-start'
       
    },
    address: {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent : 'flex-start',
        gap : 10
        
    },
    addText : {
        textAlign :'left',
        color : colors.headerText,
        fontSize : 12,
        lineHeight : 12
    },
    sellerName : {
        fontSize : 16,
        lineHeight : 35,
        fontWeight : 'bold',
        color : colors.headerText,
        textTransform : 'uppercase'
    }


})
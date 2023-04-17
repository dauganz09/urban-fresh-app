import { Image, StyleSheet, Text, TouchableOpacity, View,useWindowDimensions } from 'react-native'
import React from 'react'
import fallback from '../assets/images/fallback.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../utils/constants';

const ProductCard = ({onPress,name,desc,price,stock,unit,pic}) => {
    const {width} = useWindowDimensions()
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card,{width : width * .95}]}>
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
                <Text style={styles.price}>Php{price} per {unit==1 ? 'Kilo' : '100 Grams' }</Text>
                <Text style={styles.price}>Stock: {stock}</Text>
        </View>
        <View style={styles.heart}>
            <Icon name="heart-o" size={25} />
            <TouchableOpacity style={styles.add}><Text style={{fontSize : 14,lineHeight : 14,color : 'white'}}>Add</Text></TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    card : {
        height : 120,
        padding: 15,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10
        
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
    add : {
        backgroundColor : colors.primary,
        width : 60,
        height : 25,
        borderRadius :20,
        alignItems : 'center',
        justifyContent : 'center',
    }
})
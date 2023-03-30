import { StyleSheet, Text, TouchableOpacity, View,ImageBackground,useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const PanelCard = ({title,image,text,link}) => {
    const {width} = useWindowDimensions()
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate(link)} style={[styles.btnCard,{width : width -120}]}>
        <ImageBackground style={styles.imgBg}
            source ={image}
            resizeMode='cover' >
            <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      <Text style={styles.infoText} >{text}</Text>
    </TouchableOpacity>
  )
}

export default PanelCard

const styles = StyleSheet.create({
    btnCard:{
       
        borderRadius : 10,
        height : 150,
        marginVertical : 18,
        overflow : 'hidden',
        gap:10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.18,
shadowRadius: 1.00,

elevation: 1,
    },
    title : {
        fontWeight: 'bold',
        fontSize: 29,
        lineHeight: 35,
        /* identical to box height, or 146% */
        color : 'white',
        textAlign: 'center',
        letterSpacing: 0.05,
    },
    imgBg : {
        borderRadius : 10,
        height : 98,
        alignItems : 'center',
        justifyContent : 'center',
        
    },
    infoText: {
        width : '100%',
        paddingHorizontal:10,
        color : '#21C622',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 12

    }
})
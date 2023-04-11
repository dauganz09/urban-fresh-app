import { Pressable, SafeAreaView, StyleSheet, Text, View,ScrollView,Image,useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import Header from '../../components/Header'
import { colors } from '../../utils/constants'
import SellerCard from '../../components/SellerCard'
import fallback from '../../assets/images/fallback.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import ProductCard from '../../components/ProductCard'



const ProductDetail = ({navigation}) => {
    const {height,width} = useWindowDimensions()

    
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={()=>navigation.goBack()}/>
      <Image
        source={fallback}
        resizeMode='cover'
        style={{
            width: '100%',
            height : height * .25
        }}
      />
      <View style={styles.nameBox}>
        <View style={styles.stars}>
            <Text style={styles.name}>Product Name</Text>
            <View style={styles.rating}>
                <Icon name="star" size={20} color="#FAFF00" />
                <Icon name="star" size={20} color="#FAFF00" />
                <Icon name="star" size={20} color="#FAFF00" />
                <Icon name="star" size={20} color="#FAFF00" />
                <Icon name="star" size={20} color="#FAFF00" />

            </View>
        </View>
        <View style={styles.location}>
           
            <Text style={styles.locationText}>
                    asdfasdfas sad fasdfasdf asdf asasdf asdfasd f sadfasdf asd fsadf
            </Text>
            <Icon name="heart-o" size={25} style={{marginLeft : 20}}  />


        </View>
        <Text style={styles.title}>
            Reviews
        </Text>
       

      </View>
      <ScrollView 
            style={{marginTop: 10}}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            


        </ScrollView>

    
    </SafeAreaView>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    },
    contentContainer :{
        alignItems : 'center',
        gap : 10
    },
    stars :{
        paddingHorizontal : 25,
        paddingVertical : 10,
        flexDirection :'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    title : {
        fontSize :24,
        color : colors.headerText,
        fontWeight : 'bold',
        textAlign : 'center',
        paddingHorizontal : 25,
        marginTop : 20
    },
    name : {
        fontSize :24,
        color : colors.headerText,
        fontWeight : 'bold'
    },
    rating : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        gap : 5
    },
    location : {
        flexDirection :'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        paddingHorizontal : 25,
    },
    locationText : {
        width : 100,
        flex: 1,
        textAlign : 'left',
        fontSize : 14,
        lineHeight : 14
    }
})
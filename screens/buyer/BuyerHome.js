import { ImageBackground, SafeAreaView, StyleSheet, Text, View,Pressable, Image, TouchableOpacity, FlatList,ScrollView } from 'react-native'
import React from 'react'
import { colors } from '../../utils/constants'
import Header from '../../components/Header'
import bg from '../../assets/images/seller.jpg'
import Icon from 'react-native-vector-icons/Entypo';
import wholesale from '../../assets/images/wholesale.png'
import retailer from '../../assets/images/retailer.png'
import { fruits } from '../../utils/data'
import FruitCard from '../../components/FruitCard'
import fallback from '../../assets/images/fallback.png'
import Icon2 from 'react-native-vector-icons/Feather';
import strawberry from '../../assets/images/fruits/strawberry.png'
import banana from '../../assets/images/fruits/banana.png'
import watermelon from '../../assets/images/fruits/watermelon.png'
import guava from '../../assets/images/fruits/guava.png'
import mango from '../../assets/images/fruits/mango.png'
import kiwi from '../../assets/images/fruits/kiwi.png'
import papaya from '../../assets/images/fruits/papaya.png'
import apple from '../../assets/images/fruits/apple.png'
import mangosteen from '../../assets/images/fruits/mangosteen.png'
import dragon from '../../assets/images/fruits/dragon-fruit.png'
import avocado from '../../assets/images/fruits/avocado.png'
import lemon from '../../assets/images/fruits/lemon.png'



const BuyerHome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
     
        <Header />
        <ImageBackground
          source={bg}
          resizeMode="cover"
          style={styles.imgBG}
        >
          <View style={styles.userBanner}>
              <Text style={styles.heading}>Welcome, User</Text>
              <View style={styles.location}>
                <Icon name="location" size={20} color="black" />
                <Text style={styles.text}> lorem asdfasdfasdf asdfasdfasdfa asdf asdf asdfasdfasdfasdfasdfadsf</Text>
              </View>
          </View>
         
        </ImageBackground>
          <View style={styles.optionBox}>
            <Text style={styles.bannerText}>Top Rated</Text>
              <View style={styles.bannerBtn}>
                  <Image 
                   style={styles.fallbackImg}
                    source={fallback}
                    resizeMode='cover'
                  />
                  <View style={{width : 120}}>
                    <Text style={{color : 'white',fontSize : 16,textAlign : 'center',fontWeight : 'bold'}}>J&J Fruit Stand</Text>
                    <Text style={{fontSize :10,lineHeight : 12,color :'white',textAlign : 'center'}}>Rating: 4.9 our of 5 starts</Text>
                    <Text style={{fontSize :10,lineHeight : 12,color:'white',textAlign : 'center'}}>1190 sales of this month</Text>
                  </View>
                  <TouchableOpacity onPress={()=>navigation.navigate('SellerList')} style={styles.bannerGo}>
                     <Text style={styles.goText}>Browse Stores</Text>
                      <Icon2 name="arrow-right" size={15} color={colors.primary} />
                  </TouchableOpacity>
              </View>

          </View>
          <Text style={styles.rowTitleB}>Best Seller this Season</Text>
          <FlatList
             horizontal
             showsHorizontalScrollIndicator={false}
            contentContainerStyle={{display: 'flex',flexDirection : 'row',alignItems : 'center',justifyContent : 'center',height : 100,marginBottom :100}}
            data={fruits}
            renderItem={({item,index})=> <FruitCard navigation={navigation} key={index} {...item}/>}
            keyExtractor={item => item.id}
          />
          <Text style={styles.rowTitle}>What's Popular?</Text>
          <Text style={styles.smallText}>Check out what our shoppers are buying</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.fruitRow}>
                <FruitCard color="rgba(173, 11, 5, 0.4)" image={strawberry} fruit="Strawberry" />
                <FruitCard color="rgba(233, 198, 64, 0.4)" image={banana} fruit="Banana" />
                <FruitCard color="rgba(242, 154, 143, 0.4)" image={watermelon} fruit="Watermelon" />
                <FruitCard color="rgba(94, 174, 13, 0.4)" image={guava} fruit="Guava" />

            </View>
            <View style={styles.fruitRow}>
                <FruitCard color="rgba(251, 255, 32, 0.4)" image={mango} fruit="Mango" />
                <FruitCard color="rgba(193, 208, 59, 0.4)" image={kiwi} fruit="Kiwi" />
                <FruitCard color="rgba(240, 120, 3, 0.4)" image={papaya} fruit="Papaya" />
                <FruitCard color="rgba(207, 6, 6, 0.4)" image={apple} fruit="Apple" />

            </View>
            <View style={styles.fruitRow}>
                <FruitCard color="rgba(133, 55, 72, 0.4)" image={mangosteen} fruit="Mangosteen" />
                <FruitCard color="rgba(223, 54, 92, 0.4)" image={dragon} fruit="DragonFruit" />
                <FruitCard color="rgba(155, 213, 60, 0.4)" image={avocado} fruit="Avocado" />
                <FruitCard color="rgba(249, 254, 5, 0.4)" image={lemon} fruit="Lemon" />

            </View>

          </ScrollView>
        
    </SafeAreaView>
  )
}

export default BuyerHome

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    },
    imgBG : {
      width : '100%',
      height : 145,
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
      paddingHorizontal : 15,
      paddingVertical : 20
    },
    userBanner : {
      height : 90,
      width : '100%',
      backgroundColor : "white",
      borderRadius : 5,
      paddingVertical:10,
      paddingHorizontal :20,
      gap : 10
    },
    location : {
      display : 'flex',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'center',
      width : '100%',
      gap : 10
    },
    heading : {
      fontSize :24,
      fontWeight : 'bold',
      color : colors.primary
    },
    text : {
      fontSize : 12,
      lineHeight : 12
    },
    optionBox : {
      height : 170,
      width : '100%',
      display : 'flex',
      gap :10,
      alignItems : 'flex-start',
      justifyContent : 'center',
      paddingHorizontal :15,
      paddingVertical :20
     
    },
    bannerBtn : {
       backgroundColor : colors.primary,
       padding : 10,
       display : 'flex',
       flexDirection : 'row',
       alignItems :'center',
       justifyContent : 'center',
       height : 100,
       width : '100%',
       borderRadius : 12,
       gap : 10,
    },
    box : {
      height : 155,
      width : 157,
      border : '1px solid black',
      border : `3px ${colors.primary} solid`,
      borderRadius : 5,
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
      padding : 20,
      gap : 10
    },
    boxTitle : {
       fontWeight : 'bold',
       fontSize : 20,
       textTransform : 'uppercase',
    },
    boxImage : {
      height : 85,
      width : 85,
    },
    rowTitle : {
      fontWeight : 'bold',
      fontSize : 24,
      lineheight : 15,
      paddingHorizontal : 20,
      color : colors.primary
    },
    rowTitleB : {
      fontWeight : 'bold',
      fontSize : 24,
      lineheight : 15,
      paddingHorizontal : 20,
      color : colors.headerText
    },
    bannerText : {
      fontWeight : 'bold',
      fontSize : 24,
      lineheight : 15,
      
      color : colors.primary
    },
    fallbackImg : {
      height : 70,
      width : 70,
      borderRadius : 8    
    },
    bannerGo : {
      width : 75,
      height :35,
    
      backgroundColor : "white",
      flexDirection : 'row',
      justifyContent : 'center',
      alignItems : 'center',
      borderRadius : 17,
      paddingHorizontal : 10

    },
    goText : {
      fontSize : 11,
      lineHeight : 12,
      textAlign : 'center',
      color : colors.primary

    },
    smallText : {
      fontSize : 12,
      lineHeight :15,
      color : 'black',
      paddingHorizontal : 20,

    },
    fruitRow : {
      width : '100%',
   
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'center',
      marginVertical : 5
    }
})
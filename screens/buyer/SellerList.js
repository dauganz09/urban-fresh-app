import { Pressable, SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState} from 'react'
import Header from '../../components/Header'
import { colors } from '../../utils/constants'
import SellerCard from '../../components/SellerCard'
import fallback from '../../assets/images/fallback.png'


const SellerList = ({navigation}) => {
    const [active,setActive] = useState('w')

    
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={()=>navigation.goBack()}/>
      <View style={styles.tabs}>
            <Pressable onPress={()=>setActive('w')} style={[styles.tab,{color : active == 'w' ? 'white' : colors.primary,backgroundColor :active == 'w' ? colors.primary : 'white' }]}>
                    <Text style={{fontSize :20,fontWeight:'bold',color : active == 'w' ? 'white' : colors.primary}}>Wholesalers</Text>
            </Pressable>
            <Pressable onPress={()=>setActive('r')} style={[styles.tab,{color : active == 'r' ? 'white' : colors.primary,backgroundColor :active == 'r' ? colors.primary : 'white' }]}>
                    <Text style={{fontSize :20,fontWeight:'bold',color : active == 'r' ? 'white' : colors.primary}}>Retailers</Text>
            </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            alignItems : 'center',
            gap : 20,
            paddingTop : 10
        }}
      >
            <SellerCard image={fallback} name="seller" onPress={()=>navigation.navigate('SellerProfile')} />
            

      </ScrollView>

    </SafeAreaView>
  )
}

export default SellerList

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    },
    tabs : {
        width : '100%',
        paddingHorizontal : 25,
        paddingVertical : 5,
        backgroundColor : 'white',
        height : 100,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
           
    },
    tab : {
        height : 35,
        width : 152,
        borderRadius : 12, 
        flexDirection : 'row',
        alignItems :'center',
        justifyContent : "center",
        fontSize : 24,
        fontWeight : 'bold'
    }
})
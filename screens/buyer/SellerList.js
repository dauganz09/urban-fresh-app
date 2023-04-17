import { Pressable, SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useLayoutEffect} from 'react'
import Header from '../../components/Header'
import { colors } from '../../utils/constants'
import SellerCard from '../../components/SellerCard'
import fallback from '../../assets/images/fallback.png'
import useStore from '../../utils/appStore'
import { collection, query, where,getDocs  } from "firebase/firestore";
import { FIRESTORE_DB } from '../../utils/firebaseConfig'
import { useIsFocused } from '@react-navigation/native';


const SellerList = ({navigation}) => {
    const [active,setActive] = useState('w')
    const userRef = collection(FIRESTORE_DB, "users");
    const [sellers,setSellers] = useState([])
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
      getSellers()
  
   
  }, [active,isFocused])

  const getSellers = async ()=>{
      // Create a query against the collection.
      const type = active === 'w' ? 3 : 2
      const q = query(userRef, where("userType", "==",type));
      const querySnapshot = await getDocs(q);
      const seller_data = []
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      seller_data.push({...doc.data(),seller_id : doc.id})
      });
      setSellers(seller_data)
  }
  console.log(sellers)
    
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={()=>navigation.goBack()}
      />
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
           { 
           sellers.length == 0 && <Text>No Sellers Available!!</Text>
          }

          {
            sellers.map((seller,i)=>(
              <SellerCard key={i} image={seller.pic || fallback} name={seller.storename} onPress={()=>navigation.navigate('SellerProfile',{sellerid : seller.seller_id})} />
            ))
          }
            

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
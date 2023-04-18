import { Pressable, SafeAreaView, StyleSheet, Text, View,ScrollView,Image,useWindowDimensions } from 'react-native'
import React,{useState,useLayoutEffect} from 'react'
import Header from '../../components/Header'
import { colors } from '../../utils/constants'
import SellerCard from '../../components/SellerCard'
import fallback from '../../assets/images/fallback.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import ProductCard from '../../components/ProductCard'
import { collection, query, where,getDocs,getDoc,addDoc, doc, setDoc} from "firebase/firestore";
import { FIRESTORE_DB } from '../../utils/firebaseConfig'
import useStore from '../../utils/appStore'
import { useIsFocused } from '@react-navigation/native';


const SellerProfile = ({route,navigation}) => {
    const {height,width} = useWindowDimensions()
    const { sellerid } = route.params;
    const docRef = doc(FIRESTORE_DB, "users", sellerid);
    const [store,setStore] = useState({})
    const [products,setProducts] = useState([])
    const cart =  useStore((state)=>state.cart)
    const isFocused = useIsFocused();

    useLayoutEffect(() => {
      getStoreProfile();
    

    }, [isFocused])


   const  getStoreProfile=async()=>{
    const docSnap = await getDoc(docRef);

    
if (docSnap.exists()) {
    console.log(docSnap.id, docSnap.data());
    setStore(docSnap.data())
    getStoreProducts(docSnap.id)
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }

    }


    const getStoreProducts = async(id)=>{
        const productRef = collection(FIRESTORE_DB, "products");
        const q = query(productRef, where("userId", "==",id));
        const querySnapshot = await getDocs(q);
        const prod_data = []
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
       
        prod_data.push({...doc.data(),prod_id : doc.id})
        });
        setProducts(prod_data)
        console.log(prod_data)
    }


    
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={()=>navigation.goBack()}
       />
      <Image
        source={store.pic || fallback}
        resizeMode='cover'
        style={{
            width: '100%',
            height : height * .25
        }}
      />
      <View style={styles.nameBox}>
        <View style={styles.stars}>
            <Text style={styles.name}>{store.storename}</Text>
            <View style={styles.rating}>
                <Icon name="star" size={20} color="#FAFF00" />
                <Icon name="star" size={20} color="#FAFF00" />
                <Icon name="star" size={20} color="#FAFF00" />
                <Icon name="star" size={20} color="#FAFF00" />
                <Icon name="star" size={20} color="#FAFF00" />

            </View>
        </View>
        <View style={styles.location}>
            <Icon2 name="location" size={20} color="black" style={{marginRight : 10}} />
            <Text style={styles.locationText}>
                    { `${store.block} ${store.barangay} ${store.city} ${store.province} ${store.zipcode}`}
            </Text>

        </View>
        <Text style={styles.title}>
            Products
        </Text>
       

      </View>
      <ScrollView 
            style={{marginTop: 10}}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
             
             
            
              
              {
                products.length == 0 ? <Text>No Products Available!!</Text> :
                products.map((prod,i)=>(
                    <ProductCard key={i} sname={store.storename} {...prod}  onPress={()=>navigation.navigate('ProductDetail',{prod: prod})} />
                ))
              }


        </ScrollView>

    
    </SafeAreaView>
  )
}

export default SellerProfile

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
        flex : 1,
        textAlign : 'left',
        fontSize : 14,
        lineHeight : 14
    }
})
import { StyleSheet, Text, View,useWindowDimensions,Image, TouchableOpacity } from 'react-native'
import React,{useState,useLayoutEffect} from 'react'
import fallback from '../assets/images/fallback.png'
import Icon from 'react-native-vector-icons/AntDesign'
import { colors } from '../utils/constants'
import { doc, getDoc,deleteDoc  } from "firebase/firestore";
import { FIRESTORE_DB } from '../utils/firebaseConfig'
import useStore from '../utils/appStore'
import { useToast } from 'react-native-toast-notifications'

const CartItem = ({isDeleting,cart,setIsDeleting}) => {
    const [name,setName] = useState("")
    const currentStore = useStore((state)=>state.currentStore)
    

    useLayoutEffect(() => {
        console.log(cart)

     getProduct();
    }, [])

    const getProduct =  async ()=>{
    const docRef = doc(FIRESTORE_DB, "users",cart[0].userId);
    const docSnap = await getDoc(docRef);

    
    if (docSnap.exists()) {
        console.log(docSnap.data())
        
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
            <Text>{currentStore}</Text>
            <View style={styles.line}></View>
      </View>
      <View style={styles.contentContainer}>
            {
                cart.length == 0 ? <Text>No Products</Text> : 
                cart.map((prod,i)=>(
                    <CartProduct setIsDeleting={setIsDeleting} isDeleting={isDeleting} {...prod} key={i} />
                ))
            }
      </View>
    </View>
  )
}



const CartProduct = ({isDeleting,count,product_id,user_id,cart_id,name,desc,price,unit,pic,setIsDeleting}) =>{
    const {width} = useWindowDimensions()
    const [product,setProduct] = useState({})
    const fetchCart = useStore((state)=>state.fetchCart)
    const cartItems = useStore((state)=>state.cart)
    const setCurrentStore = useStore((state)=>state.setCurrentStore)
    const toast = useToast()

    useLayoutEffect(() => {
        
    }, [])

    const handleDelete = async ()=>{
        try {
            const res  = await deleteDoc(doc(FIRESTORE_DB, "cart", cart_id)); 
            
            toast.show('Item deleted from cart!!',{
                type: "success",
                placement: "bottom",
                duration: 2000,
                offset: 30,
                animationType: "slide-in",
              })    
              fetchCart()
              setIsDeleting(false)
              setCurrentStore()
              
        } catch (error) {
            console.log(error)
        }
    }

    const handleDecrement=()=>{

    }

    const handleIncrement=()=>{

    }

    return (
        <View style={[styles.card2,{width : width * .95}]}>
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
                <Text style={styles.price}>PHP {price} per {unit == 1? 'Kilo' : '100 grams'}</Text>
        </View>
        <View style={styles.heart}>
            {
                isDeleting ? <TouchableOpacity onPress={handleDelete}><Icon name="delete" size={30} color="#FF0000" /></TouchableOpacity> : 
                <View style={styles.actions}>
                    <TouchableOpacity onPress={handleDecrement}>
                        <Icon name="minus" size={20}/>
                    </TouchableOpacity>
                  
                    <Text style={styles.num}>{count}</Text>
                    <TouchableOpacity onPress={handleIncrement}>
                        <Icon name="plus" size={20}/>
                    </TouchableOpacity>
                </View>
            }
        </View>
    </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    card :{
        width : '100%',
        paddingHorizontal :20,
       
    },
    card2 : {
        height : 120,
        padding: 15,
        flexDirection : 'row',
        alignItems : 'center',
        gap : 10
        
    },
    header : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        gap :20
    },
    line : {
        flex :1,
        borderBottomStyle : 'solid',
        borderBottomWidth : .5,
        borderBottomColor : 'black'
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
   actions : {
    backgroundColor : '#E5E5E5',
    borderRadius : 5,
    width : 80,
    height : 30,
    flexDirection : 'row',
    alignItems :'center',
    justifyContent : 'space-evenly',
    gap:5

   },
   num :{
    fontSize : 20,
    fontWeight : 'bold',
   },
   contentContainer : {
    alignItems : 'center',
    gap : 10
  }
})
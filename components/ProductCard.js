import { Image, StyleSheet, Text, TouchableOpacity, View,useWindowDimensions } from 'react-native'
import React,{useState,useLayoutEffect} from 'react'
import fallback from '../assets/images/fallback.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../utils/constants';
import useStore from '../utils/appStore';
import { useToast } from "react-native-toast-notifications";

const ProductCard = ({onPress,name,desc,price,stock,unit,pic,prod_id,sname}) => {
    const {width} = useWindowDimensions()
    const addToCart = useStore((state)=>state.addToCart)
    const fetchCart = useStore((state)=>state.fetchCart)
    const user = useStore((state)=>state.user)
    const cart = useStore((state)=>state.cart)
    const currentStore = useStore((state)=>state.currentStore)
    const toast = useToast()
    const [inCart,setinCart] = useState(false)
    
    
   


    useLayoutEffect(() => {
      checkCart(prod_id)
    }, [])

    const checkCart = (prod_id) => {
        const res =  cart.some((item) => item.prod_id == prod_id);
        console.log({checkcart : res})
        if(res){
            setinCart(prev=>!prev)
        }
        
      };

   const handleAddToCart = ()=>{
    if(currentStore == "" || currentStore == sname){
        if(cart.some((item) => item.prod_id == prod_id)) return toast.show('Product already in cart!',{
            type: "danger",
            placement: "bottom",
            duration: 2000,
            offset: 30,
            animationType: "slide-in",
        })

        addToCart(prod_id,user.userid,0,sname,pic,unit,stock,price,name,desc)
        console.log("added to cart")
        toast.show('Product Added to Cart!',{
            type: "success",
            placement: "bottom",
            duration: 2000,
            offset: 30,
            animationType: "slide-in",
        })
        fetchCart()

    }else{
        toast.show('You must add items from the same store!',{
            type: "danger",
            placement: "bottom",
            duration: 2000,
            offset: 30,
            animationType: "slide-in",
        })
    }
    
   }
       
    
  return (
    <TouchableOpacity  onPress={onPress} style={[styles.card,{width : width * .95}]}>
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
            <TouchableOpacity><Icon name="heart-o" size={25} /></TouchableOpacity>
            {inCart ? <Text>Already in Cart</Text>: <TouchableOpacity disabled={stock==0} onPress={handleAddToCart} style={styles.add}><Text style={{fontSize : 14,lineHeight : 14,color : 'white'}}>Add</Text></TouchableOpacity>}
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
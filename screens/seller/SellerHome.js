import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, Touchable, ScrollView,Platform,StatusBar,useWindowDimensions,Image} from 'react-native'
import React,{useState,useLayoutEffect} from 'react'
import Header2 from '../../components/Header2'
import SellerStats from '../../components/SellerStats'
import { colors } from '../../utils/constants'
import Button from '../../components/Button'
import useStore from '../../utils/appStore'
import { collection, query, where,getDocs  } from "firebase/firestore";
import { FIRESTORE_DB } from '../../utils/firebaseConfig'
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'

const SellerHome = ({navigation}) => {
    const user = useStore((state)=>state.user)
    const [tab,setTab] = useState('l')
    const [ltab,setLtab] = useState('r')
    const productRef = collection(FIRESTORE_DB, "products");
    const [products,setProducts] = useState([])
    const isFocused = useIsFocused();
   
    

    useLayoutEffect(() => {
        getProducts()
       
    
     
    }, [tab,isFocused])

    const getProducts = async ()=>{
        // Create a query against the collection.
        const condition = tab == 'l' ? ">" : "==" 

        const q = query(productRef, where("userId", "==",user.userid),where("stock",condition,0));
        const querySnapshot = await getDocs(q);
        const prod_data = []
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        prod_data.push({...doc.data(),prod_id : doc.id})
        });
        setProducts(prod_data)
    }

  return (
    <SafeAreaView style={styles.container}>
      <Header2 name={user.storename}/>
        <SellerStats />
        <View style={styles.header}>
            <Text style={styles.headerText}>My Products</Text>
            <View style={styles.line}></View>
      </View>

      <View style={styles.tabBox}>
            <TouchableOpacity onPress={()=>setTab('l')} style={[styles.tab,{borderBottomColor : tab=='l' && colors.primary}]}>
                <Text style={[styles.tabText,{color : tab=='l' && colors.primary}]}>Live (0)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setTab('s')} style={[styles.tab,{borderBottomColor : tab=='s' && colors.primary}]}>
                <Text style={[styles.tabText,{color : tab=='s' && colors.primary}]}>Sold Out (0)</Text>
            </TouchableOpacity>
           
      </View>
     
                    {
                        tab === 'l' &&
                        <View style={styles.tabBox}>
                        <TouchableOpacity onPress={()=>setLtab('r')} style={[styles.tab,{borderBottomColor : ltab=='r' && colors.primary}]}>
                        <Text style={[styles.tabText,{color : ltab=='r' && colors.primary}]}>Recent</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setLtab('st')} style={[styles.tab,{borderBottomColor : ltab=='st' && colors.primary}]}>
                        <Text style={[styles.tabText,{color : ltab=='st' && colors.primary}]}>Stock</Text>
                    </TouchableOpacity>
                    </View>
                    }
                    <ScrollView style={{flex : 1,}}
                        contentContainerStyle={{alignItems : 'center',justifyContent : 'center'}}
                    >
                        {
                            !products && <Text style={styles.headerText}>No Products</Text>}

                        {
                            products.map((prod,i)=>(
                               <ProductCard key={i} {...prod} />
                            ))
                        }
                
                        
                    </ScrollView>
                    <View style={styles.btnBox}>
                    <Button text="Add Product" color={colors.primary} onPress={()=>navigation.navigate('AddProduct')} textColor="white" />
                    </View>
                  
                   

    </SafeAreaView>
  )
}

const ProductCard = ({pic,name,desc,price,unit,stock})=>{
    const {height,width} = useWindowDimensions()
    return (
        <View  style={[styles.card,{width : width * .95}]}>
        <Image 
            source={pic[0]}
            resizeMode='cover'
            style={{
                height : 90,
                width : 90
            }}
        />
        <View style={styles.info}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
                <Text style={styles.price}>PHP {price} per {unit ? 'Kilo' : '100 grams'}</Text>
                <Text style={styles.price}>Stock: {stock}</Text>
        </View>
        <View style={styles.actions}>
                <Icon name="edit" size={30} color={colors.primary} />
                <Icon name="delete" size={30} color={colors.primary} />
        </View>
      
    </View>
    )
}

export default SellerHome

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        paddingTop: Platform.OS === 'android' ? 25 : 0

    },
    header : {
        
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        gap :20,
        paddingHorizontal : 20,
        marginBottom :10,
        marginTop : 20
    },
    headerText : {
        fontSize : 16,
        
        color : colors.headerText,
    },
    line : {
        flex :1,
        borderBottomStyle : 'solid',
        borderBottomWidth : .5,
        borderBottomColor : 'black'
    },
    tabBox :{
        width : '100%',
        height: 40,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    },
    tab : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomColor : '#dfdfdf',
        borderBottomWidth : 1,
        borderBottomStyle : 'solid',
        alignItems : 'center',
        justifyContent : 'center',
        height : 40
    },
    tabText : {
        color : 'black',
        fontSize : 12
    },
    liveBox : {
        width : '100%',
        flex : 1,

    },
    btnBox : {
        width : '100%',
        alignItems : 'center',
        justifyContent : 'center',
    },
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
    actions : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly',
        width : 100,
       
    }
})
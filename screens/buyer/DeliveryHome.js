import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { colors } from '../../utils/constants'
import Header from '../../components/Header'
import { FIRESTORE_DB } from '../../utils/firebaseConfig'
import useStore from '../../utils/appStore';
import { collection, query, where,getDocs,orderBy } from "firebase/firestore";
import Button from '../../components/Button'


const DeliveryHome = ({navigation}) => {
  const [order,setOrder] = useState([])
  const user = useStore((state)=>state.user)

  useEffect(() => {
    getOrder()

  }, [])
  

  const getOrder = async () =>{

    const q =  query(collection(FIRESTORE_DB, "orders"), where("user_id", "==",user.userid),orderBy("date","desc"));
        
    const querySnapshot = await getDocs(q);
    const neworders = []
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    neworders.push({...doc.data(),orderid : doc.id})
    });
   
    setOrder(neworders)

  }
  const getColor=(status)=>{
    if(status == 3){
        return colors.dragon
    }
    else if(status==2){
        return colors.primary
    }else if(status==1){
        return colors.mango
    }else{
        return colors.headerText
    }
}


const getStatus=(status)=>{
  if(status == 3){
      return "Cancelled"
  }
  else if(status==2){
      return "Delivered"
  }else if(status==1){
      return "Out for Deliver"
  }else{
      return "Pending"
  }
}

  console.log(order)
  return (
    <SafeAreaView style={styles.container}>
        <Header onPress={()=>navigation.goBack()} />
      <View style={styles.cartBox}>
          
          <Text style={styles.title}>Delivery Status</Text>
          {order.length == 0 ? <Text></Text> : <Text style={styles.orderText}>Your order is {getStatus(order[0].status)}</Text>}
         { order.length == 0 ? <Text>No Current Orders</Text>
         
         :<View style={styles.infoBox}>
              <Text style={styles.text}><Text style={styles.head}>{order.length > 0 && order[0].storename}</Text> has <Text style={[styles.status,{color : getColor(order[0].status)}]}>{order.length > 0 && getStatus(order[0].status)}</Text> your order</Text>
              <Text style={styles.text}>Delivery Rider: Smith, John</Text>
              <Text style={styles.text}>Contact Number: 09162568998</Text>

          </View>}
          <View><Button color={colors.primary} text="Back to Home" textColor="white" onPress={()=>navigation.goBack()}/></View>
      </View>
    </SafeAreaView>
  )
}

export default DeliveryHome

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    },
    cartBox : {
      
        width : '100%',
        flex :1,
        gap :20,
        justifyContent : 'space-around',
        alignItems : 'center'
        
    },
    title : {
        textAlign : 'center',
        fontSize : 24,
        fontWeight:'bold',
        color : colors.primary,
        lineHeight : 20

    },
    orderText :{
      textAlign : 'center',
        fontSize : 24,
        fontWeight:'bold',
        color : colors.headerText,
        lineHeight : 20
    },
    infoBox : {
      width : 300,
      marginTop : 0,
      marginTop : 0,
      marginLeft: 'auto',
      marginRight : 'auto',
      height : 200,
      backgroundColor : 'rgba(33, 198, 34, 0.3)',
      borderRadius : 12,
      alignItems : 'center',
      justifyContent : 'center'
    },
    text :{
      textAlign : 'center',
      fontSize : 14,
      color : colors.headerText,
      lineHeight : 18
    },
    head :{
      color : colors.headerText,
      fontWeight : 'bold',
      fontSize : 24
    },
    status :{
      
      fontWeight : 'bold'
    }
})
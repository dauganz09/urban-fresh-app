import React,{useEffect,useState,userRef} from 'react'
import { StyleSheet, Text, View,RefreshControl, TouchableOpacity,FlatList,SafeAreaView,ActivityIndicator,TextInput, ScrollView } from 'react-native'
import {axios2} from '../utils/axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import { useToast } from "react-native-toast-notifications";
import useStore from '../utils/appStore';

const COLORS = [
  {
    color : "primary",
    hex : "#450b5a"
  },
  {
    color : "success",
    hex : "#209f84"
  },
  {
    color : "info",
    hex : "#2781d5"
  },
  {
    color : "warning",
    hex : "#ff5c00"
  },
  {
    color : "danger",
    hex : "#f72b50"
  }


]

const Question = ({index,item}) =>{
  const updateComments = useStore((state)=>state.updateComments)
  const data = useStore((state)=>state.data)
  const [comment,setComment] = useState(item.comment);

  useEffect(()=>{
    // console.log(item)
    console.log('Re rendered!')
  },[comment])

  const handleComment= (text)=>{
    setComment(text)
    updateComments(index,text)
  }
  console.log(comment)
  console.log(data)

  return (
  <View style={[{backgroundColor : item.question_color},styles.question_box]}>
      <Text style={[styles.qtext]}>{index+1}. {item.question_text}</Text>
      <TextInput 
        editable
        multiline
        numberOfLines={4}
        maxLength={255}
        style={styles.textarea}
        value={item.comment}
        onChangeText={(text) => handleComment(text)}
      />
  </View>
  )
  
}


const Questions = ({route, navigation}) => {



  const [isloading,setIsloading] = useState(false);
  const [refreshing, setRefreshing] = useState(false)
  const [userid,setUserid] =  useState(0)
  const toast = useToast();
  const { code } = route.params;
  const data = useStore((state) => state.data);
  const loading = useStore((state) => state.loading);
  const hasErrors = useStore((state) => state.hasErrors);
  const fetchData = useStore((state) => state.fetch);
  const updateComments = useStore((state)=>state.updateComments)
  const setLoading = useStore((state)=>state.setLoading)
  

  useEffect(() => {
    // getQuestions();
    fetchData(code);
    console.log('Rerendred QUestions')
    AsyncStorage.getItem('user_id').then(value => {
      if(value !== null || value !== undefined){
        setUserid(parseInt(value))
        //console.log(value)
      }
    }).catch(err => {});
    
   
  }, [])
  
  // const getQuestions = ()=>{
  //   // const res = axios1.get(`getq/${code}`);
  //   // const result = await res;
  //   // const {data} = result
  //   // setQuestions(data);
   
  //   setIsloading(true)
  //   fetch(`https://caringstore.xyz/api/getq/${code}`).then((res)=> res.json())
  //   .then(data=>{
  //     const newData = data.map(item => {
  //       return {...item,comment: ''}
  //     })
      
  //     setQuestions(newData)
  //   })
  //   setIsloading(false)
  //   console.log(questions);
  // }

  const predict = async () =>{
   console.log(data)
  
    const emptyfields = data.filter(item=> item.comment == '')
    if(emptyfields.length >0) {
      toast.show("Please fill up empty fields!!", {
        type: "danger",
        placement: "bottom",
        duration: 2000,
        offset: 30,
        animationType: "slide-in",
      });
      return;
    }

    try {
       setLoading(true)
       console.log(data);
      const res = axios2.post('analyze',{
        user_id : userid,
        questions : data
      });
    const result = await res;
    
    setLoading(false)
    navigation.navigate('Results',{name:'Results',results : result.data});
  }catch (err){
    console.error(`Error received from axios.post: ${JSON.stringify(err)}`);
  }

   

  }

  // const handleSubmit = ()=>{
  //   console.log(questions)
  // }

  const _onRefresh = () => {
    console.log('_onRefresh')
    setRefreshing(true);
    fetchData(code);
};



 
  
  return (
    <SafeAreaView style={styles.container}>
      <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          indicatorStyle={{color : '#4649FF'}}
          size="large"
          overlayColor='rgba(0, 0, 0, 0.50)'
        />
      <FlatList 
        data={data}
        renderItem={({item,index})=> <Question   index={index} item={item} />}
        keyExtractor={item => item.question_id}
        ItemSeparatorComponent={ItemDivider}
        refreshControl={
          <RefreshControl 
              refreshing={refreshing} 
              onRefresh={_onRefresh}
              tintColor="#F8852D"/>
      }
      
      />
      <TouchableOpacity style={styles.submit} onPress={predict}>
        <Text style={{textAlign:'center',color : 'white'}}>Submit</Text>
      </TouchableOpacity>
     
      
    </SafeAreaView>
    
  )
}

const ItemDivider = () =>{
  return (
    <View style={styles.seperator}></View>
  )
}


const getcolor = (qcolor)=>{
     let qucolor =  COLORS.filter(c => c.color == qcolor );
     
     return {backgroundColor : qucolor[0].hex}

}

export default Questions

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: '#fff',
    paddingTop : 2
  },
  scrollBox : {
    padding: 2
  },
  spinnerTextStyle: {
    color: '#4649FF'
  },
 
  question_box : {
    height: 200,
    paddingHorizontal : 2,
    marginHorizontal : 2,
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-evenly',
    alignItems : 'center'

  },
  qtext : {
    color : 'white',
  textAlign : 'left',
  fontSize : 20

  },
  seperator : {
    height: 2,
    width: '100%'
  },
  textarea: {
    backgroundColor : 'white',
    width: '100%',
    
  },
  submit : {
    display :'flex',
            justifyContent : 'center',
            alignItems : 'center',
            height : 50,
            width : '100%',
            borderColor : 'white',
            borderWidth : 1,
            borderRadius : 5,
           
            paddingHorizontal : 10,
            color : 'white',
            fontSize : 20,
            fontWeight : 'bold',
            textTransform : 'uppercase',
            backgroundColor : '#4649FF',
  }
 
  
})
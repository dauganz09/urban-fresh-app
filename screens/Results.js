import { StyleSheet,Image, Text, View,FlatList,SafeAreaView} from 'react-native'
import React from 'react'
import happy from '../assets/happy.png';
import sad from '../assets/sad.png';
import angry from '../assets/angry.png';



const Results = ({route, navigation}) => {
  
    const { results } = route.params;
    console.log(results)
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={results.emotions}
        renderItem={({item,index})=> <EmotionImg  i={index} item={item} />}
        keyExtractor={item => item.qid}
        ItemSeparatorComponent={ItemDivider}
        
      
      />
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight:'bold',textTransform: 'uppercase'}}>Successfully Submitted</Text>
        <Text style={{fontSize: 16,textTransform: 'uppercase'}}>Thank you for your time</Text>
        <Text style={{fontSize: 16,textTransform: 'uppercase'}}>Always happy to serve you!</Text>
      </View>
     
    </SafeAreaView>
    
  )
}

const ItemDivider = () =>{
    return (
      <View style={styles.seperator}></View>
    )
  }

const EmotionImg =({item,i})=>{
    return(
        <View key={i} style={{display: 'flex',flexDirection: 'row',width: '100%',justifyContent:'space-evenly',alignItems:'center'}}>
                <Text style={{fontSize:16,fontWeight :'bold'}}>Question No. {i+1}</Text>
               { 
               
               getEmoji(item.emotion)
               }
            </View>

    )
}

const getEmoji = (emotion)=>{
    let emoji;
    if(emotion == 'happy'){
        emoji = happy
    }else if(emotion == 'sad'){
       emoji = sad

    }else{
        emoji = angry
    }

    return (
        <Image 
        source = {emoji}
        style = {{width : 120, height : 120,}}
         />
    )
}



export default Results

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: '#fff',
    paddingTop : 2,
   
    
  },
  scrollBox : {
    padding: 2
  },
  seperator : {
    height: 2,
    width: '100%'
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
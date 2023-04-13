import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, Touchable, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Header2 from '../../components/Header2'
import SellerStats from '../../components/SellerStats'
import { colors } from '../../utils/constants'
import Button from '../../components/Button'
import useStore from '../../utils/appStore'

const SellerHome = () => {
    const user = useStore((state)=>state.user)
    const [tab,setTab] = useState('l')
    const [ltab,setLtab] = useState('r')

  return (
    <SafeAreaView style={{flex : 1,backgroundColor : 'white'}}>
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
                        <Text style={styles.headerText}>No Products</Text>
                
                        
                    </ScrollView>
                    <View style={styles.btnBox}>
                    <Button text="Add Product" color={colors.primary} textColor="white" />
                    </View>
                  
                   

    </SafeAreaView>
  )
}

export default SellerHome

const styles = StyleSheet.create({
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
    }
})
import { SafeAreaView, StyleSheet, Text, View,StatusBar,Platform, TouchableOpacity, TextInput,KeyboardAvoidingView,Image } from 'react-native'
import React,{useState} from 'react'
import useStore from '../../utils/appStore';
import { colors, padding } from '../../utils/constants';
import { SelectList } from 'react-native-dropdown-select-list'
import { useToast } from "react-native-toast-notifications";
import * as ImagePicker from 'expo-image-picker';

const AddProduct = () => {

    const user = useStore((state)=>state.user)
    const [product,setProduct] = useState({
        userId : user.userid,
        pic : [],
        name : '',
        desc : '',
        unit : user.userType == 2 ? 2 : 1,
        price : 0,
        stock : 0,
        shipping : 0
    })
    const toast = useToast();

    console.log(user)

    const data = [
        {key:1, value:'per 1 Kilo',},
        {key:2, value:'per 100 Grams'},
       
    ]

    const onChangeType = async (val)=>{
        setProduct({...product,['unit']:val})
        console.log(val)
      }

      const pickImage = async  () => {
        if(product.pic.length === 5){
            toast.show('Cannot select more than 5 pictures',{
                type: "danger",
                placement: "bottom",
                duration: 2000,
                offset: 30,
                animationType: "slide-in",
              })
              return;
        }
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        console.log(result.assets[0].uri);
        console.log(result.assets);
    
        if (result.assets[0].uri) {
          const newPics = [...product.pic,result.assets[0].uri]
          console.log(newPics)
          setProduct({...product,['pic'] :newPics});
        }
     

      };




    const handleStock = (val)=>{
        if(user.userType === 3 && val < 10){
            toast.show('Minimum of 10 Kilos',{
                type: "danger",
                placement: "bottom",
                duration: 2000,
                offset: 30,
                animationType: "slide-in",
              })
              console.log(val)
              return;
        }

        if(user.userType === 2 && (val < 100 || val > 10000)){
            toast.show('Minimum of 100 Grams and Maximum of 10 Kilos Allowed for user account type',{
                type: "danger",
                placement: "bottom",
                duration: 2000,
                offset: 30,
                animationType: "slide-in",
              })
              console.log(val)
              return;
        }

        setProduct({...product,['stock']:val})

    }
    console.log({product : product})
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.main}>
      <View style={styles.input}>
           <Text>Photos</Text>
           <View style={styles.preview}>
            <TouchableOpacity onPress={pickImage} style={styles.picker}>
                    <Text>+ Add a Photo</Text>
            </TouchableOpacity>
            <View style={styles.imgPreview}>
                    {product?.pic.length > 0 &&
                    product.pic.map((pic,i)=>(
                        <Image
                        key={i}
                        source={{uri :pic}}
                        style={{height : 80,
                        width : 80}}
                        resizeMode='cover'
                    />
                    ))
                  }
            </View>
           </View>
      </View>
      <View style={styles.input}>
           <Text>Product Name</Text>
           <TextInput onChangeText={(text)=>setProduct({...product,['name']:text})} style={styles.textBox} value={product.name} placeholder='Product Name' />
      </View>
      <View style={styles.input}>
           <Text>Description</Text>
           <TextInput onChangeText={(text)=>setProduct({...product,['desc']:text})} style={[styles.textBox,{height : 40}]}  value={product.desc} placeholder='Product Name' multiline={true} />
      </View>
      <View style={styles.input}>
           <Text>Unit</Text>
           <SelectList  boxStyles={[styles.textBox,{height : 40,width : 120}]} defaultOption={product?.unit==1 ? {key : 1,value : 'per 1 Kilo'} :{key : 2,value : 'per 100 grams'}} setSelected={onChangeType} save="key"  search={false} data={data} placeholder="Unit"  />
      </View>
      <View style={styles.input}>
           <Text>Price</Text>
           <View style={{flexDirection: 'row',alignItems : 'center'}}>
           <TextInput onChangeText={(text)=>setProduct({...product,['price']:text})} style={[styles.textBox,{height : 40,width : 70}]}  value={product.price} placeholder='Price'  /><Text>{product?.unit ==2 ? 'per 100 grams' : 'per 1 Kilo'}</Text>   
           </View>
          
      </View>
      <View style={styles.input}>
           <Text>Stock</Text>
           <TextInput onChangeText={(text)=>setProduct({...product,['stock']:text})} style={[styles.textBox,{height : 40}]}  value={product.stock} placeholder='0' />
      </View>
     
      <View style={styles.input}>
           <Text>Shipping Fee</Text>
           <TextInput onChangeText={(text)=>setProduct({...product,['shipping']:text})} style={[styles.textBox,{height : 40}]}  value={product.shipping} placeholder='Shipping Fee'/>
      </View>

    </KeyboardAvoidingView>
  )
}

export default AddProduct

const styles = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : 'white',
    },
    input :{
        width : '100%',
        ...padding.HPADDINGMD,
        ...padding.VPADDINGSM,
       justifyContent : 'space-evenly',
       borderBottomStyle : 'solid',
       borderBottomColor : '#D6D6D6',
       borderBottomWidth : 1
       

    },
    picker : {
        height : 85,
        width : 85,
        alignItems : 'center',
        justifyContent : 'center',
        borderColor : colors.primary,
        borderWidth : 1,
        borderStyle : 'dashed'
    },
    textBox : {
        width : '100%',
        outlineStyle : 'none',
        fontSize : 20,
      

    },
    preview : {
        flexDirection : 'row',
        alignItems : 'center',
    },
    imgPreview : {
        flex : 1,
        border : '1px solid black',
        paddingLeft: 20,
        flexWrap : 'wrap',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'center',
        gap : 10

    }
})
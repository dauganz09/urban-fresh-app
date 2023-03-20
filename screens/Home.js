import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import bg from '../assets/bgimage.png';



export default function Home({ navigation }) {



   return (
      <SafeAreaView style={styles.container}>
         <ImageBackground source={bg} style={styles.image}>



            <View style={styles.btnContainer}>


               <TouchableOpacity onPress={() => navigation.navigate('Questions', { name: 'Product Quality', code: 1 })} style={styles.login_button}>
                  <Text style={styles.login_button_text}>Product Quality</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => navigation.navigate('Questions', { name: 'Service Quality', code: 2 })} style={styles.login_button}>
                  <Text style={styles.login_button_text}>Service Quality</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => navigation.navigate('Questions', { name: 'Quality Management', code: 3 })} style={styles.login_button}>
                  <Text style={styles.login_button_text}>Quality Management</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => navigation.navigate('Questions', { name: 'Customer Loyalty', code: 4 })} style={styles.login_button}>
                  <Text style={styles.login_button_text}>Customer Loyalty</Text>
               </TouchableOpacity>

            </View>

         </ImageBackground>

      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'black',
      flex: 1,

      alignItems: 'center',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
   },
   image: {
      width: '100%',
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
   },
   btnContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: 400,

   },

   login_button: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 300,
      borderColor: 'white',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 15,
      paddingLeft: 10,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      backgroundColor: '#646FD4',
   },
   login_button_text: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      textTransform: 'uppercase',

   }

});

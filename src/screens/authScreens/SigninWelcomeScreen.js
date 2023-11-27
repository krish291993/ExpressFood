import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {colors} from "../../globals/Style";
import Swiper from 'react-native-swiper'

export default function SigninWelcomeScreen({navigation}) {
  return (
    <View style={styles.welContainer}>
      <View style={{ alignItems:'center',padding:20, flex:1}}>
        <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}}>DISCOVER RESTAURANTS</Text>
        <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}}>IN YOUR AREA</Text>
      </View>
      <View style={{flex:1}}>
        <Swiper autoplay={true}>
            <View style={styles.slider}>
                <Image style={{height:'100%', width:'100%'}} source={require('../../images/pasta.jpg')} />
            </View>
            <View style={styles.slider}>
                <Image style={{height:'100%', width:'100%'}} source={require('../../images/salmon.jpg')} />
            </View>
            <View style={styles.slider}>
                <Image style={{height:'100%', width:'100%'}} source={require('../../images/pizza.jpg')} />
            </View>
        </Swiper>
      </View>
      <View style={{flexDirection:'column', alignItems:'center',  marginTop:130}}>
        <TouchableOpacity style={styles.btn1} onPress={()=>{navigation.navigate("SigninScreen")}}>
          <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2}>
          <Text style={{color:'black', fontSize:16, fontWeight:'bold'}}>Create your account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    welContainer:{
        flex:1,
    },
    slider1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btn1:{
      width:'90%',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:colors.buttons,
      padding:12,
      borderRadius:12
    },
    btn2:{
      width:'90%',
      justifyContent:'center',
      alignItems:'center',
      padding:10,
      borderRadius:12,
      borderWidth:1,
      borderColor:colors.grey3,
      marginVertical:20
    },
   
})
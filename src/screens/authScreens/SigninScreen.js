import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {colors} from "../../globals/Style";
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Header from '../../components/Header';

export default function SigninScreen({navigation}) {
  return (
    <View style={styles.signinContainer}>
      <Header title="MY ACCOUNT" navigation={navigation} />
      <View style={{marginLeft:20, marginTop:10}}>
        <Text style={{color:colors.buttons, fontSize:22, fontWeight:'bold'}}>Sign-In</Text>
      </View>
      <View style={{alignItems:'center',marginTop:10}}>
        <Text style={{color:colors.grey3,fontSize:16}}>please enter the email and password</Text>
        <Text style={{color:colors.grey3,fontSize:16}}>registered with your account</Text>
      </View>
      <View style={{marginTop:20}}>
        <View>
          <TextInput style={styles.textInput1} placeholder='Email' placeholderTextColor="#86939e" />
        </View>
        <View style={styles.textInput2}>
          <TextInput placeholder='Password' placeholderTextColor="#86939e" />
          <Icon style={{marginHorizontal:20}} name="eye-outline" size={28} color="#86939e" />
        </View>
      </View>
      <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center',marginVertical:30, marginTop:20}}>
        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('HomeScreen')}>
          <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text style={{color:colors.grey3, fontSize:18, textDecorationLine:'underline'}}>Forgot Password ?</Text>
      </View>
      <Text style={{color:'black', fontSize:18, fontWeight:'bold',textAlign:'center',marginTop:30}}>OR</Text>
      <View style={styles.signinBtn}>
        <TouchableOpacity style={{flexDirection:'row', backgroundColor:"#4267B2", marginVertical:20,padding:12, borderRadius:12, alignItems:'center', justifyContent:'center'}}>
          <EvilIcons style={{marginHorizontal:20}} name="sc-facebook" size={28} color="white" />
          <Text style={{color:'white', fontWeight:'bold'}}>sign in with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row', backgroundColor:"#DB4437", padding:12, borderRadius:12, alignItems:'center', justifyContent:'center'}}>
          <Icon style={{marginHorizontal:20}} name="logo-google" size={20} color="white" />
          <Text style={{color:'white', fontWeight:'bold'}}>sign in with Google</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{color:'black', marginVertical:20, marginHorizontal:20}}>New on ExpressFood ?</Text>
      </View>
      <View style={{alignItems:'flex-end', marginHorizontal:20}}>
        <TouchableOpacity style={{borderWidth:1, borderColor:colors.buttons, padding:8, borderRadius:12}}>
          <Text style={{color:colors.buttons}}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  signinContainer:{
    flex:1,
  },
  textInput1:{
    borderWidth:1,
    borderColor:colors.cardcomment,
    marginHorizontal:20,
    borderRadius:12,
    marginBottom:20,
    paddingLeft:15,
    color:colors.cardcomment
  },
  textInput2:{
    borderWidth:1,
    borderRadius:12,
    marginHorizontal:20,
    borderColor:colors.cardcomment,
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    paddingLeft:15,
    color:colors.cardcomment
  },
  btn:{
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.buttons,
    padding:12,
    borderRadius:12
  },
  signinBtn:{
    marginHorizontal:20,
  }
})
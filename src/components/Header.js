import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from "../globals/Style";
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header({title, navigation}) {
  return (
    <View style={styles.header}>
      <View style={{marginLeft:20}}>
        <Icon onPress={()=>navigation.goBack()} name="arrow-back" size={28} color="white" />
      </View>
      <Text style={{color:'white',fontSize:22,fontWeight:'bold', marginLeft:30}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
        backgroundColor: colors.buttons,
    }
})
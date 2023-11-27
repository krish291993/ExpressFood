import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from "./src/globals/Style"
import RootNavigation from './src/navigation/RootNavigation'
import TimePass from './src/components/TimePass'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#ff8c52'/>
      <RootNavigation />
      {/* <TimePass /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.cardbackground
  }
})
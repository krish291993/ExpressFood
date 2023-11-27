import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Icon, withBadge, Badge } from "@rneui/themed";
export default function TimePass() {
  const BadgeIcon = withBadge(0)(Icon)

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 20,
      marginBottom: 40,
    }}>
      <BadgeIcon
       type="Entypo"
       name="shopping-cart"
       color="red"
       size={35}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
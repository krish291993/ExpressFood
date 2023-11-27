import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {Icon, withBadge, Badge} from '@rneui/themed';
import {colors} from '../globals/Style';

export default function HomeHeader({title}) {
  const BadgeIcon = withBadge(0)(Icon);
  return (
    <View style={styles.homeHeader}>
      <View style={{marginHorizontal: 10}}>
        <Entypo name="menu" size={30} color="white" />
      </View>
      <View>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>{title}</Text>
      </View>
      <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 1,
      marginBottom: 10,
      marginHorizontal:16
    }}>
      <BadgeIcon
       type="Entypo"
       name="shopping-cart"
       color="white"
       size={29}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeHeader: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: 40,
    justifyContent: 'space-between',
    alignItems:'center'
  },
});

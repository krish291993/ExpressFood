import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from '../components/HomeHeader';
import {colors} from '../globals/Style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const [delivery, setDelivery] = useState(true);
  return (
    <View style={styles.homeContainer}>
      <HomeHeader title="ExpressFood" />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <View>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.buttons : colors.grey5,
                }}>
                <Text style={{color: 'black', marginLeft: 5, fontSize: 16}}>
                  Delivery
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}>
              <View
                style={{
                  ...styles.deliveryButton,
                  backgroundColor: delivery ? colors.grey5 : colors.buttons,
                }}>
                <Text style={{color: 'black', marginLeft: 5, fontSize: 16}}>
                  Pick Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:10, marginVertical:10}}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.grey4,
              paddingVertical: 5,
              paddingHorizontal:28,
              borderRadius:15,
              width:'85%',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center',paddingVertical: 3, borderRadius:15, paddingLeft:10}}>
              <FontAwesome name="map-marker" size={26} color={colors.grey1} />
              <Text style={{color: colors.grey1, marginLeft: 5}}>
                22 Beessie Street
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',paddingVertical: 3, backgroundColor:'white', paddingHorizontal:7, borderRadius:15, marginLeft:30}}>
              <MaterialCommunityIcons
                name="clock"
                size={26}
                color={colors.grey1}
              />
              <Text style={{color: colors.grey1, marginLeft: 5}}>Now</Text>
            </View>
          </View>
          <View style={{alignItems:'center', justifyContent:'center'}}>
            <MaterialCommunityIcons name="tune" size={28} color={colors.grey1} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  deliveryButton: {
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5,
  },
});

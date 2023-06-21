import {Text, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

const SubHeader = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#bbe8ef', '#bdeee9', '#c3f1e3']}
      style={styles.container}>
      <Feather name="map-pin" size={16} color="#2c4341" />
      <Text style={styles.deliver}>Deliver to Muskan - Pune 897654</Text>
      <SimpleLineIcons name="arrow-down" size={10} color="#000000" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliver: {
    fontSize: 13,
    color: '#2c4341',
    paddingHorizontal: 6,
  },
});

export default SubHeader;

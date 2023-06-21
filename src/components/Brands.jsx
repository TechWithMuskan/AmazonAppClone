import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Brand1 from '../assets/brand1.jpeg';
import Brand2 from '../assets/brand2.jpeg';
import Brand3 from '../assets/brand3.jpeg';
import Brand4 from '../assets/brand4.jpeg';

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands of the day</Text>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={Brand1} style={styles.imgStyle} />
            <Text style={styles.brandTitle}>
              Min. 20% off | CaratLane Diamond Neklace
            </Text>
          </View>
          <View style={styles.brands}>
            <Image source={Brand2} style={styles.imgStyle} />
            <Text style={styles.brandTitle}>
              Min. 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image source={Brand3} style={styles.imgStyle} />
            <Text style={styles.brandTitle}>
              Heels - Upto 50% OFF on Heeled Sandals, High Heel{' '}
            </Text>
          </View>
          <View style={styles.brands}>
            <Image source={Brand4} style={styles.imgStyle} />
            <Text style={styles.brandTitle}>
              Sony 60W Blutooth SoundBar Speaker Audio Engine
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  imgStyle: {
    height: 150,
    width: '100%',
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  brands: {
    width: '50%',
    padding: 10,
  },
  brandTitle: {
    fontSize: 12,
    color: 'black',
    marginTop: 4,
  },
});

export default Brands;

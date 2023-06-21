import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import RecommendProduct from '../assets/recommend.jpg';

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image source={RecommendProduct} style={styles.imgStyle} />
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>18% off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.discountPrice}>₹ 1,549.00</Text>
          <Text style={styles.mrp}>M.R.P.</Text>
          <Text style={styles.actualPrice}>₹ 1895.00</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>
        <Text style={styles.allDeals}>See all deals</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
  },
  imgStyle: {
    height: 250,
    width: '100%',
    marginVertical: 10,
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  offDealBtn: {
    backgroundColor: '#be0201',
    width: 60,
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
  },
  offDeal: {
    color: 'white',
    fontSize: 12,
  },
  deal: {
    color: '#be0201',
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountPrice: {
    color: 'black',
    fontSize: 16,
    marginVertical: 5,
  },
  mrp: {
    fontSize: 10,
    marginHorizontal: 5,
  },
  actualPrice: {
    fontSize: 10,
    textDecorationLine: 'line-through',
  },
  productName: {
    color: 'black',
    fontSize: 14,
  },
  allDeals: {
    color: '#017185',
    fontSize: 14,
    marginVertical: 10,
  },
});

export default Deals;

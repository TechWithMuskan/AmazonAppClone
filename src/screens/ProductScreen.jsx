import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import PrimeLogo from '../assets/prime-logo.png';
import {getProductFromApi, getRating, getImgUrl} from '../utils/helper';

const ProductScreen = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductFromApi(setProduct);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style={styles.tagline}>
        Price and other details may vary based on product asize and colour.
      </Text>
      {product?.length &&
        product.map(item => (
          <View style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image
                style={styles.productImg}
                source={{uri: getImgUrl(item.image)}}
              />
            </View>
            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productName}</Text>
              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating}</Text>
                {getRating(item.rating)}
                <Text style={styles.ratingCount}>{item.ratingCount}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.price}>₹ {item.price}</Text>
                <Text style={styles.mrp}>M.R.P.</Text>
                <Text style={styles.crossout}>₹ {item.crossOutText}</Text>
              </View>
              <Text style={styles.cashback}>
                Up to 5% cashback with Amazon Pay Credit card
              </Text>
              <Image source={PrimeLogo} style={styles.logo} />
              <Text style={styles.cashback}>
                FREE Delivery by {item.deliveryBy}
              </Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  tagline: {
    fontSize: 11,
    color: 'grey',
  },
  productSection: {
    borderWidth: 1,
    borderColor: '#dddddd',
    flexDirection: 'row',
    marginVertical: 15,
  },
  productImgSection: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center',
  },
  productDetailSection: {
    width: '60%',
    padding: 10,
  },
  productImg: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
  },
  sponsored: {
    fontSize: 11,
    color: 'grey',
    marginBottom: 5,
  },
  productName: {
    fontSize: 12,
    color: 'black',
    lineHeight: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  rating: {
    fontSize: 10,
    color: '#017185',
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: '#017185',
    marginLeft: 5,
  },
  price: {
    fontSize: 16,
    color: '#000000',
  },
  mrp: {
    fontSize: 10,
    color: 'grey',
    marginHorizontal: 5,
  },
  crossout: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashback: {
    fontSize: 9,
    marginVertical: 2,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
});

export default ProductScreen;

import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import AmazonPay from '../assets/amazon-pay.png';
import SendMoney from '../assets/send-money.jpg';
import PayBills from '../assets/pay-bills.jpeg';
import ScanQR from '../assets/scan-qr.jpeg';
import {RecentSearchData} from '../data/RecentSearchData';

const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{paddingRight: 20}}>
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={AmazonPay} />
            <Text style={styles.title}>Amazon Pay</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={SendMoney} />
            <Text style={styles.title}>Send Money</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={ScanQR} />
            <Text style={styles.title}>Scan QR</Text>
          </View>
          <View style={styles.innerContainer}>
            <Image style={styles.imgStyle} source={PayBills} />
            <Text style={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map(item => (
        <View key={item.id} style={styles.outerContainer}>
          <Text style={styles.recentSearch}>{item.title}</Text>
          <Image source={item.image} style={styles.serviceImg} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: -20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    elevation: 5,
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center',
    paddingTop: 15,
  },
  title: {
    fontSize: 10,
    color: 'black',
    marginTop: 2,
  },
  serviceImg: {
    width: '100%',
    height: 130,
  },
  outerContainer: {
    backgroundColor: 'white',
    marginLeft: 8,
    borderRadius: 5,
    elevation: 5,
    padding: 5,
    width: 140,
  },
  recentSearch: {
    fontSize: 13,
    color: 'black',
    marginBottom: 8,
  },
});

export default Services;

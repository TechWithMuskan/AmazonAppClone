import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getCategoryFromApi, getImgUrl} from '../utils/helper';

const Category = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState();

  useEffect(() => {
    getCategoryFromApi(setCategory);
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.conatiner}>
      {category?.length &&
        category.map(item => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductScreen')}
            key={item.id}
            style={styles.category}>
            <Image
              source={{uri: getImgUrl(item.image)}}
              style={styles.imgStyle}
            />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: '#FFFFFFFF',
    padding: 10,
  },
  imgStyle: {
    height: 50,
    width: 50,
  },
  title: {
    fontSize: 10,
    color: '#2c4341',
  },
  category: {
    paddingHorizontal: 8,
    alignItems: 'center',
  },
});

export default Category;

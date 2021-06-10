import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

import lancarLogo from '../assets/images/lancartv-icon.png';

const Card = ({ type }) => {
  return (
    <View style={styles.container(type)}>
      {/* <Image style={styles.icon} source={lancarLogo} /> */}
      <Text style={styles.text}>Movies</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 66,
    paddingVertical: 'auto',
    backgroundColor: '#3834FF',
    width: 230,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: type === 'besar' ? 200 : 125,
  }),
  icon: {
    marginBottom: 30,
  },
  text: {
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 18,
    fontWeight: '700',
  },
});

import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import HomeHeader from '../components/HomeHeader';
import Card from '../components/Card';
import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HomeHeader name="home"></HomeHeader>
      <View style={styles.cards}>
        <Card type="besar"></Card>
        <Card></Card>
        <Card></Card>
      </View>
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <EditScreenInfo path="/screens/HomeScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingVertical: 21,
    paddingHorizontal: 18,
    backgroundColor: '#3C3A3A',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  cards: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#3C3A3A',
  },
  cardItem: {
    height: 185,
  },
});

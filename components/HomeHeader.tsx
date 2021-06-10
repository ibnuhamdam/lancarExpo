import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import lancarLogo from '../assets/images/lancartv-icon.png';
import userLogo from '../assets/images/user.png';
import videoLogo from '../assets/images/video.png';
import settingLogo from '../assets/images/setting.png';
import powerLogo from '../assets/images/power.png';

export default function HomeHeader({ name }: { name: string }) {
  if (name == 'home') {
    return (
      <View style={styles.container}>
        <Image style={styles.Logo} source={lancarLogo} />
        <View style={styles.date}>
          <Text style={styles.jam}>15:18</Text>
          <Text style={styles.tanggal}>June 10,2021</Text>
        </View>
        <View style={styles.icon}>
          <Image style={styles.iconUser} source={userLogo} />
          <Image style={styles.iconVideo} source={videoLogo} />
          <Image style={styles.iconSetting} source={settingLogo} />
          <Image style={styles.iconPower} source={powerLogo} />
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <Text>nope</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3C3A3A',
    flexDirection: 'row',
    textAlign: 'left',
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
  },
  Logo: {
    width: 80,
    height: 80,
  },
  date: {
    marginLeft: 180,
    backgroundColor: '#3C3A3A',
    flexDirection: 'row',
    alignItems: 'center',
  },
  jam: {
    fontWeight: '700',
    fontSize: 20,
    color: '#FFFFFF',
  },
  tanggal: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 14,
    color: '#FFF8F8',
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3C3A3A',
  },
  iconUser: {
    width: 20,
    height: 23,
    marginLeft: 32,
  },
  iconVideo: {
    width: 22,
    height: 18,
    marginLeft: 32,
  },
  iconSetting: {
    width: 22,
    height: 22,
    marginLeft: 32,
  },
  iconPower: {
    width: 27,
    height: 37,
    marginLeft: 32,
  },
});

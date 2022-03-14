/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#444444',
    height: 50,
  },

  text: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'MuseoSansCyrl_3',
  },
});

export default function Title() {
  let hamburger = 'https://images2.imgbox.com/4b/cd/y4e94iVm_o.jpg';

  return (
    <View style={styles.container}>
      <Image source={{uri: hamburger}} style={{width: 18, height: 18}} />
      <Text style={styles.text}>CONTROLE DE ESTOQUE</Text>
    </View>
  );
}

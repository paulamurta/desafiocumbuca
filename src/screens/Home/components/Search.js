import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

export default function Search() {
  let glass = 'https://images2.imgbox.com/bb/4d/pb0L6nEZ_o.jpg';
  const [searchingText, setSearchingText] = React.useState('');

  return (
    <View style={styles.container}>
      <Image source={{uri: glass}} style={styles.img} />
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Item"
        autoCorrect={true}
        value={searchingText}
        onChangeText={setSearchingText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#868686',
    width: 300,
    marginVertical: 20,
    marginLeft: 20,
  },

  input: {
    fontSize: 25,
    fontFamily: 'DistrictPro-Book',
    color: 'black',
  },

  img: {
    width: 35,
    height: 40,
    marginHorizontal: 10,
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Item(props) {
  const {id, name, quantity, value} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.id}>Id:{id}</Text>

      <View style={styles.containerInfo}>
        <View style={styles.containerName}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{quantity}x</Text>
        </View>

        <View style={styles.containerValue}>
          <Text style={styles.text}>Valor: R${value}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#868686',
    margin: 20,
    backgroundColor: '#e8e8e8',
  },

  id: {
    fontSize: 20,
    marginVertical: 30,
    marginHorizontal: 20,
    fontFamily: 'MuseoSansCyrl_3',
    color: '#444444',
  },

  containerInfo: {
    borderLeftWidth: 1,
    flex: 1,
    paddingHorizontal: 10,
  },

  containerName: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  containerValue: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    fontFamily: 'MuseoSansCyrl_3',
  },
});

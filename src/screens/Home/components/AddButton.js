/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Alert, Image, Pressable} from 'react-native';

export default function AddButton() {
  let addbutton = 'https://images2.imgbox.com/e9/84/ack1EWyZ_o.jpg';
  const onPressAdd = () => {
    Alert.alert('Apertou o botão de add');
  };

  return (
    <Pressable onPress={onPressAdd}>
      <Image source={{uri: addbutton}} style={{width: 30, height: 30}} />
    </Pressable>
  );
}

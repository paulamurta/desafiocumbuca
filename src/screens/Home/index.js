import React from 'react';
import {View} from 'react-native';
import Title from './components/Title';
import Header from './components/Header';
import List from './components/List';

// import { Container } from './styles';

export const PRODUCTS = [
  {
    id: 289,
    name: 'Hand Grip Masculina - Marinho',
    value: 160,
    quantity: 2,
  },
  {
    id: 293,
    name: 'Hand Grip Feminina - Vermelha',
    value: 160,
    quantity: 8,
  },
  {
    id: 124,
    name: 'Munhequeira Unissex',
    value: 45,
    quantity: 2,
  },
];

const Home = () => {
  return (
    <View>
      <Title />
      <Header />
      <List products={PRODUCTS} />
    </View>
  );
};

export default Home;

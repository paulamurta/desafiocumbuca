import React from 'react';
import {ScrollView} from 'react-native';
import Item from './item';

export default function List({products = []}) {
  return (
    <ScrollView>
      {products.map(product => (
        <Item
          id={product.id}
          name={product.name}
          quantity={product.quantity}
          value={product.value}
        />
      ))}
    </ScrollView>
  );
}

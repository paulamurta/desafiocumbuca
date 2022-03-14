import React from 'react';
import {View, StyleSheet} from 'react-native';
import Search from './Search';
import AddButton from './AddButton';

// import { Container } from './styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Search />
      <AddButton />
    </View>
  );
};

export default Header;

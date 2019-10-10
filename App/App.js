import React from 'react';
import {StyleSheet} from 'react-native';
import ShoppingCart from './ShoppingCart';
import {Provider} from 'react-redux';
import store from './store';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <ShoppingCart />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});
import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Store} from './src/Store/Store';
import {Provider} from 'react-redux';
import Root from './Root';
import BackgroundPurple from './src/Component/Background/BackgroundPurple';

const App = () => {
  const isloading = true;

  return (
    <Provider store={Store}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#263765"
        translucent={false}
      />
      <Root />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

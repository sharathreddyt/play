import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import reducers from './reducers/index';
import StachNavigator from './navigation/RootNavigation';
import RootNavigation from './navigation/RootNavigation';

import { incrementVisits } from './actions/index';

import createStore from './reducers/configureStore';

export default class App extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.store.dispatch(incrementVisits());
    }, 1000);
  }

  componentWillMount() {
    this.store = createStore().store;
    this.persistor = createStore().persistor;
    this.addListener = createStore().addListener;
  }
  render() {
    return (
      <Provider store={this.store}>
        <PersistGate loading={null} persistor={this.persistor}>
          <RootNavigation addListener={this.addListener} />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Util } from 'expo';

import Loader from './Loader';

export default class Mask extends React.Component {
  state = {
    appReady: false,
    rootKey: Math.random(),
  };

  constructor() {
    super();

    this._image = require('../assets/do-logo_Intro.png');
    //   'http://communicasound.com/wp-content/uploads/2017/02/Twitter-Logo-PNG-1.png';
  }

  componentDidMount() {
    this.resetAnimation();
  }

  resetAnimation() {
    this.setState({
      appReady: false,
      rootKey: Math.random(),
    });

    setTimeout(() => {
      this.setState({
        appReady: true,
      });
    }, 1000);
  }

  render() {
    return (
      <View key={this.state.rootKey} style={styles.root}>
        <Loader
          isLoaded={this.state.appReady}
          imageSource={this._image}
          backgroundStyle={styles.loadingBackgroundStyle}
        >
          <View style={styles.container}>
            <Button
              onPress={() => {
                this.resetAnimation();
              }}
              title="See it again"
            />
          </View>
        </Loader>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingBackgroundStyle: {
    backgroundColor: 'rgba(125, 125, 255, 1)',
  },
});

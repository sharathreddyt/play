import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

class ScreenOne extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>ScreenOne</Text>
        <Text>{this.props.data.visits}</Text>

        <Button
          title="go to screen2"
          onPress={() => {
            this.props.navigation.navigate('ScreenTwo');
          }}
        />
      </View>
    );
  }
}

ScreenOne.propTypes = {};

const styles = StyleSheet.create({});

export default connect(state => ({
  data: state.data,
}))(ScreenOne);

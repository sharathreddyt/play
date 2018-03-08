import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import ScreenOne from '../components/ScreenOne';
import ScreenTwo from '../components/ScreenTwo';
import ScreenThree from '../components/ScreenThree';

export const RootNavigator = StackNavigator({
  ScreenOne: {
    screen: ScreenOne,
  },
  ScreenTwo: {
    screen: ScreenTwo,
  },
  ScreenThree: {
    screen: ScreenThree,
  },
});

class RootNavigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dispatch, nav, addListener } = this.props;
    return (
      <RootNavigator
        navigation={addNavigationHelpers({ state: nav, dispatch, addListener })}
      />
    );
  }
}

export default connect(
  state => {
    return {
      nav: state.nav,
    };
  },
  dispatch => ({
    dispatch,
  }),
)(RootNavigation);

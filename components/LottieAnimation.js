import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;

export default class LottieAnimation extends React.Component {
  state = {
    animation: null,
  };

  componentDidMount() {
    // this._playAnimation();
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <TouchableWithoutFeedback onPress={this._playAnimation}>
          <Lottie
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 200,
              height: 200,
              backgroundColor: '#eee',
            }}
            source={this.state.animation}
            loop={false}
          />
          {/* <Image
            style={{ height: 200, width: 200 }}
            source={require('../assets/heart-icon.png')}
          /> */}
        </TouchableWithoutFeedback>
      </View>
    );
  }

  _playAnimation = () => {
    if (!this.state.animation) {
      this._loadAnimationAsync();
    } else {
      this.animation.reset();
      this.animation.play();
    }
  };

  _loadAnimationAsync = async () => {
    let result = require('../assets/heart.json');
    this.setState({ animation: result }, this._playAnimation);
  };
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});

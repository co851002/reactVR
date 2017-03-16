import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

class reactVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('3.jpg')}/>
        <Text
          style={{
            backgroundColor: '#000',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -20]}],
          }}>
          centered text on enter (20m)
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('reactVR', () => reactVR);

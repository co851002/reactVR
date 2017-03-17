import React from 'react';

import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
  Animated,
  Video
} from 'react-vr';

class reactVR extends React.Component {
  constructor(props) {
       super(props);

  }
  componentDidMount() {

  }
  render() {
   return (
     <View>
       <Pano source={asset('3.jpg')}/>
       <Text
         style={{
           backgroundColor: 'rgba(0, 0, 0, 0.1)',
           fontSize: 0.8,
           layoutOrigin: [0.5, 0.5],
           paddingLeft: 0.2,
           paddingRight: 0.2,
           textAlign: 'center',
           textAlignVertical: 'center',
           transform: [{translate: [0, 4, -15]}],
         }}>
         centered text on enter (15m 4h)
       </Text>
     </View>
   );
  }
};

AppRegistry.registerComponent('reactVR', () => reactVR);

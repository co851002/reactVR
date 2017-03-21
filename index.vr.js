import React from 'react';
import TimerMixin from 'react-timer-mixin';

import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  Image,
  View,
  Animated,
  Video
} from 'react-vr';


class reactVR extends React.Component {
  constructor(props) {
    super(props);
    this.state      = {rotation: 0};
    this.lastUpdate = Date.now();
    this.rotate     = this.rotate.bind(this);

  }

  rotate() {
    const now       = Date.now();
    const delta     = now - this.lastUpdate;
    this.lastUpdate = now;
    this.setState({rotation: this.state.rotation + 0.2});
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  // mixins: [TimerMixin]
  componentDidMount() {
    setTimeout(() => {
      this.rotate()
      console.log('reset view!')
    }, 5000);
    setTimeout(() => {
      this.setState({rotate:0})
      console.log('reset view!')
    }, 5000);
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  render() {
   return (
     <View >
       <Pano source={asset('3.jpg')} style={{
         transform: [
           {translate: [0, 0, 0]},
           {rotateY : this.state.rotation},
           {rotateX : 0}
         ],
       }}/>
       <Image source={asset('ship.png')}
       style={{
         height: 3,
         width: 5,
         layoutOrigin: [0.5,0.5],
         paddingLeft: 0.2,
         paddingRight: 0.2,
         transform: [{translate: [0, 7.5, -18]}],
       }}/>
       <Image source={asset('logo.png')}
       style={{
         height: 5,
         width: 8,
         layoutOrigin: [0.5,0.5],
         paddingLeft: 0.2,
         paddingRight: 0.2,
         transform: [{translate: [0, 7.5, -15]}],
       }}/>
       <Text
         style={{
           fontSize: 0.6,
           layoutOrigin: [0.5, 0.5],
           paddingLeft: 0.2,
           paddingRight: 0.2,
           color: '#fff',
           textAlign: 'center',
           textAlignVertical: 'center',
           transform: [{translate: [0, 11.5, -15]}],
         }}>
         DISCOVER YOUR DESTINATION
       </Text>
     </View>
   );
  }
};

AppRegistry.registerComponent('reactVR', () => reactVR);

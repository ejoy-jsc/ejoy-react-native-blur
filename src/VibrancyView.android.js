import React from 'react';
import { View } from 'react-native';

class VibrancyView extends React.Component {
  
  constructor(props){
    console.warn("VibrancyView is not implemented on Android");
  }

  render(){
    return <View {...this.props} />
  }

}

module.exports = VibrancyView

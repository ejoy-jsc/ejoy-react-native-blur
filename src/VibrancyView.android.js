import React from 'react';
import ReactNative from 'react-native';

class VibrancyView extends ReactNative.View {
  
  constructor(props){
    super(props)
    console.warn("VibrancyView is not implemented on Android");
  }

}

module.exports = VibrancyView

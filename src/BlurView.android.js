import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { View, ViewPropTypes, StyleSheet } from 'react-native';




const OVERLAY_COLORS = {
  light: 'rgba(255, 255, 255, 0.2)',
  xlight: 'rgba(255, 255, 255, 0.75)',
  dark: 'rgba(16, 12, 12, 0.64)',
};

const styles = StyleSheet.create({
  light: {backgroundColor: OVERLAY_COLORS.light },
  xlight: {backgroundColor: OVERLAY_COLORS.xlight },
  dark: {backgroundColor: OVERLAY_COLORS.dark },
})

const dStyles = StyleSheet.create({
  light: {backgroundColor: '#EEEEEE' },
  xlight: {backgroundColor: '#FFFFFF' },
  dark: {backgroundColor: '#000000' },
})


class BlurView extends PureComponent {

  render() {

    const {  style, disabled } = this.props;

    const iStyle = disabled ?  (dStyles[this.props.blurType] || dStyles.xlight) 
    :  (styles[this.props.blurType] || styles.xlight) 

    return (
      <View
        {...this.props}
        style={[ iStyle, style ]}
      />
    );
  }
}

BlurView.propTypes = {
  ...(ViewPropTypes || View.propTypes),
  blurType: PropTypes.oneOf(['dark', 'light', 'xlight']),
  disabled: PropTypes.bool,
};

BlurView.defaultProps = {
  blurType: 'dark',
  disabled: true,
};


export default BlurView;

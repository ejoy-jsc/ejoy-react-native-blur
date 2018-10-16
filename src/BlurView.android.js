import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';


const OVERLAY_COLORS = {
  light: 'rgba(255, 255, 255, 0.2)',
  xlight: 'rgba(255, 255, 255, 0.75)',
  dark: 'rgba(16, 12, 12, 0.64)',
};

const styles = StyleSheet.create({
  light: { backgroundColor: OVERLAY_COLORS.light },
  xlight: { backgroundColor: OVERLAY_COLORS.xlight },
  dark: { backgroundColor: OVERLAY_COLORS.dark },
});

const dStyles = StyleSheet.create({
  light: { backgroundColor: '#EEEEEE' },
  xlight: { backgroundColor: '#FFFFFF' },
  dark: { backgroundColor: '#000000' },
});


export default class BlurView extends React.PureComponent {

  static propTypes = {
    blurType: PropTypes.oneOf([ 'dark', 'light', 'xlight' ]),
    disabled: PropTypes.bool,
    style: PropTypes.any,
  };
  
  static defaultProps = {
    blurType: 'dark',
    disabled: true,
  };

    render(){

      const { blurType, disabled, style } = this.props;

      const iStyle = disabled ? (dStyles[blurType] || dStyles.xlight)
      : (styles[blurType] || styles.xlight);

      return (
        <View
          {...this.props}
          style={[ iStyle, style ]}
        />
      );
    }
}

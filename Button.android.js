import React, { Component } from 'react';
import {
  TouchableNativeFeedback,
  View,
} from 'react-native';

class Button extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackground()}
      {...this.props}
    >
      {props.children}
    </TouchableNativeFeedback>;
  }
}

module.exports = Button;

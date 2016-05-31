import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';

class Button extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return <TouchableOpacity  {...this.props}>
      {props.children}
    </TouchableOpacity>;
  }
}

module.exports = Button;

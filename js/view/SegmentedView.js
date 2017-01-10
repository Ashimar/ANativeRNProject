import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import Segmented from 'react-native-tab-navigator'

export default class SegmentedView extends Component {
  constructor() {
    super()
  }

  render (){
    return (
      <View style = {styles.constainer}>
        <
        <View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  constainer: {
    margin: 10,
    backgroundColor: '#9e9e9e',
    borderColor: '#9e9e9e',
    borderWidth: 0.5,
    borderRadius: 10,
    height:150,
  }
});

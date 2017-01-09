import React ,{ Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class RecommendPage extends Component {
  constructor() {
    super()
  }
  render (){
    return (
      <View style = {styles.constainer}
      >

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
  },
});

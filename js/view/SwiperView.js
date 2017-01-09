/**
 * 图片轮播的View
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableHighlight,

} from 'react-native';

var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
// 1，引入第三方组件
import Swiper from 'react-native-swiper';
import PhotoView from 'react-native-photo-view';
import PhotoViewPage from './PhotoViewPage';

// 2,准备好轮播图片的字图案
var images = [
  'http://oi653ezan.bkt.clouddn.com/banner1.png',
  'http://oi653ezan.bkt.clouddn.com/banner2.png',
  'http://oi653ezan.bkt.clouddn.com/banner3.png',
];
export default class SwiperView extends Component {
  constructor(){
    super()

  }

  showPhotoView (){
    this.props.navigator.push({
        component:PhotoViewPage,
        passProps:{
          'images':images,
        },
        onPress:this.onPress,
        type:'Normal',
      }
    )
  }

  renderImg (){
    var imageViews = [];  // 定义一个imageView数组

    for (var i = 0; i < images.length; i++) {

      imageViews.push(  // 数组增加 元素
        <TouchableHighlight
          key = {i}
          onPress = {() => this.showPhotoView()}
          style = {{flex:1}}
        >
          <Image
            style = {{flex:1}}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            source = {{uri:images[i]}}
          />
        </TouchableHighlight>
      );
      console.log('----'+images[i]);
    }
    console.log('imageViews'+imageViews);
    return imageViews
  }

  render(){
    return (

        <Swiper
          height = {ScreenHeight*75/284}  // 高度
          paginationStyle = {{bottom:10}} // 指示器距离底部的距离
          autoplay = {true}               // 自动滚动
          // 未选中的点的状态
          dot = {<View style={{width:3,height:3,backgroundColor:'white',opacity:0.5,marginLeft:6}} />}
          // 选中的点的状态
          activeDot = {<View style = {{width:5,height:5,backgroundColor:'white',marginLeft:6}} />}
        >
          {this.renderImg()}
        </Swiper>

    );
  }
}

const styles = ({
  constructor: {
    marginTop:64,
    flex:1,
  },

});

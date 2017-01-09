import React,{ Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator' // 第三方底部导航控件
import MyPage from './MyPage'
import FactoryPage from './FactoryPage'
import RecommendPage from './RecommendPage'

export var FLAG_TAB = {
    flag_factoryTab: 'flag_factoryTab', flag_recommendTab: 'flag_recommendTab',
    flag_myTab: 'flag_myTab'
}

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.subscribers = [];
    // 设置tab 的 page
    let selectedTab = this.props.selectedTab ? this.props.selectedTab : FLAG_TAB.flag_factoryTab;
    this.state = {
      selectedTab: selectedTab,
    }
  }

  onSelected(object) {

    if (object !== this.state.selectedTab) {
            this.subscribers.forEach((item, index, arr)=> {
                if (typeof(item) == 'function')item(this.state.selectedTab, object);
            })
        }
        if(object===FLAG_TAB.flag_popularTab)this.changedValues.favorite.popularChange=false;
        if(object===FLAG_TAB.flag_trendingTab)this.changedValues.favorite.trendingChange=false;

        this.setState({
            selectedTab: object,
        })
  }

  /**
   *  _renderTab 方法
   *
   * @param Component   组件
   * @param selectedTab 选择的tab
   * @param title       标题
   * @param renderIcon  图标
   */
  _renderTab(Component, selectedTab, title, renderIcon, renderSelectedIcon) {
    return (
        <TabNavigator.Item
          selected = {this.state.selectedTab === selectedTab} // 设置对应选中的 tab
          title = {title} // 设置标题
          selectedTitleStyle = {styles.selectedTitleStyle}
          renderIcon = {()=> <Image style = {styles.tabBarIcon} // 设置图标
                                    source = {renderIcon}/>}
          renderSelectedIcon = {() => <Image style = {styles.tabBarSelectIcon}    // 设置选中的图标
                                             source = {renderIcon} />}
          onPress = {()=>this.onSelected(selectedTab)}
        >
          <Component {...this.props} homeComponent={this} />
        </TabNavigator.Item>
    );
  }

  render (){
      return (
         <View style={styles.container}>
           <TabNavigator  // 渲染 tabnavigator
             tabBarStyle = {{opacity:0.9}}  // tabbar设置样式
             sceneStyle={{paddingBottom:0}} // 设置场景的样式

            >
               {this._renderTab(FactoryPage, FLAG_TAB.flag_factoryTab, '厂房在线', require('./img/nav_home_normal.png'), require('./img/nav_home_pressed.png'))}
               {this._renderTab(RecommendPage, FLAG_TAB.flag_recommendTab,'热门推荐', require('./img/nav_hot_normal.png'), require('./img/nav_hot_pressed.png'))}
               {this._renderTab(MyPage, FLAG_TAB.flag_myTab, '我的', require('./img/nav_my_normal.png'), require('./img/nav_my_pressed.png'))}
             </TabNavigator>
         </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
  },
  tabBarIcon:{
    width:26,
    height:26,
    resizeMode: 'contain',
  },
  tabBarSelectIcon:{
    width:26,
    height:26,
    resizeMode: 'contain',
    tintColor: '#4caf50',
  },
  selectedTitleStyle :{
    color:'#4caf50',
  },
})

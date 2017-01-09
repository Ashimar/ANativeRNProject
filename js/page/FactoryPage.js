import React, {Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  Button,
  TextInput,
  Dimensions,
  Image,
  ListView,
  RefreshControl,
} from 'react-native';

var ScreenWidth = Dimensions.get('window').width;
var sectionName = ['第一个section','第二个section'];
export default class FactoryPage extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource(
          {
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
          }
      );
    
    this.state = {
      dataSource: ds,
      data:{a:['aa','ab'],b:['bb','bc'],c:['cb','cc']},
      isRefreshing:false,
    };
  }

  /*
  *  数据源
  */
  _genRows(){
    const dataBlob = {'AAA':['颜色','图片','处理触摸','动画','无障碍功能','定时器','直接操作'],'BBB' :['调试','自动化测试' ,'JavaScript 环境','性能','升级','特定平台代码','手势响应系统']};
    return dataBlob;
  }

  // 绘制 row
  _renderRow(rowData, sectionID, rowID) {

    // if (sectionID === 'AAA') {
      return (
      
        <View style={styles.rowView}>
          <Text style={styles.rowText}>{rowData+ '   ' + rowID+'   '+ sectionID}</Text>
        </View>
      
      );
    // }

    
  }

  _renderSectionHeader(sectionData,sectionId){
    return (
      <View style={{backgroundColor:'orange',height:30,}}>
        <Text>{'我是ListView 的 第' + sectionId +'个section'}</Text>
      </View>
    );
  }

  _renderHeader(sectionData,sectionId){
    return (
      <View style={{backgroundColor:'pink',height:50,}}>
        <Text>ListView 的表头</Text>
      </View>

    );
  }
  _renderFooter(){
    return (
      <View style={{backgroundColor:'green',height:50,}}>
        <Text>ListView 的表尾</Text>
      </View>

    );
  }
  selectCity(){
    alert('选择城市');
  }

  render (){
    // 导航栏 的设置
    let navigationBar = 
      <View style = {styles.navigatorbgView}>
        <View style={{height:20}}/>
        <View style={styles.navigationbar}>
          <Button 
            onPress = {() => this.selectCity()}
            title = '正在定位'
            color = 'black' 
            style = {styles.leftButton}
          />
          <TextInput
            style = {styles.textInputStyle}
            placeholder = "请输入"
            onSubmitEditing={event => alert(event.nativeEvent.text)}
            // editable=false
          >
            <Image source={require('./img/search.png')} style={styles.searchImage}/>
          </TextInput>
          
        </View>
      </View>;

    return (
      <View style = {styles.container}
        >
       {navigationBar}
       <ListView
        dataSource={this.state.dataSource.cloneWithRowsAndSections(this.state.data)}
        renderRow={(rowData,sectionID,rowId) => this._renderRow(rowData,sectionID,rowId)}
        renderSectionHeader={(sectionData,sectionId) => this._renderSectionHeader(sectionData,sectionId)}
        renderHeader={(sectionData,sectionId) => this._renderHeader(sectionData,sectionId)}
        renderFooter={this._renderFooter.bind(this)}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            // onRefresh={this._onRefresh}
            tintColor="#ff0000"
            title="Loading..."
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />

        }
        
        >
       </ListView>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'blue',
  },

  navigatorbgView :{
    backgroundColor: 'white',
    height: 64,
  },
  navigationbar: {
    flexDirection: 'row',
    height: 44,
  },
  leftButton: {
    fontSize:4,
    flex:1,
    alignItems:'center',
    textAlign:'left',
  },
  textInputStyle: {
    flex:5,
    borderColor:'gray',
    borderWidth:1,
    height: 30,
    marginTop: 7,
    marginRight: 18,
    borderRadius:15,
    paddingLeft:30,
  },
  searchImage:{
    width: 15,
    height: 15,
    marginTop: 6,
    marginLeft: -15-15/2,
  },
  rowView:{
    // justifyContent: 'center',
    padding: 5,
    margin: 3,
    flex:1,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderColor: '#CCC'
  },
});

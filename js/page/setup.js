import React, { Component } from 'react';
import {
  Navigator,        // 导入需要用到的 组建
} from 'react-native'

// 导入需要用到的 js 文件
import WelcomePage from './WelcomePage'     

function setup(){

    // RepositoryUtils.init(true);

    class Root extends Component {

        constructor(props) {
            super(props);
            this.state = {
            };
        }
        _renderScene(route, navigator) {
            let Component = route.component;
            
            return (
                <Component {...route.params} navigator={navigator}/>
            );
        }
        render() {
            return (
                <Navigator
                    initialRoute={{
                        name: 'WelcomePage',
                        component:WelcomePage
                    }}

                    renderScene={(e, i)=>this._renderScene(e, i)}
                    // navigationBar={<Navigator.NavigationBar style={{backgroundColor:'green'}}/>}
                />
            );
        }
    }

    return <Root/>;
}

// 输出模块
module.exports = setup;

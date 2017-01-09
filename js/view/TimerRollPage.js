import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Animated,
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

export default class TimerRollPage extends Component {

	constructor(props){
	    super(props);
			this.move_y = new Animated.Value(1);
			this.opacity_view = new Animated.Value(1);

		console.log("初始化方法");
	}

	componentDidMount () {
		// 开启定时器，每秒走 方法
		// this.interval = setInterval(() => {this.updateFrame()},1000);
		this.animate()
	}

	componentWillUnmount (){
		console.log("将要离开");
		// this.interval && clearInterval(this.interval);	// 清除计时器

	}

	animate () {
		console.log("开始动画");
		this.opacity_view.setValue(1);
		this.move_y.setValue(1);
		Animated.parallel([            // 同时执行动画
			Animated.timing(this.opacity_view,{
				toValue:0,
				duration: 1000,
			}),
			Animated.timing(this.move_y,{
				toValue:0,
				duration: 1000,
			}),
		]).start(()=>this.animate())
}

	render (){

		const moveY = this.move_y.interpolate({
			inputRange:[0,1],
			outputRange:[-8,6]
		})
		const alpha = this.opacity_view.interpolate({
			inputRange:[0,0.5,1],
			outputRange:[0,1,0],
		})

		return (

			<View style = {styles.container}>
				<View style = {styles.topView} >

					<Image	// 图片
						source = {require('./img/home_infomation.png')}
						style = {{width: ScreenWidth/6-24, height: ScreenWidth/6-24,margin:12}} />

					<View style = {{width: 0.5, height: ScreenWidth/6-22, backgroundColor: '#e6e6e6', marginTop: 11}} />

					<Animated.View		// 动画view
						style = {{
							opacity: alpha,
							height: ScreenWidth/6,
							width: ScreenWidth*2/3,
							justifyContent: 'space-around',
							transform: [
								{translateY:moveY},
							],
							marginLeft: 9,
							marginRight: 13,
						}}
					>
						<View style = {styles.rowView}>
							<Text style = {styles.textRed}> 南城 </Text>
							<Text
								numberOfLines = {1}
								ellipsizeMode = 'tail'	// 超过文本款的文字用省略在尾部
								style = {styles.textBlack}
							>南城靠牛山产业园厂房出租10000方卡搜救偶爱京东方叫我</Text>
						</View>

						<View style = {styles.rowView}>
							<Text style = {styles.textRed}> 樟木头 </Text>
							<Text
								ellipsizeMode = 'tail'
								numberOfLines = {1}
								style = {styles.textBlack}
							>樟木头厂房 4500平方 原房东标准独家空间法搜</Text>
						</View>

					</Animated.View>
				</View>

				<View style = {{width: ScreenWidth, height: 0.5, backgroundColor: '#e6e6e6'}} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		height: ScreenWidth/6 + 1,
	},
	topView: {
		flexDirection: 'row',
		height: ScreenWidth/6,
	},

	textBlack: {
		fontSize: 12,
		color: '#424242',
		marginLeft: 9,
	},
	textRed: {
		fontSize: 10,
		color: '#df3d3f',
		borderRadius: 2,
		borderColor : '#df3d3f',
		borderWidth: 0.5,
	},
	rowView: {
		flexDirection: 'row',
	}
});

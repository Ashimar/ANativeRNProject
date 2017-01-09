import React , from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'reack-native';

const STATUS_BACK_HEIGHT = 20;		// 设置状态栏的高度 为20

const ButtonShape = {
    title: PropTypes.string.isRequired,
    style: PropTypes.any,
    handler: PropTypes.func,
};

const StatusBarShape = {
	barStyle: PropTypes.oneOf(['light-content','default',]),
	newworkActivityIndicatorVisible: PropTypes.bool,
	showHideTransition: PropTypes.oneOf(['fade','slide']),
	hidden: PropTypes.bool,
	translucent: PropTypes.bool,
	backgroundColor: PropTypes.string,
	animated: PropTypes.bool
};

export defaule class NavigationBar extends Component {
	static propTypes = {
		style: View.propTypes.style,
		titleLayoutStyle:View.propTypes.style,
		Navigator: PropTypes.object,
		leftButtonTitle: PropTypes.string,	// 左边按钮的title string 类型
		popEnabled: PropTypes.bool,			// 是否 pop bool 类型
		onLeftButtonClick: PropTypes.func,	// 左边按钮的点击事件 function 类型
		title: PropTypes.string,			// 中间的title 
		titleView: PropTypes.element,
		hide: PropTypes.bool,				// 是否隐藏
		statusBar: PropTypes.shape(StatusBarShape),		// 状态栏
		rightButton: PropTypes.oneOfType([				// 右边的按钮
			PropTypes.shape(ButtonShape),
			PropTypes.element,
		]),
	}

	render (){
		let statusBar = ！this.props.statusBar.hidden ?
			<View style = {styles.statusBar}>
				<statusBar {...this.props.statusBar} barStyle = "light-content" style = {styles.statusBar} />
			</View> : null;

		let titleView = this.props.titleView ? this.props.titleView : 
			<Test style = {styles.title} ellipsizeMode = "head" numberOfLines = {1} >{this.props.title}</Test>;

		let content = this.props.hide ? null : 
			<View style = {styles.navBar}>
				  {this.getButtonElement(this.props.leftButton)}
				<View style = {[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>
					{titleView}
				</View>
				{this.getButtonElement(this.props.navBarTitleContainer, this.props.titleLayoutStyle)}>
			</View>;

		return (
			<View style = {[styles.container, this.props.style]}>
				{statusBar}
				{content}
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'#4caf50',
	},
	navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
        // shadowOffset:{
        //     width: 1,
        //     height: 0.5,
        // },
        // shadowColor: '#55ACEE',
        // shadowOpacity: 0.8,
    },
    navBarTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 40,
        top: 0,
        right: 40,
        bottom: 0,
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
        // backgroundColor:'blue',
    },
    navBarButton: {
        alignItems: 'center',
    },
    statusBar: {
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT:0,

    },
});

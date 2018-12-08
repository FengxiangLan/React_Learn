import React, { Component, Fragment} from 'react';
import { CSSTransition } from 'react-transition-group';
import "./style.css";
// import {Component} from 'react';
// 等价于
// import React from 'react';
// const Component = React.Component

// 组件

// 普通的js语法渲染HTML通常会返回一个字符串return “ <div>hello world</div>”
// 但jsx语法不需要
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true
		};

		this.handleToggle = this.handleToggle.bind(this);
	
	}

	render() {
		return (
			// <div> 是jsx语法，所以需要引入React
			<Fragment>
				<CSSTransition
					in = {this.state.show}
					timeout = {1000}
					classNames = "fade"
					unmountOnExit
					onEntering = {(el) => {el.style.color = "red"}}
					onEntered = {(el) => {el.style.color = "blue"}}
					appear = {true}
				>
					<div>  
						hello world
					</div>
				</CSSTransition>
				<button onClick = {this.handleToggle}>toggole</button>
			</Fragment>
		);
	}

	handleToggle() {
		this.setState({
			show: this.state.show ? false : true
		});
	}
}

export default App;

// in：切换状态时所用的值
// timeout：延时
// classNames：所应用样式的前缀
// unmountOnExit：消失时移除组件
// onEntered：进入动作完成后执行的函数
// appear：刚加载时是否使用动画
// https://www.jianshu.com/p/6bfcbd4ec415
import React, { Component, Fragment} from "react";
import TodoItem from "./TodoItem"
// import axios from "axios"
import "./style.css";


class TodoList extends Component {
	// 构造函数，执行优先级最高
	// 接收props作为参数
	constructor(props) {
		// 调用父类的构造函数
		super(props);
		// 将数据定义在this.state中
		this.state = {
			inputValue: "",
			list: []
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		this.getTodoItem = this.getTodoItem.bind(this);
	}

	render() {
		//render() 返回的元素必须被包含在一个大的组件里，如果出现两个外围标签就会报错
		return (
			// 占位符
			<Fragment>
				<div>
					<label htmlFor = "insertArea">Input Content&nbsp;&nbsp;</label>
					{/*this is a input*/}
					<input
						id = "insertArea"
						className = "input"
						value = {this.state.inputValue}
						onChange = {this.handleInputChange}
					/>&nbsp;&nbsp;
					<button onClick = {this.handleBtnClick}>Submit</button>
				</div>

				<ul>{ this.getTodoItem() }</ul>
			</Fragment>
		);
	}

	// componentDidMount() {
	// 	// Ajax请求
	// 	axios.get('/todolist')
	// 		.then(() => {alert("success")})
	// 		.catch(() => {alert("fail")})
	// }

	getTodoItem() {
		return (
			this.state.list.map((item, index) => {
				return (
						<TodoItem
							key = {index}
							content = {item} 
							index = {index}
							deleteItem = {this.handleItemDelete}
						/>
				);
			})			
		);		
	}

	handleInputChange(e) {
		const value = e.target.value;
		this.setState(() => {
			return ({
				inputValue: value
			});
		});
		// this.setState({
		// 	inputValue: e.target.value
		// })
	}

	handleBtnClick() {
		this.setState((prevState) => {
			return ({
				list: [...prevState.list, prevState.inputValue],
				inputValue: ""
			});
		});
	}

	handleItemDelete(index) {
		this.setState((prevState) => {
			const list = [...prevState.list];
			list.splice(index, 1);
			return ({
				list: list
			});
		});
	}
}

// 导出组件
export default TodoList;


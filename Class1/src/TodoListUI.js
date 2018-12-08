import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';
//无状态组件可以替代一个只有render函数的组件，这样性能会有所提高 
const TodoListUI = (props) => {
	return (
		<div style = {{marginTop: "10px", marginLeft: "10px"}}>
			<div>
				<Input 
					value = {props.inputValue} 
					placeholder = "Todo Info" 
					style = {{width: "300px", marginRight: "10px"}}
					onChange = {props.handleInputChange}
				/>
				<Button type = "primary" onClick = {props.handleBtnClick}>Submit</Button>
			</div>
			<List
				style = {{marginTop: "10px", width: "300px"}}
				bordered
				dataSource = {props.list}
				renderItem = {(item, index) => (<List.Item onClick = {(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
			/>
		</div> 
	);
}
// class TodoListUI extends Component {
// 	render() {
// 		return (
// 			<div style = {{marginTop: "10px", marginLeft: "10px"}}>
// 				<div>
// 					<Input 
// 						value = {this.props.inputValue} 
// 						placeholder = "Todo Info" 
// 						style = {{width: "300px", marginRight: "10px"}}
// 						onChange = {this.props.handleInputChange}
// 					/>
// 					<Button type = "primary" onClick = {this.props.handleBtnClick}>Submit</Button>
// 				</div>
// 				<List
// 					style = {{marginTop: "10px", width: "300px"}}
// 					bordered
// 					dataSource = {this.props.list}
// 					renderItem = {(item, index) => (<List.Item onClick = {(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
// 				/>
// 			</div>  
// 		);
// 	}
// }

export default TodoListUI;
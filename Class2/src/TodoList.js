import React, { Component } from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
	const { inputValue, changeInputValue, handleClick, handleDelete, list } = props;
	return (
		<div>
			<div>
				<input value = {inputValue} onChange = {changeInputValue}/>
				<button onClick = {handleClick}>Submit</button>
			</div>
			<ul>
				{
					list.map((item, index) => {
						return <li onClick = {(index) => {handleDelete(index)}} key = {index}>{item}</li>
					})
				}
			</ul>
		</div>
	);
}
// class TodoList extends Component {
// 	render() {
// 		const { inputValue, changeInputValue, handleClick, handleDelete, list } = this.props
// 		return (
// 			<div>
// 				<div>
// 					<input value = {inputValue} onChange = {changeInputValue}/>
// 					<button onClick = {handleClick}>Submit</button>
// 				</div>
// 				<ul>
// 					{
// 						list.map((item, index) => {
// 							return <li onClick = {(index) => {handleDelete(index)}} key = {index}>{item}</li>
// 						})
// 					}
// 				</ul>
// 			</div>
// 		);
// 	}
// }

const mapStateToProps = (state) => {
	return {
		inputValue: state.inputValue,
		list: state.list
	}
};

const mapDispatchToPros = (dispactch) => {
	return {
		changeInputValue(e) {
			const action = {
				type: 'change_input_value',
				value: e.target.value
			};
			dispactch(action);
		},

		handleClick() {
			const action = {
				type: 'add_item'
			};
			dispactch(action);
		},

		handleDelete(index) {
			const action = {
				type: 'delete_item',
				index: index
			};
			dispactch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToPros)(TodoList);
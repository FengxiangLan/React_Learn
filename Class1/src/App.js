import React, { Component, Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./style.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		};

		this.handleAddItem = this.handleAddItem.bind(this);
	
	}

	render() {
		return (
			// <div> 是jsx语法，所以需要引入React
			<Fragment>
				<TransitionGroup
					
				>
				{
					this.state.list.map((item, index) => {
						return(
							<CSSTransition
							 	key = {index}
								timeout = {1000}
								classNames = "fade"
								unmountOnExit
								onEntering = {(el) => {el.style.color = "red"}}
								onEntered = {(el) => {el.style.color = "blue"}}
								appear = {true}
							>
								<div>{item}</div>
							</CSSTransition>	
						)
					})
				}
				</TransitionGroup>
				<button onClick = {this.handleAddItem}>toggole</button>
			</Fragment>
		);
	}

	handleAddItem() {
		this.setState((prevState) => {
			return {
				list: [...prevState.list, "item"]
			}
		});
	}
}

export default App;
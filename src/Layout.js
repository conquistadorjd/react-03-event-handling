import React, { Component } from 'react'

import Left from './components/Left';
import Right from './components/Right';

class Layout extends Component {
	constructor(){
		super()

		this.state = { currentEvent : "Nothing"};
		this.handleInput = this.handleInput.bind(this);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.handleDoubleClick =this.handleDoubleClick.bind(this);
		this.handleKeyDown =this.handleKeyDown.bind(this);
		this.handleDoubleClick =this.handleDoubleClick.bind(this);
	};

	handleInput(event, value) {
		console.log( "- Event invoked : handleInput");
		this.setState({currentEvent: "handleInput"});
	}
	handleMouseEnter(event, value) {
		console.log( "- Event invoked : handleMouseEnter");
		this.setState({currentEvent: "handleMouseEnter"});
	}
	handleMouseLeave(event, value) {
		console.log( "- Event invoked : handleMouseLeave");
		this.setState({currentEvent: "handleMouseLeave"});
	}
	handleDoubleClick(event, value) {
		console.log( "- Event invoked : handleDoubleClick");
		this.setState({currentEvent: "handleDoubleClick"});
	}
	handleKeyDown(event, value) {
		console.log( "- Event invoked : handleKeyDown");
		this.setState({currentEvent: "handleKeyDown"});
	}
	handleonKeyUp(event, value) {
		console.log( "- Event invoked : onKeyUp");
		this.setState({currentEvent: "onKeyUp"});
	}		
	render(){
	return(
	      <div className='row'>	      	
	      	<div className="col">
	          <div>Do something with this input box :  
	          <input 
	          	onChange={this.handleInput} 
	          	onMouseEnter={this.handleMouseEnter}
	          	onMouseLeave={this.handleMouseLeave}
	          	onDoubleClick={this.handleDoubleClick}
	          	onFocus={this.handleKeyDown}
	          	onKeyUp={this.handleonKeyUp}
	          	/></div>
	          You have done :  {this.state.currentEvent}.
	        </div>
	          <Right cust={this.state } />
	      </div>    
	  )
	}
}

export default Layout
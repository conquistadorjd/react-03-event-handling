import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
	
	render(){
		return(
			<div>
				<Header />
				This is main file : app.js
				<Footer />
			</div>
			)
	}
}


ReactDOM.render(<App/>,document.getElementById('root'))
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tracker from './Components/Tracker.js';
class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {tasks: ["hello world"]}
	}

	addTask(){}

	removeTask(){}


	render(){
		return(
			<div style = {{textAlign: "center", alignContent: "center"}}>
			<h1> Task Tracker</h1>
			<input type="text"/> <button>+</button>
			<Tracker/>	
			</div>)
	}

}

export default App;

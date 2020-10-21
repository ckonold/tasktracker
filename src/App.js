import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tracker from './Components/Tracker.js';
class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {tasks: [], add: ""}
		this.addTask = this.addTask.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.clearInput = this.clearInput.bind(this);
	}
	handleChange(event){
		this.setState({
			add: event.target.value
		});
	}

	addTask(event){
		let oldTasks = this.state.tasks;
		oldTasks.push(this.state.add);
		this.setState({
			tasks: oldTasks
		})
		event.preventDefault();
	
	}

	removeTask(){}

	clearInput(){
		document.getElementById('taskInput').value = '';
	}


	render(){
		let tasks = this.state.tasks;
		return(
			<div style = {{textAlign: "center", alignContent: "center"}}>
			
			<h1> Task Tracker</h1>
			
			<form onSubmit ={this.addTask}>
			
			<input onChange={this.handleChange} id="taskInput" type="text"/> 

			<button onClick = {this.clearInput} type="submit">+</button>
			
			</form>
			
			<Tracker tasks = {tasks}/>	
			
			</div>)
	}

}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tracker from './Components/Tracker.js';
class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {tasks: []}
		this.addTask = this.addTask.bind(this);
	
		this.clearInput = this.clearInput.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}

	addTask(event){
		let add = document.getElementById("taskInput").value
		if(add !== ""){
			let oldTasks = this.state.tasks;
			oldTasks.push(add);
			this.setState({
				tasks: oldTasks
			})
		}	
	}

	removeTask(val){
		let oldTasks = this.state.tasks;
		let newTasks = [];
		for(let task of oldTasks){
			if(task != val){
				newTasks.push(task);
			}
		}
		console.log(val)
		this.setState({
			tasks: newTasks
		})

	}

	clearInput(event){
		document.getElementById('taskInput').value = '';
		event.preventDefault();
	}

	render(){
		let tasks = this.state.tasks;
		return(
			<div style = {{textAlign: "center", alignContent: "center"}}>

			<h1> Task Tracker</h1>
			
			<form onSubmit ={this.clearInput}>
			
			<input id="taskInput" type="text"/> 

			<button onClick = {this.addTask} type="submit">+</button>
			
			</form>
			
			<Tracker tasks = {tasks} remove = {this.removeTask}/>	
			
			</div>)
	}

}

export default App;

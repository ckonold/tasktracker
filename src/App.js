import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tracker from './Components/Tracker.js';
class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {tasks: [], showError: false}
		this.addTask = this.addTask.bind(this);
	
		this.clearInput = this.clearInput.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}

	
	addTask(){
		let isThere = false;
		let oldTasks = this.state.tasks;
		let add = document.getElementById("taskInput").value.toLowerCase();
		for(let task of oldTasks){
			if(task == add){
				isThere = true;
			}
		}
		if(!isThere){
			if(add == ""){
				this.setState({
					showError: true
				})
			}
			else{
				oldTasks.push(add);
				this.setState({
					showError:false
					tasks: oldTasks
				})
			}
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

import React from 'react';



class Tracker extends React.Component{
	constructor(props){
		super(props)
		console.log(this.props);
		
	}

	render(){
		let tasks = this.props.tasks
		
		const taskMapped = tasks.map((task) => 
			<p>{task}<button>-</button></p>);

		let isTodo = '';

		if(tasks.length > 0){
			isTodo = "To Do:"

		}

		return(
			<div>	
			<h1>{isTodo}</h1>
			{taskMapped}
			</div>

			
			)
	}

}

export default Tracker;

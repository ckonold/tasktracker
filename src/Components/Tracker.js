import React from 'react';



class Tracker extends React.Component{
	constructor(props){
		super(props)
		this.state = {tasks: ["hello world"]}
	}

	render(){
		const tasks = ["wash the car","Fuck the car","Kiss the car","Call Mark"];
		const taskMapped = tasks.map((task) => 
			<p style = {{}}>{task}<button>-</button></p>);
		return(
			<div>	
			{taskMapped}
			</div>

			
			)
	}

}

export default Tracker;

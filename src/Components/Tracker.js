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
		
		return(
			<div>	
			{taskMapped}
			</div>

			
			)
	}

}

export default Tracker;

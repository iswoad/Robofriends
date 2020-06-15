import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
	constructor(){
	super()
	this.state = {
		robots: robots,
		searchfield: ''
	}
}

onSearchChange = (event) => {
	this.setState({ searchfield:event.target.value })
}

	render() {
		const self = this;
		const filteredRobots = this.state.robots.filter(robot=>{
			return robots.name.toLowerCase().includes(self.state.searchfield.toLowerCase());
		console.log(this.state.searchfield)
		})
		return(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={ filteredRobots } />
			</div>
		);
	}
}

export default App;
import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

// import { robots } from './robots';

function App(){

	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	const [count, setCount] = useState(0);

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
		
	}

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(resp => resp.json())
		.then(users => {
			setRobots(users)
		})
	}, [])

	
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})

	return (
		<div className="tc">
			<h1 className="f2">RoboFriends</h1>
			<button onClick={() => setCount(count + 1)}>Click {count} </button>
			<SearchBox searchChange={onSearchChange} />
			<Scroll>
				<CardList robots={filteredRobots} />
			</Scroll>
		</div>
	)
	
}

export default App;
import React, {useState, useEffect} from 'react';
import Table from './Table'
import Form from './form'
import axois from 'axios';

function MyApp() { 
	const [characters, setCharacters] = useState([]);
	const axios = require('axios');

function removeOneCharacter (index) {
	const updated = characters.filter((character, i) => {
		return i !== index
	})
	setCharacters(updated);
}
function updateList(person) {
	setCharacters([...characters, person]);
}
async function fetchAll(){
	try {
		const response = await axios.get('http://localhost:5000/users');
		return response.data.users_list;
	}
	catch(error){
		//Not handling errors. Just logging into console.
		console.log(error);
		return false;
	}
}
	
	useEffect(() => {
		fetchAll().then(result => {
			if (result)
				setCharacters(result);
		});
	}, []);

	return (
		<div className="container">
			<Table characterData={characters} removeCharacter={removeOneCharacter} />
			<Form handleSubmit={updateList} />
		</div>
	) 
}

export default MyApp;

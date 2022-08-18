import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';


function App() {

	const [data, setData] = useState([0]);

	useEffect(() => {
		fetch('http://127.0.0.1:8081')
		.then((response) => {
			if(response.ok) {
				return response.json();
			}
			throw response;
		})
		.then((response) => {
			setData(response);
		})
		.catch((error) => {

		})
		.finally(() => {

		})
	}, []);

	let display = [];

	for(let i = 0; i < data.length; i++) {
		let keys_1 = Object.keys(data[i]);
		let values_1 = Object.values(data[i]);

		
		display.push(<p>{i+1}.</p>);

		let temp_1 = [];

		for(let k = 0; k < keys_1.length; k++) {

			if(keys_1[k] === "address" || keys_1[k] === "company") {
				
				let keys_2 = Object.keys(data[i][keys_1[k]]);
				let values_2 = Object.values(data[i][keys_1[k]]);

				
				let temp_2 = [];
				temp_2.push(<li>{keys_1[k]}:</li>);
				
				let temp_3 = [];
				for(let j = 0; j < keys_2.length; j++) {

					if(keys_2[j] === "geo") {
								
						let keys_3 = Object.keys(data[i][keys_1[k]][keys_2[j]]);
						let values_3 = Object.values(data[i][keys_1[k]][keys_2[j]]);
						
						
						let temp_4 = [];

						temp_4.push(<li>{keys_2[j]}:</li>);

						
						let temp_5 = [];
						for(let c = 0; c < keys_3.length; c++) {
							temp_5.push(<li>{keys_3[c]}: {values_3[c]}</li>);
						}

						temp_4.push(<ul>{temp_5}</ul>);
						
						temp_3.push(<ul>{temp_4}</ul>);

					} else {
						temp_3.push(<li>{keys_2[j]}: {values_2[j]}</li>);
					}

					
				}

				temp_2.push(<ul>{temp_3}</ul>);
					
				temp_1.push(<ul>{temp_2}</ul>);

			} else {
				temp_1.push(<li>{keys_1[k]}: {values_1[k]}</li>);
			}

			
		}
		
		display.push(<ul>{temp_1}</ul>);

	}
	
	return (
		<div className="App">
			<h1>Node.js API</h1>
			<div id='mid_content'>
				{display}
			</div>			

		</div>
		
	);
}

export default App;

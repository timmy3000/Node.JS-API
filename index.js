const express = require('express');
const app = express();

const cors = require('cors');
const { json } = require('express');
app.use(cors())

const axios = require('axios').default;

app.get('/', (req, res) => {
	axios
	.get('https://jsonplaceholder.typicode.com/users')
	.then((response) => {
		res.json(response.data)
	})
	.catch((error) => {
		res.json({code: error.code})
		
	});


});



app.listen(8081, () => {
	console.log("server running at http://127.0.0.1:8081")
})

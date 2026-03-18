const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => { 
	res.send('ShipFast App is running ✅'); 
}); 

app.get('/health', (req, res) => { 
	res.status(200).send('OK'); 
});

app.listen(3005, () => { 
	console.log('App running on port 3005'); 
}); 

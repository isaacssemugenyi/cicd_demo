const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello, World');
})

app.get('/data', (req, res)=>{
    res.send('Accessing data api')
})

const port = process .env.PORT || 3000;

app.listen(port, () => console.log('Started'))

module.exports = app;
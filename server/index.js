const express = require('express')
const app = express()
const port = 3000

const { uuid } = require('uuidv4');
const id = uuid()

// express configuration
app.use(express.json({type: '*/*'}));

// Set your routes
// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:id', function (req, res) {
    res.send(req.body)
});

app.post('/share', function (req, res) {
    
    res.send({success:true, link: `http://localhost:3000/${id}`});

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
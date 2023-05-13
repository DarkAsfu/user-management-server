const express = require('express');
const app = express(); 
const port = process.env.PORT || 5000;
const cars = require('./data/cars.json')
const cors = require('cors');

// middleware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com'},
    {id: 2, name: 'Totini', email: 'totini@gmail.com'},
    {id: 3, name: 'Jara', email: 'jara@gmail.com'},
    
]

app.get('/', (req, res) => {
    res.send('User management runing');
}) 

app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users', (req, res) => {
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1 ;
    users.push(newUser);
    res.send(newUser);

})
app.get('/cars', (req, res) => {
    res.send(cars);
})
app.listen(port, () => {
    console.log(`Server is runing on port ${port}`)
})
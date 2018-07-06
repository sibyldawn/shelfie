const express = require ('express');
const bodyParser = require('body-parser');
const con = require('./controller');
const massive = require('massive');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err)) 

/* CRUD for Collection */
app.post('/api/inventory',con.create);
app.get('/api/inventory',con.getAll);
app.get('/api/inventory/:id',con.getOne);
app.put('/api/inventory/:id',con.update);
app.delete('/api/inventory/id',con.delete);



const PORT = 4000;
app.listen(PORT, () => console.log('server now listening to port ' + PORT + ' 🍎'));
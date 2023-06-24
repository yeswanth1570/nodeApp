// const mongoClient = require('./db/mongo')
const express = require('express');
const CrudRouter = require('./router/CRUD');

const app = express();
const port = 3000;

app.use(express.json());
app.use(CrudRouter);
app.get('/',(req,res)=>{
    res.send('connection made')
})

app.listen(port, () => {
    console.log('App is running on port 3000!');
});
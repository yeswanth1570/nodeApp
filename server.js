require('./db/mongoose');
const express = require('express');
const blogRouter = require('./router/blog');

const app = express();
const port = 3000;

app.use(express.json());
app.use(blogRouter);

app.listen(port, () => {
    console.log('App is running on port 3000!');
});
const express = require('express');
const { updateOne } = require('../models/blogModel');
const router = new express.Router();
const Blog = require('../models/blogModel');

router.post('/blogs', (req, res) => {
    
    const blog = new Blog(req.body);
    console.log('s')
    blog.save().then((blog) => {
        console.log('yep')
        res.status(201).send(blog);
    }).catch((error) => {
        console.log('bopw')
        res.status(400).send(error);
    })

    
})

module.exports = router;
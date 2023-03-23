const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const Blog = require('../models/blogModel');

router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save().then((blog) => {
        res.status(201).send(blog);
    }).catch((error) => {
        res.status(400).send(error);
    })
})
router.post('/findblogs', (req, res) => {
    
    const blog = new Blog();
    
    mongoose.model('Blog').find({"title": "htko"}).then((blog) => {
        console.log('yep')
        res.status(201).send(blog);
    }).catch((error) => {
        console.log('bopw')
        res.status(400).send(error);
    })

    
})

module.exports = router;
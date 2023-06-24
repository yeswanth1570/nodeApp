const mongoDB = require('../db/mongo')
const express = require('express');
const router = new express.Router();



  router.post('/mongoDB/create', (req, res) => {
    console.log(req)
    mongoDB.db('sample').collection('sample').insertOne(req.body).then(resp=>{
    console.log(resp);
    res.send(resp)
   })

// mongoClient.db('sample').collection('sample').insertOne({ name: "Neapolitan pizza", shape: "round" })

})
router.post('/mongoDB/updateDoc', (req, res) => {
    const userParams = req['body'];
    const database = userParams['database'];
    const collection = userParams['collection'];
    const dataObject = userParams['dataObject']
    res.send(mongoDB.db(database).collection(collection).updateOne({},dataObject))
    
})
router.post('/mongoDB/find', (req, res) => {
  const userParams = req['body'];
  const database = userParams['database'];
  const collection = userParams['collection'];
  const findQuery = userParams['findQuery']
  res.send(mongoDB.db(database).collection(collection).findOne(findQuery))
    
})
router.post('/mongoDB/delete', (req, res) => {
    
    
})
router.post('/mongoDB/findById', (req, res) => {
    
    
})
router.post('/mongoDB/findByIdAndUpdate', (req, res) => {
    
    
})
router.post('/mongoDB/findByIdAndDelete', (req, res) => {
    
    
})
module.exports = router;
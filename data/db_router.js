const express = require('express')
const { find } = require('./db')
const db = require('./db')

const router = express.Router()


//GET Endpoints
// GET	/api/posts	Returns an array of all the post objects contained in the database.
router.get('/api/posts',(req,res) => {
    console.log(req)
    db.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({
            error: "The posts information could not be retrieved."
        })
    })
})

// GET	/api/posts/:id	Returns the post object with the specified id.
router.get('/api/posts/:id',(req,res) => {
    db.findById(req.params.id)
    .then(data => {
        if(data.length){
            res.status(200).json(data)
        }else{
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            })
        }
    })
    .catch(error => {
        console.log(error.message,error.stack)
        res.status(500).status.json({
            error: "The post information could not be retrieved." 
        })
    })
})

// GET	/api/posts/:id/comments	Returns an array of all the comment objects associated with the post with the specified id.
router.get('/api/posts/:id/comments',(req,res) => {
    db.findCommentById(req.params.id)
    .then(data => {
        console.log(data)
        if(data.length){
            res.status(200).json(data)
        }else{
            res.status(404).json({
                message: "The post with the specified ID does not exist." 
            })
        }
    })
    .catch(error => {
        console.log(error.message,error.stack)
        res.status(500).json({
            error: "The comments information could not be retrieved." 
        })
    })
})

//POST Endpoints
// POST	/api/posts	Creates a post using the information sent inside the request body.
router.post('/api/posts', (req,res) => {
    const payload = req.body

    if(!payload.title || !payload.contents){
        res.status(401).json({
            errorMessage: "Please provide title and contents for the post." 
        })
    }else{
        db.insert(payload)
        .then(data => {
            res.status(201).json(data);
        })
        .catch(error => {
            res.status(500).json({
                error: "There was an error while saving the post to the database" 
            })
        })
    }
})

// POST	/api/posts/:id/comments	Creates a comment for the post with the specified id using information sent inside of the request body.
router.post('/api/posts/:id')

//PUT Endpoints
// PUT	/api/posts/:id	Updates the post with the specified id using data from the request body. Returns the modified document, NOT the original.


//DELETE Endpoints
// DELETE	/api/posts/:id	Removes the post with the specified id and returns the deleted post object. You may need to make additional calls to the database in order to satisfy this requirement.

module.exports = router
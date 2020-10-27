const express = require('express')
const db = require('./db')

const router = express.Router()


//GET Endpoints
// GET	/api/posts	Returns an array of all the post objects contained in the database.
router.get('/api/posts',(req,res) => {
    console.log(res)
})

// GET	/api/posts/:id	Returns the post object with the specified id.


// GET	/api/posts/:id/comments	Returns an array of all the comment objects associated with the post with the specified id.


//POST Endpoints
// POST	/api/posts	Creates a post using the information sent inside the request body.


// POST	/api/posts/:id/comments	Creates a comment for the post with the specified id using information sent inside of the request body.


//PUT Endpoints
// PUT	/api/posts/:id	Updates the post with the specified id using data from the request body. Returns the modified document, NOT the original.


//DELETE Endpoints
// DELETE	/api/posts/:id	Removes the post with the specified id and returns the deleted post object. You may need to make additional calls to the database in order to satisfy this requirement.


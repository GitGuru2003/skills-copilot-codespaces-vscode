// Create web server

// require express
const express = require('express');
const app = express();
const port = 3000;

// require body-parser
const bodyParser = require('body-parser');

// set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require comments.js
const comments = require('./comments');

// get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// get comment by id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    res.json(comments.getComment(id));
});

// create new comment
app.post('/comments', (req, res) => {
    const { name, content } = req.body;
    res.json(comments.createComment(name, content));
});

// update comment
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const { name, content } = req.body;
    res.json(comments.updateComment(id, name, content));
});

// delete comment
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    res.json(comments.deleteComment(id));
});

// listen on port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
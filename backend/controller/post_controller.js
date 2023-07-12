const express = require('express');
const router = express.Router();

const Post = require('../model/post');

// Find All Document
router.get('/', (req, res) => {
    const page = req.query.page || 0;
    const limit = req.query.limit || 5;
    Post.paginate({} , { 
        page: page, 
        limit: limit
    }).then((response) => {
        console.log(response);
        res.send(response);
    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});


// Find One Document 
router.get('/:id', (req, res) => {
    Post.findOne({ _id: req.params.id }).then((response) => {

        if (!response) {
            return res.status(404).send('Not found!');
        }
        res.send(response);

    }).catch((error) => {
        res.sendStatus(500).send(error);
    });
});

// Find Document By Id And Delete
router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id).then(response => {
        console.log(response);
        if (!response) {
            return res.status(404).send('Not found!');
        }
        res.status(201).send(response);
    }).catch(error => {
        res.sendStatus(500).send(error);
    });
});

// Find Document By Id And Update
router.patch('/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(response => {
        if (!response) {
            return res.status(404).send('Not found!');
        }
        res.status(201).send(response);
    }).catch(error => {
        res.sendStatus(500).send(error);
    });
});


router.post('/', (req, res,next) => {
    req.body._id = null;
    console.log(req.body);
    const post = new Post(req.body);
    post.save().then((response) => {
        res.status(200).json(
            { 
                status: 200,
                message: 'Success',
                data: response, 
            });
    }).catch((error) => {
        console.log(error);
        res.status(500).json({ 
            status: 500,
            message: 'Failed'
        });
    });
});


module.exports = router;
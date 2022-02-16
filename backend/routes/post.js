const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



//i cant get all the users for some reason?????
router.get('/getAll', async (req, res) => {
    try {
        const getAll = await Post.find();
        res.json(getAll)
    } catch(err) {
        res.json({message: err})
    }
})


router.post('/', async (req, res) => {
    const post = new Post({
        username: req.body.username,
        password: req.body.password
    });

    try {
        const savedPosts = await post.save()
        res.json(savedPosts)
    } catch (err) {
        res.json(
            {message:'Username or password is already taken. All values must be unique for your security. Please try again'})
    }
})

router.patch('/update/:id', async (req, res) => {
    try {
        const update = await Post.updateOne(
            {_id: req.params.id},
            {$set: {password: req.body.password}}
        );
        res.json(update)
    } catch(err){
        console.log(err)
    }
})

module.exports = router;
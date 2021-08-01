const express = require("express");
require("./mongodb")
const Post = require("./model.js")

const app = express();
app.use(express.json());


app.post('/api/post', async (req,res) => {
    try{
        const post = new Post({
            title: req.body.title,
            description: req.body.description
        })
        await post.save();
        return res.status(201).send(post);
    } catch (e) {
        return res.status(500).send(e)
    }
})

app.get('/api/post', async (req,res) => {
    try{
        const post = await Post.find();
        return res.status(200).send(post);
    } catch (e) {
        return res.status(500).send(e)
    }
})

app.get('/api/post/:id', async (req,res) => {
    const _id = req.params.id;
    try {
        const post = await Post.findById(_id);
        return res.status(200).send(post);
    } catch (e) {

    }
    return res.status(500).send(e);
})

app.patch('/api/post/:id', async (req,res) => {
    const _id = req.params.id;
    try {
        const post = await Post.findByIdAndUpdate(_id, req.body);
        if(post) {
            const postUp = await post.findById(_id);
            return res.status(200).send(postUp)
        }
        else{
            return res.status(400).send("post update failed")
        }
    } catch (e) {
        return res.status(500).send(e)
    }
})

app.delete('/api/post/:id', async (req,res) => {
    const _id = req.params.id;
    try {
        const post = await Post.findByIdAndDelete(_id);
        if(post) {
            return res.status(400).send("post deleted successfully")
        }
        return res.send("post not deleted")
    } catch (e) {
        return res.status(500).send(e)
    }
})

app.listen(3000, () => {console.log("Listening on port 3000")})
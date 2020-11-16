/*import express from 'express';
const router = express.Router();
import { postController } from '../controllers/index.js';

router.get('/:id', postController.get);
router.post('/', postController.create);
router.put('/:id', postController.update);
router.delete('/:id', postController.remove);
*/
/*
router.get('/:postId', async (req, res) =>{
    const post = await Post.findById(req.params.postId)
    try{res.json(post);}
    catch (err) 
    {
        res.json({ message: err});
    }
});


router.post('/', async (req,res, next) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });
    } 
});


//DELETE:

router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.deleteOne({_id: req.params.postId } );
        res.json(removedPost);
    } catch ( err) {
        res.json( {message: err})
    }
});

router.patch('/:postId', async (req,res) => {
    try{
        const updatedPost = await Post.updateOne(
        {_id: req.params.postId }, 
        {$set: {title: req.body.title}} );
        res.json(updatedPost);
    } catch ( err) {
        res.json( {message: err})
    }
});
*/
/*
export default router;*/
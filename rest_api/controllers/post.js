import { userService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({ message: err});
    }
});

export const get = catchAsyncErrors( async (req, res) =>{
    const post = await Post.findById(req.params.postId)
    try{res.json(post);}
    catch (err) 
    {
        res.json({ message: err});
    }
});

export const updateQuestion1 = catchAsyncErrors(async (req,res) => {
        const updatedPost = await Post.updateOne(
        {_id: req.params.postId },
        { $addToSet: { question1: [ req.body._id ] } }

        );

        res.json(updatedPost);

});



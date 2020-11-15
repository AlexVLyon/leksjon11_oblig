import Poll from '../models/poll.js';
import { pollService } from './index.js';

export const createPoll = async (data) => Poll.create(data);


export const listAll = async () => Poll.find();


export const updateNei = async (id, data) =>  Poll.updateOne( { _id : id} , { $addToSet: { neiVotes: data._id }});

export const updateJa = async (id, data) =>  Poll.updateOne( { _id : id} , { $addToSet: { jaVotes: data._id }});


//{ $addToSet: { <field1>: <value1>, ... }
//db.products.updateOne({name:"Milk"}, {$set:{price:3.5}})

//const update = await Model.findByIdAndUpdate(doc._id, { $addToSet: { letters: ['c', 'd'] } }, { new: true });


  //Poll.updateOne( { '_id': { id } }, { '$addToSet': { 'jaVotes': data } } 
  


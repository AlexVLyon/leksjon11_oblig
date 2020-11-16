import { pollService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';


export const getSpecific = catchAsyncErrors(async (req, res, next) => {
  console.log("nei");

  const poll = await pollService.getSpecific(req.params.id, req.body);

    res.json(poll);
});

export const create = catchAsyncErrors(async (req, res, next) => {
  const poll = await pollService.createPoll(req.body);
  res.status(201).json(poll);
});

  export const listAll = catchAsyncErrors(async (req, res, next) => {
    const result = await pollService.listAll();
    res.status(200).json(result);
  });

export const updateJa = catchAsyncErrors(async (req,res) => {
  const poll = await pollService.updateJa(req.params.id, req.body);
    res.json(poll);
});


export const updateNei = catchAsyncErrors(async (req, res, next) => {
  const poll = await pollService.updateNei(req.params.id, req.body);
    res.json(poll);
});




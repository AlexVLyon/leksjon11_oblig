import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const listAll = async () => User.find();
import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //10 is the salt value
    const newUser = new User({ username, email, password });
    try {
        await newUser.save()
        res.satus(201).json("User created successfully");
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    
};
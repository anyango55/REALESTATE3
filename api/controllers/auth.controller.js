import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10); //10 is the salt value
    const newUser = new User({ username, email, password });
    try {
        await newUser.save()
        res.satus(201).json("User created successfully");
    } catch (error) {
        next(error);
    }
    
};

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(401, "User not found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, "Invalid credentials"));
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        const { password: pass, ...res } = validUser.toObject(); // the underscore is to ignore the password in the object that is being returned to the client
        res.
        cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(res); 
    } catch (error) {
        next(error);
        
    }

}


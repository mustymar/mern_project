import {User} from "../models/user.model.js";
import bcrpytjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.util.js";

export const signIn = async (req, res, next) => {

    const { email, password } = req.body;

    try {

        const validUser = await User.findOne({ email });

        if (!validUser) return next(errorHandler(400, "Wrong credentials"));
       

        const validPassword = bcrpytjs.compareSync(password, validUser.password);

        if (!validPassword) return next(errorHandler(400, "Wrong credentials"));
        

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        const { password: _, ...others } = validUser._doc;

        res.cookie("token", token, { httpOnly: true }).status(200).json(others);

    } catch (e) {
        
        next(e);
    }
};


export const signUp = async (req, res, next) => {
    
    const { username, email, password } = req.body;

    try {
        const salt = await bcrpytjs.genSalt(12);
        
        const hashedPassword = await bcrpytjs.hash(password, salt);

        const newUser = new User({ username, email, password: hashedPassword });

        console.log("New User: " + newUser);
        
        await newUser.save();
    
        res.status(201).json("User created successfully");

    } catch (e) {
        
        next(e);
    }
};

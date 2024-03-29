const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc Register new user
// @route POST /api/users
// @access Public 
 exports.registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if(!username || !email || !password){
        res.status(400)
        throw new Error('Please add all fields');
    }

    // check if user exists 

    const userExists = await User.findOne({email});
    if(userExists) {
        res.status(400)
        throw new Error('User already exists');
    }

    // hash password 
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user 

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })
    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid user data');
    }
});

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public 
exports.loginUser =  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    // check for user email
    if(user && (await bcrypt.compare(password, user.password))) {
        const token = generateToken(user._id);
        res.json({
            _id: user.id,
            username: user.username, 
            email: user.email,
            token: token
        })
    }  else {
        res.status(400)
        throw new Error('Invalid Credentials');
    }
});

// Generate JWT 

const generateToken = (id) => {
    return jwt.sign({userId: id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}



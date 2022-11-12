const router = require('express').Router();
const {
    createUser,
    getUsers,
    getSingleUser,
} = require('../../controllers/userController');
const { Schema, model } = require('mongoose');

//schema to create User model with reference to their thoughts
const userSchema = new Schema(
    {
        username: String,
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
       ],  
    },
);
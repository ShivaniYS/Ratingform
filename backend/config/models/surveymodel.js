const mongoose = require('mongoose');
const Question = require('../models/questionmodel');

const surveySchema = mongoose.Schema(
    {
        // _id:{
        //     type: Number,
        //     ref:'Question'
        // },
        name:{
            type: String,
            require:true,
        },
        Questions:[{type:mongoose.Schema.Types.Array,ref:'Question'}]
             
        
    }
);
module.exports = mongoose.model('Survey',surveySchema); 


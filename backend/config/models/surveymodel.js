const mongoose = require('mongoose');
const Question = require('../models/questionmodel');

const surveySchema = mongoose.Schema(
    {name:{
            type: String,
            require:true,
        },
        Questions:[{type:mongoose.Schema.Types.Object,ref:'Question'}]
             
        
    }
);
module.exports = mongoose.model('Survey',surveySchema); 


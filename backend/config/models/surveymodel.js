const mongoose = require('mongoose');
const surveySchema = mongoose.Schema(
    {
        _id:{
            type: Number,

        }
    }
);
module.exports = mongoose.model('Survey',surveySchema); 


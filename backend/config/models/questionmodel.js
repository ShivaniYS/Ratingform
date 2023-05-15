const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const questionSchema = mongoose.Schema(
    {
    question: {
        id: {
          type: String,
          required: [true,'please add id']

        },
        description: {
            type:String,
        },
        weight:{
               type:Number,
        },
        Rating: {
           
            Ratings:{
                id: {
                    type: Number,
                },
                Q_id: {
                    type:String,
                },
                min: {
                    type:Number,
                },
                max: {
                    type:Number,
                },
                Rating_description: {
                    type:String,
                },
                Rating_value: {
                    type:Number,
                }
            }
        },
        Options_type: {
           type: String,
        }


    }


});


module.exports = mongoose.model('Question',questionSchema);
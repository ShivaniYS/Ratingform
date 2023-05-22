const { Int32 } = require('mongodb');
const mongoose = require('mongoose');
const Survey = require("../models/surveymodel")

const questionSchema = mongoose.Schema(
    {
    // surveyId: {
    //     type: mongoose.Schema.ObjectId,
    // },  
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
        // min: {
        //     type:Number,
        // },
        // max: {
        //     type:Number,
        // },
        Rating:
               [{type:mongoose.Schema.Types.Array,ref:'ratingSchema'}],
        
        // Rating_id: {
        //     Ratings:[{
        //         id: {
        //             type: Number,
        //         },
        //         Rating_value: {
        //             type:Number,
        //         },
        //         Rating_description: {
        //             type:String,
        //         }
        //     }],
        // },
        Options_type: {
           type: String,
        },
        // Survey:{
        //     type:mongoose.Schema.Types.ObjectId,ref:'Survey'
        // }


    }


});

module.exports = mongoose.model('Question',questionSchema);

// /survey/:id/q/:qid
// const {id,qid} = req.params;

const ratingSchema = new mongoose.Schema({
  
    Rating_id: {
      type: Number,
      required: true
    },
    Rating_description: {
      type: String,
    },
    Rating_value: {
      type: Number,
    },
    
  }
);

module.exports = mongoose.model;('ratingSchema',ratingSchema);
// const questionSchema = mongoose.Schema({
//   question: {
//     id: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: [true, 'please add id']
//     },
//     description: {
//       type: String
//     },
//     weight: {
//       type: Number
//     },
//     Options_type: {
//       type: String
//     },
//     rating: [ratingSchema]
//   }
// });

// module.exports = mongoose.model('Question', questionSchema);





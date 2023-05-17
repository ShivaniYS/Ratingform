const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const questionSchema = mongoose.Schema(
    {
    surveyId: {
        type: mongoose.Schema.ObjectId,
    },  
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
        min: {
            type:Number,
        },
        max: {
            type:Number,
        },
        Rating_id: {
            Ratings:[{
                id: {
                    type: Number,
                },
                Rating_value: {
                    type:Number,
                },
                Rating_description: {
                    type:String,
                }
            }],
        },
        Options_type: {
           type: String,
        },


    }


});


module.exports = mongoose.model('Question',questionSchema);


// const mongoose = require('mongoose');

// const ratingSchema = new mongoose.Schema({
//   Ratings: {
//     id: {
//       type: Number,
//       required: true
//     },
//     min: {
//       type: Number
//     },
//     max: {
//       type: Number
//     },
//     Rating_description: {
//       type: String
//     },
//     Rating_value: {
//       type: Number
//     }
//   }
// });

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





const mongoose = require('mongoose');
const finalSchema = mongoose.Schema( {
              Surveyid:{
                type: mongoose.Schema.ObjectId,
              },
              name: "string",
              Questions: [
                {
                  id:{type: Number} ,
                  description: {type:String},
                  option: {type:String},
                  options: [
                    {
                      optiondesc: {type:String},
                      value:{type: Number},
                    },
                  ],
                },
                // {
                //   id: "2",
                //   description: "Are you interested in this scheme?",
                //   option: "radio",
                //   options: [
                //     {
                      
                //       optiondesc: "Interested",
                //       value: "1",
                //     },
                //     {
                     
                //       optiondesc: "Not Interested",
                //       value: "2",
                //     },
                //     {
                      
                //       optiondesc: "Need more details",
                //       value: "3",
                //     },
                //   ],
                // },
                // {
                //   id:"3",
                //   description: "How many countries are your eligible employees are located in?",
                //   option: "radio",
                //   options: [
                //     {
                //       optiondesc: "only 1 country",
                //       value:"4",
                //     },
                //     {
                //       optiondesc: "2-4 countries",
                //       value: "5",
                //     },
                //     {
                //       optiondesc: "5-10 countries",
                //       value: "6",
                //     },
                //     {
                //       optiondesc: "over 10 countries",
                //       value: "7",
                //     },
                //     {
                //       optiondesc: "Not sure",
                //       value: "8",
                //   }]
                // },
                //     {
                //       id:"4",
                //       description: "How was your plan designed and plan documentation drafted?",
                //       option: "checkbox",
                //       options: [
                //         {
                //           optiondesc: "In-house using templates and guides available online",
                //           value:"9",
                //         },
                //         {
                //           optiondesc: "via template available in an equity management software",
                //         }
        
                //       ]
                //     },
                //     {
                //       id: "5",
                //       description: "Add your text",
                //       option: "textarea",
                //       options: []
                      
                //     }
                ]    
}
        
              
    

);
module.exports = mongoose.model("Final",finalSchema);
const router = require('express').Router();
const uuid = require('uuid');


let Question = require('../config/models/questionmodel');
const generateUUID = () => {
    return uuid.v4();
  };
router.route('/').get((req,res)=>{
    Question.find()
//    res.json(question);
    .then(questions => res.json(questions))
    .catch(err=>res.status(400).json('Error:' + err));
});
router.get('/surveys/:id/questions',(req, res) => {
    const id = generateUUID();
    Question.find({ surveyId: req.params.id })
      .then(questions => res.json(questions))
      .catch(err => res.status(400).json('Error: ' + err));
  });
router.route('/add').post((req,res)=>{
    const {question,
        id,
        description,
        weight,
        Options_type,
        Rating,
        Ratings,
        min,
        max,
        Rating_description,
        Rating_value,} = req.body;
    
    


    const newQuestion = new Question({
        
        //code above
        question,
        id,
        description,
        weight,
        Options_type,
        Rating,
        Ratings,
        min,
        max,
        Rating_description,
        Rating_value,


});
    newQuestion.save()
    .then(() => res.json('Question added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/survey/:id/questions/add').post((req, res) => {
    const { question, description, weight, optionsType, Rating,Rating_id,  min, max, Rating_description, Rating_value } = req.body;
  
    const newSurvey = new Survey({
      surveyId: req.params.id,
      question,
      description,
      weight,
      optionsType,
      Rating,
      Rating_id,
      min,
      max,
      Rating_description,
      Rating_value
    });
  
    newSurvey.save()
      .then(() => res.json('Question added to survey!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/:id').get((req, res) => {
    Question.findById(req.params.id)
      .then(questions => res.json(questions))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Question.findByIdAndDelete(req.params.id)
      .then(() => res.json('Question deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Question.findById(req.params.id)
      
      .then(questions => {
        questions.question = req.body.question;
        questions.id = req.body.id;
        questions.description = req.body.description;
        questions.weight= req.body.weight;
        questions.Options_type = req.body.Options_type;
        
        questions.save()
          .then(() => res.json('Question updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/update/:id').put((req, res) => {
    Question.findById(req.params.id)
      .then(question => {
        question.question = req.body.question;
        question.id = req.body.id;
        question.description = req.body.description;
        question.weight = req.body.weight;
        question.Options_type = req.body.Options_type;

  
        question.save()
          .then(() => res.json('Question updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/survey/:surveyId/questions/update/:questionId').put((req, res) => {
    const { question, description, weight, optionsType, rating, ratings, min, max, ratingDescription, ratingValue } = req.body;
  
    Question.findOneAndUpdate(
      { _id: req.params.questionId, surveyId: req.params.surveyId },
      { $set: { question, description, weight, optionsType, rating, ratings, min, max, ratingDescription, ratingValue } },
      { new: true }
    )
      .then(() => res.json('Question updated in survey!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;
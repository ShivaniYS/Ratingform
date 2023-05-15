const router = require('express').Router();
let Question = require('../config/models/questionmodel');
router.route('/').get((req,res)=>{
    Question.find()
    .then(questions => res.json(questions))
    .catch(err=>res.status(400).json('Error:' + err));
});
router.route('/add').post((req,res)=>{
    const question = req.body.question;
    const id = req.body.id;
    const description = req.body.description;
    const weight = req.body.weight;

    const newQuestion = new Question({
        question,
        id,
        description,
        weight,
});
    newQuestion.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
const router = require('express').Router();
let Survey = require('../config/models/surveymodel');
router.route('/').get((req,res)=>{
    Survey.find()
    .then(surveys => res.json(surveys))
    .catch(err=>res.status(400).json('Error:' + err));
});
router.route('/add').post((req,res)=>{
    const _id = req.body._id;

    const newSurvey = new Survey({
        _id,
    });
    newSurvey.save()
    .then(() => res.json('Survey Created!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Survey.findById(req.params.id)
      .then(surveys => res.json(surveys))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Survey.findByIdAndDelete(req.params.id)
      .then(() => res.json('Survey deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  
  router.route('/update/:id').post((req, res) => {
    Survey.findById(req.params.id)
      .then(surveys => {
        surveys._id = req.body._id;
        
  
        surveys.save()
          .then(() => res.json('Survey updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
 
  router.route('/update/:id').put((req, res) => {
    Survey.findById(req.params.id)
      .then(survey => {
        survey._id = req.body._id;
        
        survey.save()
          .then(() => res.json('Survey updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = router;

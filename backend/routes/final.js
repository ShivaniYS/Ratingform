const router = require("express").Router();
let Final = require("../config/models/finalmodel");

router.route("/").get((req, res) => {
    Final.find()
      .then((finals) => res.json(finals))
      .catch((err) => res.status(400).json("Error:" + err));

  });
router.route("/add").post((req,res)=>{
    const {Surveyid,name,Questions,id,description,option,options,optiondesc,value} = req.body;
    const newFinal = new Final({
        Surveyid,name,Questions,id,description,option,options,optiondesc,value
    });
    newFinal
    .save()
    .then(() => res.json("Questionarre  Created!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").get((req, res) => {
    // console.log(req.params.id);
    Final.findById(req.params.id)
      .then((finals) => res.json(finals))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  router.route("/:id").delete((req, res) => {
    Final.findByIdAndDelete(req.params.id)
      .then(() => res.json("Option deleted."))
      .catch((err) => res.status(400).json("Error: " + err));
  });
  router.route("/update/:id").put(async (req, res) => {
    const finalUpdate = await Final.findByIdAndUpdate(req.params.id, req.body);
    res.json(finalUpdate);
  });

module.exports = router;
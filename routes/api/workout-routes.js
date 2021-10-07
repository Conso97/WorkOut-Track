const router = require('express').Router();
const Workout = require('../../models');

router.get('/', (req, res) => {
    Workout.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

router.post('/', (req, res) => {
    console.log("post " + req)
    Workout.create(req.body, function(err, result) {
        res.json(result);
    })
});

router.put('/:id', (req, res) => {

    console.log({"_id": req.params.id}, req.body, );
    Workout.updateOne({"_id": req.params.id}, req.body, function (err, results) {
        res.json(results);
    });
});

router.post('/:id', (req, res) => {
    console.log("here");
    console.log(req);

});

router.get('/range', (req, res) => {

});

module.exports = router;

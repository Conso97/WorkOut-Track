const router = require('express').Router();
const Workout = require('../../models');

router.get('/', (req, res) => {
    Workout.find({}, function(err, result) {
        if(err){
        	console.log(err);
        	return res.send(err);
         }
        return res.json(result);
    });
});

router.post('/', (req, res) => {
    console.log("post " + req)
    Workout.create(req.body, function(err, result) {
        if(err) {
        	console.log(err);
        	return res.send(err);
        }
        return res.json(result);
    })
});

router.put('/:id', (req, res) => {

    console.log({"_id": req.params.id}, req.body);

    Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}}, 
        {  safe: true, upsert: true}, function (err, results) {
            if(err){
                console.log(err);
                return res.send(err);
             }
            console.log("results, " + results);
            return res.json(results);
    });
});

router.post('/:id', (req, res) => {
    console.log("here");
    console.log(req);

});

router.get('/range', (req, res) => {
    Workout.find().sort({ _id: -1 }).limit(7).exec(function(err, results) {
        return res.json(results);
    });
});

module.exports = router;

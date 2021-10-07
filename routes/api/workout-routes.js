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

router.put('/', (req, res) => {

});

router.post('/:id', (req, res) => {
    console.log("here");
    console.log(req);
    
});

router.get('/range', (req, res) => {

});

module.exports = router;

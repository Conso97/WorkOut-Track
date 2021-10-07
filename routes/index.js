const router = require('express').Router();
const path = require("path");
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
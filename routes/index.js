const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');

router.use('/html', htmlRoutes);

router.use((req, res) => {
    return res.send(' Wrong route!');
});


module.exports = router;
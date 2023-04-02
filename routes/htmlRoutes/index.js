const router = require('express').Router();

router.get('/', async (req, res) => {

    return res.send('You hit the right route');
})





module.exports = router;
const { Router } = require('express');
const router = Router();

router.post('/', (req, res) => {
    console.log('auth: ');
    console.log(req, res);
    res.send('Recieved');
});

module.exports = router;
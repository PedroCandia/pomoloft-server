const { Router } = require('express');
const router = Router();

// Routes
router.get('/', (req, res) => {
    const data = {
        "name": "pomoloft"
    }
    res.json(data);
})

router.post('/', (req, res) => {
    console.log(res);
    res.send(data);
})



module.exports = router;
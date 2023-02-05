const { Router } = require('express');
const bot = require('../bot');
const router = Router();

// Routes
router.get('/', (req, res) => {
    bot.main('Bienvenido');
    const data = {
        "name": "pomoloft",
        "test": "msg enviado"
    }
    res.json(data);
})

router.post('/', (req, res) => {
    const command = req.body.command;
    bot.main(command);
    res.send('Recieved');
});

module.exports = router;
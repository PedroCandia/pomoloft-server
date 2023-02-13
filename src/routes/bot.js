const { Router } = require('express');
const bot = require('../bot');
const router = Router();

router.post('/', (req, res) => {
    const client = require('../index');
    const { command } = req.body;
    bot.main(client.bot, 'ailingdev', command);
    res.send('Recieved');
});

module.exports = router;


// Routes
// router.get('/', (req, res) => {
//     bot.main('Bienvenido');
//     const data = {
//         "name": "pomoloft",
//         "test": "msg enviado"
//     }
//     res.json(data);
// });
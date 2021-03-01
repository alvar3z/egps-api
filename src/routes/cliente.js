const { Router, request } = require('express');
const { getAll, getById } = require('../controllers/cliente');

const router = Router();
router.post('/cliente/', (req, res) => {
    const request = req.body;
    let response = {  }
    res.json(response);
});

router.get('/api/cliente/', getAll);
router.get('/api/cliente/:id',getById);
module.exports = router;
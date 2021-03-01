const { Router, request } = require('express');
const { getAll, getById, changeStatus, edit,add } = require('../controllers/cliente');
const router = Router();
router.post('/api/cliente/', add);
router.get('/api/cliente/', getAll);
router.get('/api/cliente/:id',getById);
router.put('/api/cliente/:id',edit);
router.patch('/api/cliente/:id',changeStatus);
module.exports = router;
const { Router, request } = require('express');
const { getAll, getById, changeStatus, edit,add } = require('../controllers/sucursal');
const router = Router();
router.post('/api/sucursal/', add);
router.get('/api/sucursal/', getAll);
router.get('/api/sucursal/:id',getById);
router.put('/api/sucursal/:id',edit);
router.patch('/api/sucursal/:id',changeStatus);
module.exports = router;
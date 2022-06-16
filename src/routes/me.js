const express = require('express');
const router = express.Router();
const MeController = require('../app/controllers/MeController');

router.get('/stored/product', MeController.show);
router.get('/trash/product', MeController.showTrash);


module.exports = router;

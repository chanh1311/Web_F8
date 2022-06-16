const express = require('express');
const router = express.Router();
const ProductController = require('../app/controllers/ProductController');

router.post('/handle-form-actions', ProductController.handleFormActions)
router.get('/:id/edit', ProductController.edit);
router.delete('/:id/delete', ProductController.destroy);
router.delete('/:id/delete-force', ProductController.destroyforce);
router.put('/:id', ProductController.update);
router.patch('/:id/restore', ProductController.restore);
router.get('/create', ProductController.create);
router.post('/store', ProductController.store);
router.get('/:slug', ProductController.show);

module.exports = router;

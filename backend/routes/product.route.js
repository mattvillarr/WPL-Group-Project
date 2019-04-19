const express = require('express');
const router = express.Router();


const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create.bind(product_controller));
router.get('/:id', product_controller.product_details);
router.patch('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);
router.get('/find', product_controller.product_find);
router.post('/search', product_controller.product_search);
module.exports = router;
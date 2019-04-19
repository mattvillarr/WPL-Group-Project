const express = require('express');
const router = express.Router();


const order_controller = require('../controllers/order.controller');

router.post('/create', order_controller.order_create);
router.get('/:orderId', order_controller.order_details);
router.delete('/:orderId/delete', order_controller.order_delete);
router.get('/find', order_controller.order_find);
module.exports = router;
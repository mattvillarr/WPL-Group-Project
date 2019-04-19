const express = require('express');
const router = express.Router();


const user_controller = require('../controllers/user.controller');

router.post('/signup', user_controller.user_create);
// router.get('/:userId', user_controller.user_details);
router.delete('/:userId/delete', user_controller.user_delete);
// router.get('/find', user_controller.user_find);
module.exports = router;
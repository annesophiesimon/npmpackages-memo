const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/userController');

router.post('/', userCtrl.registerUser )
router.post('/login', userCtrl.loginUser )


module.exports = router;

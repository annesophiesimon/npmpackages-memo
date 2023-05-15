const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const npmpackageCtrl = require('../controllers/npmpackages');


router.route('/').get(auth, npmpackageCtrl.getPackages).post(auth, npmpackageCtrl.createPackage);

router.route('/:id').get(npmpackageCtrl.getPackage).put(npmpackageCtrl.editPackage).delete(npmpackageCtrl.deletePackage);

module.exports = router;

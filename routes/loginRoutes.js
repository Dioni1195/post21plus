const express = require('express');
    loginCtrl = require('../controllers/login');
    router = express.Router();

    router.route('/auth').post(loginCtrl.authUser);

    module.exports = router;
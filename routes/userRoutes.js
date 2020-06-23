const express = require('express');
const auth = require('../utils/auth.js');
    userCtrl = require('../controllers/user');
    router = express.Router();

    router.route('/user').post(userCtrl.createUser);
    router.route('/user/post').post(auth.withAuth, userCtrl.createPost);
    router.route('/post/:id/:page').get(auth.withAuth, userCtrl.listPost);
    router.route('/user/:ownerId/post/:id').delete(auth.withAuth, userCtrl.deletePost);

    module.exports = router;
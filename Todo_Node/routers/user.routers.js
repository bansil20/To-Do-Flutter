const router = require('express').Router();

const UserController = require('../controller/user.controller');

router.post('/registration', UserController.registerUser);
router.post('/login', UserController.LoginUser);

module.exports = router;


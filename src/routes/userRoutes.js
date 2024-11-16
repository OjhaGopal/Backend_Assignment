const express = require('express');
const { registerUser, loginUser, uploadAssignment, getAllAdmins } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/upload', authMiddleware('User'), uploadAssignment);
router.get('/admins', authMiddleware('User'), getAllAdmins);

module.exports = router;

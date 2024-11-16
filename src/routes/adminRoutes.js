const express = require('express');
const { viewAssignments, updateAssignmentStatus } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/assignments', authMiddleware('Admin'), viewAssignments);
router.post('/assignments/:id/:action', authMiddleware('Admin'), updateAssignmentStatus);

module.exports = router;

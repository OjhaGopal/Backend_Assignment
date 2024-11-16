const User = require('../models/User');
const Assignment = require('../models/Assignment');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) return res.status(400).send('All fields are required');

    try {
        const user = new User({ name, email, password, role });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (err) {
        res.status(500).send('Error registering user');
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).send('All fields are required');

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).send('Invalid credentials');

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).send('Error logging in');
    }
};

const uploadAssignment = async (req, res) => {
    const { task, admin } = req.body;
    const userId = req.user.id;

    if (!task || !admin) return res.status(400).send('Task and admin are required');

    try {
        const assignment = new Assignment({ userId, adminId: admin, task });
        await assignment.save();
        res.status(201).send('Assignment uploaded successfully');
    } catch (err) {
        res.status(500).send('Error uploading assignment');
    }
};

const getAllAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: 'Admin' }).select('name email');
        res.status(200).json(admins);
    } catch (err) {
        res.status(500).send('Error fetching admins');
    }
};

module.exports = { registerUser, loginUser, uploadAssignment, getAllAdmins };

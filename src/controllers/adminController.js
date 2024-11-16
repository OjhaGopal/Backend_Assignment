const Assignment = require('../models/Assignment');

const viewAssignments = async (req, res) => {
    const adminId = req.user.id;

    try {
        const assignments = await Assignment.find({ adminId }).populate('userId', 'name').sort('-createdAt');
        res.status(200).json(assignments);
    } catch (err) {
        res.status(500).send('Error fetching assignments');
    }
};

const updateAssignmentStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!['Accepted', 'Rejected'].includes(status)) return res.status(400).send('Invalid status');

    try {
        const assignment = await Assignment.findByIdAndUpdate(id, { status }, { new: true });
        if (!assignment) return res.status(404).send('Assignment not found');
        res.status(200).send(`Assignment ${status}`);
    } catch (err) {
        res.status(500).send('Error updating assignment');
    }
};

module.exports = { viewAssignments, updateAssignmentStatus };

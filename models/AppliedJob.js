const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jobs',
        required: true // Enforce that a job reference is required
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true // Enforce that a user reference is required
    },
    coverLetter: {
        type: String,
        // required: true // Enforce that a cover letter is required
    },
    resume: {
        type: String,
        required: true // Enforce that a resume file is required
    },
    
    applicationDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'pending'
    }
});

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;


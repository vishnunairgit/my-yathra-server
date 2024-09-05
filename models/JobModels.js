const mongoose = require('mongoose')
const jobsSchema = mongoose.Schema({

    JobTitle: {
        type: String,
    },

    Experience: {
        type: String,
        required: true
    },

    Location: {
        type: String,
        required: true
    },

    Qualifications: {
        type: String,
        required: true
    },

    EmploymentType: {
        type: String,
        required: true,
    },

    Openings: {
        type: Number,
        request: true
    },

    Date: {
        type: Date,
        required: true
    },

    Salary: {
        type: String,
    },

    Keyskills: {
        type:String,
        required:true,
    },

    status: {
        type: String,
        required: true,
        default: "active", // Use "active" or "inactive"
    },

    CreatedBy: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
    },

    Description: {
        type: String,
        required: true
    },

})

const jobs = mongoose.model('jobs', jobsSchema)
module.exports = jobs
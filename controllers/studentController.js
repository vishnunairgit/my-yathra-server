const Application = require('../models/AppliedJob')
const STUDENT = require('../models/Student')
const saltRounds = 10;
const bcryptjs = require('bcryptjs'); // Ensure bcryptjs is imported




exports.AddStudent = async (req, res) => {

    try {
        const existingEmail = await STUDENT.findOne({ Email: req.body.Email });
        if (existingEmail) {
            return res.status(409).json({ message: 'Email is already registered' });
        }

        const existingPhoneNumber = await STUDENT.findOne({ Phonenumber: req.body.Phonenumber });
        if (existingPhoneNumber) {
            return res.status(409).json({ message: 'Phone number is already registered' });
        }

        const hash = await bcryptjs.hash(req.body.password, saltRounds);

        const newStudent = new STUDENT({

            Email: req.body.Email,
            Phonenumber: req.body.Phonenumber,
            Role: req.body.Role,
            ImageUpload: req.body.imageUpload,
            password: hash,
            
        });

        await newStudent.save();
        res.status(201).json({ message: "student added successful" });



    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ message: "Internal Server Error" });

    }

};
















exports.ApplyJob = async (req, res) => {
    try {
        const { coverLetter, job, user } = req.body;

        const resumePath = req.files.resume[0].path;

        console.log(req.body, '---------------req.body---------------');


        // Ensure that resume is present
        if (!req.files || !req.files.resume || !req.files.resume[0]) {
            return res.status(400).json({ message: 'Resume is required.' });
        }


        // Create a new application
        const newApplication = new Application({
            job,
            coverLetter,
            resume: resumePath,
            user,
        });

        // Save the application to the database
        await newApplication.save();

        res.status(201).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.error("Error applying for job:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



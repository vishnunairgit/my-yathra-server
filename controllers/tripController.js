const TRIPS = require('../models/TripModels');
const mongoose = require('mongoose');




// Add Trip


exports.Addtrip = async (req, res) => {
    try {
        const {
            CreatedBy, TripTitle, TripLocations, TripDuration, Flights, Hotels, Activities, TripAmount, TripDiscountAmount, status,
        } = req.body;


        const { TripFile} = req.files;

        let tripFileName = '';


        if (TripFile && TripFile[0]) {
            tripFileName = TripFile[0].filename; // Get filename from uploaded file
        }

        const createdById = mongoose.Types.ObjectId(CreatedBy);



        // let TripFile = null; // Initialize TripFile to null

        // if (req.files && req.files.TripFile && req.files.TripFile[0]) {
        //     TripFile = req.files.TripFile[0].filename; // Set TripFile if it exists
        // }



       

        // let tripFileName = '';

        // if (req.files && TripFile && TripFile[0]) {
        //     tripFileName = TripFile[0].filename; // Store the filename directly
        // }


        const newTrip = new TRIPS({
            CreatedBy, TripTitle, TripLocations, TripDuration, Flights, Hotels, Activities, TripAmount, TripDiscountAmount, status, TripFile:tripFileName, 
        });

        await newTrip.save();

        console.log(newTrip);


        res.status(201).json({ message: 'trip data Added successfully', job: newTrip });

    } catch (error) {
        console.log(error);

        if (!res.headersSent) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
};






// // exports.Addjob = async (req, res) => {
// //     try {
// //         const {
// //             CreatedBy, JobTitle, Experience, Location, Qualifications, EmploymentType, Openings, Date, Salary, status, Description, Keyskills,
// //         } = req.body;

// //         const newJob = new JOBS({
// //             CreatedBy, JobTitle, Experience, Location, Qualifications, EmploymentType, Openings, Date, Salary, status, Description, Keyskills,
// //         });

// //         await newJob.save();

// //         // Ensure io is accessible
// //         if (global.io) {
// //             global.io.emit('NEW_JOB', newJob);
// //             console.log('Notification emitted for new job:', newJob);
// //         } else {
// //             console.log('Socket.io instance is not available.');
// //         }

// //         res.status(201).json({ message: 'Job added successfully', job: newJob });

// //     } catch (error) {
// //         console.log(error);
// //         if (!res.headersSent) {
// //             res.status(500).json({ message: 'Internal Server Error' });
// //         }
// //     }
// // };




// exports.getJobs = async (req, res) => {
//     const userId = req.query.userId; // Use query parameters for GET request

//     console.log(`Received userId: ${userId}`);

//     try {
//         if (!userId) {
//             return res.status(400).json({ error: 'UserId is required' });
//         }

//         const jobs = await JOBS.find({ CreatedBy: userId }).populate('CreatedBy', 'UserName Email Logo');

//         console.log(`Jobs found: ${jobs.length}`);

//         if (!jobs || jobs.length === 0) {
//             return res.status(404).json({ error: 'No jobs found for this user' });
//         }

//         res.status(200).json(jobs);
//     } catch (error) {
//         console.error('Error fetching jobs:', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };




// // Get All Jobs
// exports.getAllJobs = async (req, res) => {

//     try {
//         const jobs = await JOBS.find().populate('CreatedBy', 'UserName Email Logo');

//         console.log(jobs, '-------jooon-----');

//         if (!jobs || jobs.length === 0) {
//             return res.status(404).json({ error: 'Jobs not found' });
//         }
//         res.status(200).json(jobs)

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// };


// // Get Single Job Data
// exports.getSingleJob = async (req, res) => {

//     const { jobId } = req.params;

//     try {
//         const job = await JOBS.findById(jobId)

//         if (!job) {
//             return res.status(404).json({ error: 'Job not found' });
//         }
//         res.status(200).json(job)

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: 'Server error' });
//     }

// }

// // Edit job
// exports.updateJob = async (req, res) => {

//     const { jobId } = req.params;
//     const updateData = req.body;

//     try {
//         const job = await JOBS.findByIdAndUpdate(jobId, updateData, { new: true });
//         if (!job) {
//             return res.status(400).json({ message: 'job not fount' })
//         }
//         res.status(200).json(job)

//     } catch (error) {
//         res.status(500).json({ message: 'Error updating job', error });
//     }

// }

// // Delete job
// exports.deleteJob = async (req, res) => {

//     const { jobId } = req.params;

//     try {
//         const job = await JOBS.findByIdAndDelete(jobId);
//         if (!job) {
//             return res.status(404).json({ message: 'Job not found' });
//         }
//         res.status(200).json({ message: 'Job deleted successfully' });

//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting job', error });

//     }

// }

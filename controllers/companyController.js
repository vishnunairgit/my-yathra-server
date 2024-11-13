const mongoose = require('mongoose');
const COMPANY = require('../models/CompanyModels');

exports.GetMycompany  = async (req, res) => {
    const userId = req.headers.userid;
    console.log(userId,'-----------userId------------');
    

    try {
        if (!userId) {
            return res.status(400).json({ error: 'UserId is required' });
        }

        // Find the company by userId (if userId is a field in the schema)
        const company = await COMPANY.findOne({ _id: userId });

        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }

        console.log(company);
        

        res.status(200).json(company);

    } catch (error) {
        console.error('Error fetching company data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

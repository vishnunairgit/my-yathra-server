const mongoose = require('mongoose');
const COMPANY = require('../models/CompanyModels');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;

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

exports.UpdateCompany = async (req, res) =>{
    const userId = req.params.userId;
    const userData = req.body;

    // handle file uploads
    try {
        console.log("Received user data:", userData);
        console.log("Received files:", req.files);
        // handle file uploads
        const { logoFile, imageFile} = req.files;

            if (req.files) {
                if (logoFile && logoFile[0]) {
                    userData.logo = logoFile[0].filename;
                }
                if (imageFile && imageFile[0]) {
                    userData.image = imageFile[0].filename;
                }
            }
    
        // Update user in the database

        const updateUser = await USER.findByIdAndUpdate(userId, userData, { new: true });
        if (!updateUser) {
            return res.status(400).json({ message: 'user not fount' })
        }
        res.status(200).json(updateUser)
        console.log(updateUser,'------------');

    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });

    }
}

exports.UpdateCompanyPassword = async (req, res) => {
    const userId = req.params.userId;
    const { currentPassword, newPassword } = req.body;

    try {
        const user = await COMPANY.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify current password
        const isPasswordValid = await bcryptjs.compare(currentPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        // Hash the new password
        const saltRounds = 10;
        const hashedPassword = await bcryptjs.hash(newPassword, saltRounds);
        user.password = hashedPassword;

        // Save the updated user
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error updating user password:', error);
        res.status(500).json({ message: 'Error updating user password', error: error.message });
    }
};
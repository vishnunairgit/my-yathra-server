const USER = require('../models/UserModels');
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;



exports.Getuser = async (req, res) => {
    const userId = req.headers.userid;
    // console.log(userId, '-----ppppppp-------');
    try {
        if (!userId) {
            return res.status(400).json({ error: 'UserId is required' });
        }
        const user = await USER.findOne({ _id: userId })

        // console.log(user, '[[[[[]]]]');

        if (!user) {
            return res.status(404).json({ message: 'user not fount' })
        }
        res.status(200).json(user)
    } catch (error) {
        // console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}



exports.updateUser = async (req, res) => {
    const userId = req.params.userId;
    const userData = req.body;

    try {
        console.log("Received user data:", userData);
        console.log("Received files:", req.files);
        // handle file uploads
        const { logoFile, imageFile} = req.files;

            if (req.files) {
                if (logoFile && logoFile[0]) {
                    userData.Logo = logoFile[0].filename;
                }
                if (imageFile && imageFile[0]) {
                    userData.Image = imageFile[0].filename;
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

exports.updateUserPassword = async (req, res) => {
    const userId = req.params.userId;
    const { currentPassword, newPassword } = req.body;

    try {
        const user = await USER.findById(userId);
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

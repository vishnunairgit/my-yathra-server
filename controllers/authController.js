const bcryptjs = require('bcryptjs'); // Ensure bcryptjs is imported
const COMPANY = require('../models/CompanyModels'); // Assuming you have a User model defined
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const register = async (req, res) => {
    try {
        // Check if email is already registered
        const existingEmail = await COMPANY.findOne({ Email: req.body.Email });
        if (existingEmail) {
            return res.status(409).json({ message: 'Email is already registered' });
        }

        // Check if phone number is already registered
        const existingPhoneNumber = await COMPANY.findOne({ Phonenumber: req.body.Phonenumber });
        if (existingPhoneNumber) {
            return res.status(409).json({ message: 'Phone number is already registered' });
        }

        // Hash the password before saving it to the database
        const hash = await bcryptjs.hash(req.body.password, saltRounds);

        // Create a new user instance
        const newcompany = new COMPANY({
            CompanyName: req.body.CompanyName,
            Email: req.body.Email,
            Phonenumber: req.body.Phonenumber,
            Address: req.body.Address,
            Instagram: req.body.Instagram,
            FaceBook: req.body.FaceBook,
            About: req.body.About,
            Role:req.body.Role,
            logoFile: req.body.logoFile,
            imageFile: req.body.imageFile,
            password: hash,
        });

        // Save the new user to the database
        await newcompany.save();
        res.status(201).json({ message: "Sign-up successful" });
    } catch (error) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { Email, password } = req.body;

        // Find user by UserName in the database
        const company = await COMPANY.findOne({ Email });

        if (!company) {
            return res.status(401).json({ message: 'Invalid User Name or password' });
        }

        // Compare hashed password with input password
        const isPasswordValid = await bcryptjs.compare(password, company.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid User Name or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ companyId: company?._id, Role:company?.Role }, process.env.JWT_PASSWORD, { expiresIn: '3h' });

        // Return success message and token
        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = { register, login };

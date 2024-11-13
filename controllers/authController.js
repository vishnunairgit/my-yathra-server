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

        // Check if username is already taken
        const existingUserName = await COMPANY.findOne({ UserName: req.body.UserName });
        if (existingUserName) {
            return res.status(409).json({ message: 'Username is already taken' });
        }

        // Check if phone number is already registered
        const existingPhoneNumber = await COMPANY.findOne({ Phonenumber: req.body.Phonenumber });
        if (existingPhoneNumber) {
            return res.status(409).json({ message: 'Phone number is already registered' });
        }

        // Check if registration number is already registered
        const existingRegistrationNumber = await COMPANY.findOne({ RegistrationNumber: req.body.RegistrationNumber });
        if (existingRegistrationNumber) {
            return res.status(409).json({ message: 'RegistrationNumber is already registered' });
        }

        // Hash the password before saving it to the database
        const hash = await bcryptjs.hash(req.body.password, saltRounds);

        // Create a new user instance
        const newcompany = new COMPANY({
            UserName: req.body.UserName,
            CompanyName: req.body.CompanyName,
            RegistrationNumber: req.body.RegistrationNumber,
            Email: req.body.Email,
            Phonenumber: req.body.Phonenumber,
            Address: req.body.Address,
            Website: req.body.Website,
            LinkedIn: req.body.LinkedIn,
            Industry: req.body.Industry,
            Incorporationdate: req.body.Incorporationdate,
            About: req.body.About,
            Role:req.body.Role,
            LogoUpload: req.body.logoUpload,
            ImageUpload: req.body.imageUpload,
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
        const { UserName, password } = req.body;

        // Find user by UserName in the database
        const company = await COMPANY.findOne({ UserName });

        if (!company) {
            return res.status(401).json({ message: 'Invalid User Name or password' });
        }

        // Compare hashed password with input password
        const isPasswordValid = await bcryptjs.compare(password, company.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid User Name or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: company._id, Role:company?.Role }, process.env.JWT_PASSWORD, { expiresIn: '3h' });

        // Return success message and token
        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


module.exports = { register, login };

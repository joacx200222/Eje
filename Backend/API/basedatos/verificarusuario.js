const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

// Create an instance of Express
const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Create a Sequelize instance and connect to the database
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Define the User model
const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Define a route to verify user credentials
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user with the given username and password
        const user = await User.findOne({ where: { username, password } });

        if (user) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
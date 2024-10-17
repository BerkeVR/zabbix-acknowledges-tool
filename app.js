const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const port = 4000;

// MySQL connection configuration
const dbConfig = {
    host: '', // MySQL server address
    user: '', // MySQL username
    password: '', // MySQL password
    database: '' // The name of the database to use
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve the main HTML file
});

app.get('/user.html', (req, res) => {
    res.sendFile('/PATH/user.html'); // Serve the user.html file
});

// Create a MySQL connection
const connection = mysql.createConnection(dbConfig);

// Test the MySQL connection
connection.connect((err) => {
    if (err) {
        console.error('MySQL connection error: ' + err.stack);
        return;
    }
    console.log('MySQL connection established successfully.');
});

// Express.js endpoint
app.use(express.static('/PATH/app.js')); // Serve static files

app.get('/query', (req, res) => {
    const query = req.query.sql;

    if (!query) {
        res.status(400).json({ error: 'Query parameter is missing' }); // Handle missing query parameter
        return;
    }

    // Execute the MySQL query
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('MySQL query error: ' + error.stack);
            res.status(500).json({ error: 'Server error' }); // Handle query execution error
            return;
        }

        // Send the query results as JSON
        res.json(results);
    });
});

// Start the application on the specified port
app.listen(port, () => {
    console.log(`Application is running on port ${port}.`);
});

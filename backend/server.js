const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');

const port = process.env.PORT || 8000;

const connectDB = require('./config/db');

const { errorHandler } = require('./middleware/errorMiddleware');

// Connecting to DataBase
connectDB();

const app = express();

// BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

// Using errorHandler middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

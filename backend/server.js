const express = require('express');
const port = process.env.PORT || 8000;

const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

require('dotenv').config();

// BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', require('./routes/goalRoutes'));

// Using errorHandler middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

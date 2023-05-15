const express = require('express');
const colors = require('colors');

const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const connectDB = require('./backend/config/db');
const questionRouter = require('./backend/routes/questions');
const userRouter = require('./backend/routes/user');

app.use('/questions',questionRouter);
app.use('/user',userRouter);
connectDB()
app.listen(8080);

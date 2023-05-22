const express = require('express');
const colors = require('colors');

const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const connectDB = require('./backend/config/db');
const cors = require('cors');
const questionRouter = require('./backend/routes/questions');
const userRouter = require('./backend/routes/user');
const surveyRouter = require('./backend/routes/surveys');
const finalRouter = require('./backend/routes/final');

app.use(cors());
app.use(express.json());
app.use('/questions',questionRouter);
app.use('/user',userRouter);
app.use('/surveys',surveyRouter);
app.use('/finals',finalRouter);
connectDB()
app.listen(8080);

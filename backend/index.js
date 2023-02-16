const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const userRouter = require('./routes/user');

const app = express();
dotEnv.config();

app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8800;

app.use('/api/v1/users', userRouter);




app.listen(port, () => {
    console.log(`App is Running on port ${port}`);
})
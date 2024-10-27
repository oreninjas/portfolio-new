const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const contactRoutes = require('./routes/contactRoutes')

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to DB"))
.catch(err => console.log("Error while connecting to DB: ", err));

app.use('/api/contact', contactRoutes)

app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
})
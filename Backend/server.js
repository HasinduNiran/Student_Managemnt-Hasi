const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8071;
app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex:true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify:false
},)
    .then(() => console.log('connected successfully'))
    .catch((err) => { console.error(err); });


const studentRouter = require("./routes/student.js");
// http://localhost:8071/student

app.use("/student", studentRouter);


app.listen(PORT, () => {
    console.log('Server is up and runnig on port number:', PORT);
})

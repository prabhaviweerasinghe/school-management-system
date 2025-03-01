const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const studentRoutes = require('./routes/students')
const teaherRoutes = require('./routes/teacher')


//app middleware
app.use(bodyParser.json()); 
app.use(cors());

//route middleware
app.use(studentRoutes);
app.use(teaherRoutes) 


const PORT = 8000;
const DB_URL = ''

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));



app.listen(PORT, () =>  {
    console.log(`App is running on ${PORT}`); 
});

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');
const refundRoutes = require('./routes/refund');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(refundRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://Nipuna:Nipuna@20@cluster0.js0dx.mongodb.net/mernCrud?retryWrites=true&w=majority'



mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() =>{
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));



app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});
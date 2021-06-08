const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const user = require('./models/userModel');

mongoose.connect('mongodb://localhost:27017/bruteforceDB', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));


app.post('/api/user/register', (req, res) =>{
    // creates new user
    if(!req.body.email || !req.body.password || !req.body.firstName || !req.body.lastName){
        return res.status(400).json({msg: "Please fill out all fields"});
    }
    const new_user = new user();
    new_user.uid = uuidv4();
    new_user.email = req.body.email;
    new_user.password = req.body.password;
    new_user.firstName = req.body.firstName;
    new_user.lastName = req.body.lastName;
    new_user.save();
    res.status(200).send({msg: 'User Created Succesfully'});
});

user.find({name: 'f1'}, (error, data)=>{
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

// const test_user1 = new user();
// test_user1.name = '21';
// test_user1.uid = '21';
// test_user1.email ='2';
// test_user1.password='te2st';
// test_user1.firstName='te22st';
// test_user1.lastName ='te2222st';
// test_user1.save();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));


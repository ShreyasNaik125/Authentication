const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./model/schema');

app.use(cors());
app.use(express.json()); 

mongoose.connect("mongodb://127.0.0.1:27017/reactauth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  UserModel.create({ name, email, password })
    .then((user) => {
      console.log('Document Created', user);
      res.status(201).json({ message: 'User registered successfully', user });
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to register user' });
    });
});

app.post('/login',(req,res)=>{
  const { email,password } = req.body;
  UserModel.find({email:email})
  .then(response => {
    if (password == response[0].password){
      res.json({status:200,message:"login successful"})
    }else{
      res.json({status:500,message:"wrong password,try again"})
    }
  }).catch((e) => res.json({status:404,message:"account not found"}))
})

app.listen(3000, () => {
  console.log('Server is running on port 5174');
});
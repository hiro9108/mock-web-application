const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const port = 3080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = {
  firstName: String,
  lastName: String,
  email: String,
  password: String
}

const User = new mongoose.model('User', userSchema);

// app.get('/', (req, res) => res.render('Hello React'));

app.post('/register', (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('http://localhost:3000/secret');
    }
  });
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, foundUser) => {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.redirect('http://localhost:3000/secret'); // match email and password
        } else {
          res.redirect('http://localhost:3000/'); // Not match password
        }
      } else {
        res.redirect('http://localhost:3000/'); // Not match email
      }
    }
  });
});


app.listen(port, (req, res) => {
  console.log('Server is running on port ' + port);
});
'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
var cors = require('cors');
const axios = require('axios');

const app = express();
var router = express.Router();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now we can set the route path & initialize the API
router.get('/', function (req, res) {
  res.json({ message: 'API Initialized!' });
});
//Use our router configuration when we call /api
app.use('/api', router);

app.get('/api/hello', (req, res) => {
  res.status(200).send({ express: 'Hello From Express' });
});

app.post('/api/submit', (req, res) => {
  console.log(req.body);
  var postData = {
    nargout: 1, rhs: [5]
  }

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    }
  };

  axios.post('http://localhost:53991/mpsTestData/myMagic',
    postData, axiosConfig
  ).then(function (response) {
    res.status(200).send(JSON.stringify(response.data));
    // console.log("res:"+response.status);
    console.log("res:" + JSON.stringify(response.data));
  }).catch(function (response) {
    res.status(404).send("No response from MPS!");
    console.log("err" + response);
  });
  // res.status(200).send("posted!");

  // var username = res.body.username;
  // var email = res.body.email;
  // var birthdate = res.body.birthdate;
  // console.log("Post Received: %s %s %s", username, birthdate, email);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
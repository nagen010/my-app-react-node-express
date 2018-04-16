const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(cookieParser());

app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.status(200).send({ express: 'Hello From Express' });
});

app.post('/api/submit', (req, res) => {
  console.log(req.body);
  res.status(200).send("posted!");
  // var username = res.body.username;
  // var email = res.body.email;
  // var birthdate = res.body.birthdate;
  // console.log("Post Received: %s %s %s", username, birthdate, email);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
const express = require("express");
const bodyParser = require('body-parser')
const router = express.Router();
const code = require('./controllers/code');
const vault = require('./controllers/vault');

const app = express();
const bodyparser = require("body-parser");

const port =  lllll;

app.use(bodyParser.urlencoded({    
    extended: false
  })); 

app.route('/')
    .get(vault.GET);

app.route('/vault')
   // .get(code.codeGET)
   // .post(code.codePOST)



app.use(bodyparser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Url: http://localhost`)
  console.log(`Port: ${port}`);
  console.log(`Congratulations! The API is Running 👍`);
});
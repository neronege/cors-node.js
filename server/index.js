var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors({
    origin: 'https://api.minimumcrm.com/dev/MinimumCRMUserGatewayWS/functions'
  }));
  app.post('/authenticate', (req, res) =>{
    console.log(req.body.mail) 
    console.log(req.body.password) 
})
/*cd s
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000



// We are using our packages here
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true})); 
app.use(cors())

//You can use this to check if your server is working
app.get('/', (req, res)=>{
res.send("Welcome to your server")
})

app.use(cors({
    origin: 'https://www.shttps://api.minimumcrm.com/dev/MinimumCRMUserGatewayWS/functions/authenticateection'
}));

//Route that handles login logic
app.post('/authenticate', (req, res) =>{
    console.log(req.body.mail) 
    console.log(req.body.password) 
})



//Start your server on a specified port
app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`)
}) */

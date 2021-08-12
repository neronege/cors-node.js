
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000
const validate = require("validate.js");

app.use( bodyParser.json() );       

app.use(bodyParser.urlencoded({     
 extended: true})); 
app.use(cors())


app.get('/', (req, res)=>{
res.send("Welcome to your server")
})

app.use(cors({
    origin: 'https://api.minimumcrm.com/dev/MinimumCRMUserGatewayWS/functions/authenticate'
}));
app.use(cors({
    origin: 'https://api.minimumcrm.com/dev/MinimumCRMGatewayWS/functions/getEventLogs'
}));


app.post('/authenticate', (req, res) =>{
  res.send({'email': 'crm@minimumcrm.com',
    'password': 'Hermes35**'})
    console.log(req.body.password)
    console.log(req.body.mail)
})
app.post('/getEventLogs', (req, res) =>{
    res.send({'beginDate:': '2021-08.12',
      'endDate:': '2021-08-13'})
      console.log(req.body.beginDate)
      console.log(req.body.endDate)
  })

  app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`)
}) 

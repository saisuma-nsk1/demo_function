const express = require('express')
const serverless = require('serverless-http');
const app = express()
 
app.get('/data', function (req, res) {
  res.send('Hello sankar')
})

module.exports.history = serverless(app);
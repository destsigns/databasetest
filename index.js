const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/',function(req,res){
  res.sendFile("http://localhost:" + port + "/index.html");
  }
)

app.post('/',function(req,res){
  res.send('Got a POST request')
})

app.put('/user',function(req,res){
  res.send('Got a PUT request at /user')
})

app.delete('/user',function(req,res){
  res.send('Got a DELETE request at /user')
})

app.listen(port, function(){
  console.log(`Example app listening at http://localhost:${port}`)
})
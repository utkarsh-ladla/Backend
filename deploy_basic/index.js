require('dotenv').config()
const express = require('express')
const app = express()
//every body dont have free port we use env files 

const PORT = 4000
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home',(req,res)=>{
    res.send('Home')
})

app.get('/login',(req,res)=> {
    res.send('<h1>please login with </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
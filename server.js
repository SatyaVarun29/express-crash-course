const express=require('express')

const app=express();

app.get('/',(req,res)=>{
res.send('<h1>I am express </h1>')
})

app.get('/about',(req,res)=>{
res.send('I am about')
})

app.listen(8000,()=> console.log('Listening on port 8000'))